import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Star, Plus, Minus, Heart, Share2, Truck, Shield, RefreshCw } from 'lucide-react'
import { getProductById } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart()
  
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  
  const productId = parseInt(id)
  const product = getProductById(productId)

  // Generate additional images for the product using only existing images
  const availableImages = ['moto', 'vivo', 'one1', 'one2', 'one3', 'one4', 'one5', 'one6', 'one7', 'one8', 'price1', 'price2', 'price3', 'price4', 'price5', 'price6', 'price7', 'price8', 'price9', 'price10', 'price11', 'price12', 'price13', 'price14', 'price15', 'price16', 'price17']
  const productImages = product ? [
    product.image,
    availableImages[Math.floor(Math.random() * availableImages.length)],
    availableImages[Math.floor(Math.random() * availableImages.length)],
    availableImages[Math.floor(Math.random() * availableImages.length)]
  ].filter((img, index, self) => self.indexOf(img) === index) : []

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity)
    }
  }

  const handleBuyNow = () => {
    if (product) {
      addToCart(product, quantity)
      navigate('/checkout')
    }
  }

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1)
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const handleWishlistToggle = () => {
    if (product) {
      if (isInWishlist(product.id)) {
        removeFromWishlist(product.id)
      } else {
        addToWishlist(product)
      }
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-8">
              <img
                src={`/src/images/${productImages[selectedImage]}.webp`}
                alt={product.name}
                className="w-full h-96 object-contain rounded-lg"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 border-2 rounded-lg p-2 ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'}`}
                >
                  <img
                    src={`/src/images/${image}.webp`}
                    alt={`${product.name} ${index + 1}`}
                    className="w-20 h-20 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-gray-900">Rs.{product.price.toLocaleString()}</span>
                {product.originalPrice > product.price && (
                  <span className="text-lg text-gray-500 line-through">Rs.{product.originalPrice.toLocaleString()}</span>
                )}
                {product.discount > 0 && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                    {product.discount}% off
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{product.rating}</span>
                </div>
                <span className="text-gray-500">({product.reviews.toLocaleString()} Reviews)</span>
              </div>

              <div className="flex items-center space-x-2 text-green-600">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="font-medium">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange('decrease')}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange('increase')}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition"
                >
                  BUY NOW
                </button>
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-yellow-500 transition"
                >
                  ADD TO CART
                </button>
              </div>

              <div className="flex space-x-4 mt-4">
                <button
                  onClick={handleWishlistToggle}
                  className={`flex items-center space-x-2 px-4 py-2 border rounded-lg ${isInWishlist(product.id) ? 'border-red-500 text-red-500' : 'border-gray-300 text-gray-600'}`}
                >
                  <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                  <span>{isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Delivery and Services */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-medium mb-4">Delivery & Services</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Free Delivery</p>
                    <p className="text-sm text-gray-500">Delivery by Tomorrow</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Warranty</p>
                    <p className="text-sm text-gray-500">1 Year Manufacturer Warranty</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RefreshCw className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">7 Day Replacement</p>
                    <p className="text-sm text-gray-500">Easy replacement policy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-medium mb-4">Seller Information</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{product.brand || 'Flipkart'}</p>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm">{4.5}</span>
                    <span className="ml-2 text-sm text-gray-500">(89234 Reviews)</span>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  View Store
                </button>
              </div>
            </div>

            {/* Product Highlights */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-medium mb-4">Product Highlights</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">â</span>
                  <span className="text-gray-700">High Quality Product</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">â</span>
                  <span className="text-gray-700">Fast Delivery Available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">â</span>
                  <span className="text-gray-700">Manufacturer Warranty</span>
                </li>
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-medium mb-4">Specifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Brand</span>
                  <span className="font-medium">{product.brand || 'Generic'}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium">{product.category || 'General'}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">In Stock</span>
                  <span className="font-medium">{product.inStock ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-medium">{product.rating} / 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
