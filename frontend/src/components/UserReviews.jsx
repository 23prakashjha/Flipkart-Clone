import { useState } from 'react'
import { Star, ThumbsUp, ThumbsDown, Filter, ChevronDown, ChevronUp, User } from 'lucide-react'

const UserReviews = ({ title, subtitle, reviews }) => {
  const [expandedReviews, setExpandedReviews] = useState(new Set())
  const [filterRating, setFilterRating] = useState('all')
  const [sortBy, setSortBy] = useState('recent')
  const [showAllReviews, setShowAllReviews] = useState(false)

  const toggleReviewExpansion = (reviewId) => {
    const newExpanded = new Set(expandedReviews)
    if (newExpanded.has(reviewId)) {
      newExpanded.delete(reviewId)
    } else {
      newExpanded.add(reviewId)
    }
    setExpandedReviews(newExpanded)
  }

  const filteredReviews = reviews.filter(review => {
    if (filterRating === 'all') return true
    return review.rating === parseInt(filterRating)
  })

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'recent') return new Date(b.date) - new Date(a.date)
    if (sortBy === 'helpful') return b.helpfulCount - a.helpfulCount
    if (sortBy === 'rating') return b.rating - a.rating
    return 0
  })

  const displayReviews = showAllReviews ? sortedReviews : sortedReviews.slice(0, 10)

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / reviews.length) * 100
  }))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
      </div>

      {/* Rating Summary */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-4">
            <div className="text-5xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>
            <div>
              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${star <= Math.round(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">{reviews.length} Reviews</div>
            </div>
          </div>
          
          <div className="space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 w-3">{rating}</span>
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-400 h-2 rounded-full" 
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-10 text-right">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <select 
              value={filterRating} 
              onChange={(e) => setFilterRating(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="recent">Most Recent</option>
              <option value="helpful">Most Helpful</option>
              <option value="rating">Highest Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reviews List with Scrollbar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {displayReviews.map((review, index) => (
            <div key={review.id} className="border-b border-gray-200 last:border-b-0">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      {review.avatar ? (
                        <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full" />
                      ) : (
                        <User className="w-6 h-6 text-gray-500" />
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
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-green-600">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">Helpful ({review.helpfulCount})</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600">
                      <ThumbsDown className="w-4 h-4" />
                      <span className="text-sm">Not Helpful</span>
                    </button>
                  </div>
                  
                  {review.response && (
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Response
                    </button>
                  )}
                </div>

                {review.response && expandedReviews.has(review.id) && (
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

      {/* Show More Button */}
      {!showAllReviews && reviews.length > 10 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAllReviews(true)}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Load More Reviews ({reviews.length - 10} more)
          </button>
        </div>
      )}
    </div>
  )
}

export default UserReviews
