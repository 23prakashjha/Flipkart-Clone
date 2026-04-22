import { useState } from 'react'
import { Star, ThumbsUp, ThumbsDown, Filter, ChevronDown, ChevronUp, User, Search } from 'lucide-react'
import { userReviews } from '../data/reviews'

const UserReviewsPage = () => {
  const [expandedReviews, setExpandedReviews] = useState(new Set())
  const [filterRating, setFilterRating] = useState('all')
  const [sortBy, setSortBy] = useState('recent')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const reviewsPerPage = 10

  const toggleReviewExpansion = (reviewId) => {
    const newExpanded = new Set(expandedReviews)
    if (newExpanded.has(reviewId)) {
      newExpanded.delete(reviewId)
    } else {
      newExpanded.add(reviewId)
    }
    setExpandedReviews(newExpanded)
  }

  const filteredReviews = userReviews.filter(review => {
    const matchesSearch = review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.fullReview.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRating = filterRating === 'all' || review.rating === parseInt(filterRating)
    return matchesSearch && matchesRating
  })

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'recent') return new Date(b.date) - new Date(a.date)
    if (sortBy === 'helpful') return b.helpfulCount - a.helpfulCount
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'verified') return b.verified - a.verified
    return 0
  })

  const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage)
  const startIndex = (currentPage - 1) * reviewsPerPage
  const endIndex = startIndex + reviewsPerPage
  const currentReviews = sortedReviews.slice(startIndex, endIndex)

  const averageRating = userReviews.reduce((sum, review) => sum + review.rating, 0) / userReviews.length
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: userReviews.filter(r => r.rating === rating).length,
    percentage: (userReviews.filter(r => r.rating === rating).length / userReviews.length) * 100
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Customer Reviews</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Left Side - Stats and Filters */}
          <div className="xl:col-span-1">
            {/* Rating Summary */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{averageRating.toFixed(1)}</h2>
                <div className="flex items-center justify-center mb-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star
                      key={star}
                      className={`w-8 h-8 ${star <= Math.round(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <div className="text-lg text-gray-600">{userReviews.length} Reviews</div>
              </div>
              
              <div className="space-y-3">
                {ratingDistribution.map(({ rating, count, percentage }) => (
                  <div key={rating} className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600 w-8">{rating}</span>
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full" 
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter & Sort</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Rating</label>
                  <select 
                    value={filterRating} 
                    onChange={(e) => setFilterRating(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Ratings</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort by</label>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="recent">Most Recent</option>
                    <option value="helpful">Most Helpful</option>
                    <option value="rating">Highest Rating</option>
                    <option value="verified">Verified Purchases</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Reviews List */}
          <div className="xl:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 p-6">
                {currentReviews.map((review, index) => (
                  <div key={review.id} className="border-b border-gray-200 last:border-b-0">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                            {review.avatar ? (
                              <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full" />
                            ) : (
                              <User className="w-8 h-8 text-gray-500" />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{review.name}</div>
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map(star => (
                                  <Star
                                    key={star}
                                    className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600 ml-2">{review.date}</span>
                            </div>
                            {review.verified && (
                              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="text-gray-900 mb-3">{review.title}</div>
                      <div className="text-gray-700 mb-3">
                        {expandedReviews.has(review.id) ? review.fullReview : review.shortReview}
                      </div>

                      {review.fullReview.length > review.shortReview.length && (
                        <button
                          onClick={() => toggleReviewExpansion(review.id)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center space-x-1 mb-3"
                        >
                          {expandedReviews.has(review.id) ? (
                            <>
                              <ChevronUp className="w-4 h-4" />
                              Show less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4" />
                              Read more
                            </>
                          )}
                        </button>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button 
                            onClick={() => {
                              // Handle helpful click
                              const updatedReviews = userReviews.map(r => 
                                r.id === review.id ? {...r, helpfulCount: r.helpfulCount + 1} : r
                              );
                              // In a real app, this would update the backend
                            }}
                            className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors"
                          >
                            <ThumbsUp className="w-4 h-4" />
                            <span className="text-sm">Helpful ({review.helpfulCount})</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors">
                            <ThumbsDown className="w-4 h-4" />
                            <span className="text-sm">Not Helpful</span>
                          </button>
                        </div>
                        
                        {review.response && (
                          <button 
                            onClick={() => toggleReviewExpansion(`response-${review.id}`)}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                          >
                            {expandedReviews.has(`response-${review.id}`) ? 'Hide Response' : 'View Response'}
                          </button>
                        )}
                      </div>

                      {review.response && expandedReviews.has(`response-${review.id}`) && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="font-semibold text-blue-900 mb-2">Response from Seller</div>
                          <div className="text-blue-800">{review.response}</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default UserReviewsPage
