import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Heart, ShoppingCart, ArrowLeft, Star, Trash2 } from 'lucide-react'

export default function Wishlist() {
  const navigate = useNavigate()
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Motorola Edge 40 5G',
      price: 24999,
      originalPrice: 29999,
      discount: 17,
      rating: 4.3,
      reviews: 12456,
      image: 'moto',
      seller: 'Motorola India',
      inStock: true,
      addedDate: '2024-01-10'
    },
    {
      id: 2,
      name: 'Samsung Galaxy Watch 6',
      price: 18999,
      originalPrice: 24999,
      discount: 24,
      rating: 4.5,
      reviews: 8923,
      image: 'one1',
      seller: 'Samsung India',
      inStock: true,
      addedDate: '2024-01-08'
    },
    {
      id: 3,
      name: 'OnePlus Nord CE 3',
      price: 26999,
      originalPrice: 31999,
      discount: 16,
      rating: 4.2,
      reviews: 6789,
      image: 'oneplus',
      seller: 'OnePlus Store',
      inStock: false,
      addedDate: '2024-01-05'
    },
    {
      id: 4,
      name: 'Apple AirPods Pro',
      price: 19999,
      originalPrice: 24999,
      discount: 20,
      rating: 4.6,
      reviews: 15234,
      image: 'one2',
      seller: 'Apple Store',
      inStock: true,
      addedDate: '2024-01-03'
    }
  ])

  const handleRemoveFromWishlist = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id))
  }

  const handleAddToCart = (item) => {
    // Add to cart logic here
    console.log('Added to cart:', item)
    // Navigate to cart or show notification
    navigate('/cart')
  }

  const handleMoveToCart = (id) => {
    // Move item to cart and remove from wishlist
    const item = wishlistItems.find(item => item.id === id)
    if (item) {
      handleAddToCart(item)
      handleRemoveFromWishlist(id)
    }
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-6">Save items you love to your wishlist</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <h1 className="text-2xl font-bold text-gray-900">My Wishlist ({wishlistItems.length} items)</h1>
          </div>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              {/* Product Image */}
              <div className="relative">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={`/src/images/${item.image}.webp`}
                    alt={item.name}
                    className="w-full h-48 object-contain p-4"
                  />
                </Link>
                
                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  <Trash2 className="h-4 w-4 text-gray-600" />
                </button>

                {/* Stock Status */}
                {!item.inStock && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                    Out of Stock
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-4">
                <Link to={`/product/${item.id}`}>
                  <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition">
                    {item.name}
                  </h3>
                </Link>

                {/* Seller */}
                <p className="text-sm text-gray-600 mb-2">Seller: {item.seller}</p>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{item.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">({item.reviews.toLocaleString()})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg font-bold text-gray-900">Rs.{item.price}</span>
                  <span className="text-sm text-gray-500 line-through">Rs.{item.originalPrice}</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    {item.discount}% off
                  </span>
                </div>

                {/* Added Date */}
                <p className="text-xs text-gray-500 mb-3">
                  Added on {new Date(item.addedDate).toLocaleDateString()}
                </p>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => handleMoveToCart(item.id)}
                    disabled={!item.inStock}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition ${
                      item.inStock
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="h-4 w-4 inline mr-2" />
                    {item.inStock ? 'Move to Cart' : 'Out of Stock'}
                  </button>
                  
                  <Link
                    to={`/product/${item.id}`}
                    className="block w-full text-center py-2 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add More Items Section */}
        <div className="mt-8 bg-white rounded-lg p-8 shadow-sm text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Love these items?</h2>
          <p className="text-gray-600 mb-6">Move them to your cart and enjoy exclusive deals!</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Recommendations */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sample recommendation items */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={`/src/images/price${i}.webp`}
                    alt={`Recommended product ${i}`}
                    className="w-full h-48 object-contain p-4"
                  />
                  <button
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                  >
                    <Heart className="h-4 w-4 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                    Recommended Product {i}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-lg font-bold text-gray-900">Rs.{(15000 + i * 2000).toLocaleString()}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      {10 + i}% off
                    </span>
                  </div>
                  <button className="w-full py-2 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
