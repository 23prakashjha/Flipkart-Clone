import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Plus, Minus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react'

export default function Cart() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Motorola Edge 40 5G',
      price: 24999,
      originalPrice: 29999,
      discount: 17,
      image: 'moto',
      quantity: 1,
      seller: 'Motorola India',
      inStock: true
    },
    {
      id: 2,
      name: 'Vivo V29 5G',
      price: 32999,
      originalPrice: 38999,
      discount: 15,
      image: 'vivo',
      quantity: 2,
      seller: 'Vivo Mobiles',
      inStock: true
    },
    {
      id: 3,
      name: 'Samsung Galaxy Watch 6',
      price: 18999,
      originalPrice: 24999,
      discount: 24,
      image: 'one1',
      quantity: 1,
      seller: 'Samsung India',
      inStock: false
    }
  ])

  const handleQuantityChange = (id, type) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        if (type === 'increase') {
          return { ...item, quantity: item.quantity + 1 }
        } else if (type === 'decrease' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 }
        }
      }
      return item
    }))
  }

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const calculateDiscount = () => {
    return cartItems.reduce((total, item) => {
      const discountAmount = item.originalPrice - item.price
      return total + (discountAmount * item.quantity)
    }, 0)
  }

  const calculateTotal = () => {
    return calculateSubtotal()
  }

  const handlePlaceOrder = () => {
    navigate('/checkout')
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add items to your cart to see them here</p>
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
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
          <h1 className="text-2xl font-bold text-gray-900">My Cart ({cartItems.length} items)</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <img
                    src={`/src/images/${item.image}.webp`}
                    alt={item.name}
                    className="w-32 h-32 object-contain rounded-lg border"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">Seller: {item.seller}</p>
                        
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="text-xl font-bold text-gray-900">Rs.{item.price}</span>
                          <span className="text-lg text-gray-500 line-through">Rs.{item.originalPrice}</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                            {item.discount}% off
                          </span>
                        </div>

                        {!item.inStock && (
                          <div className="text-red-600 text-sm font-medium mb-2">
                            Out of Stock
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium">Quantity:</span>
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => handleQuantityChange(item.id, 'decrease')}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 'increase')}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="text-sm text-gray-600">
                        Subtotal: Rs.{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>

                    {/* Delivery Info */}
                    <div className="mt-3 text-sm text-gray-600">
                      Delivery by Tomorrow | Free
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Add More Items */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Link
                to="/"
                className="flex items-center justify-center text-blue-600 hover:text-blue-700 font-medium"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add more items from wishlist
              </Link>
            </div>
          </div>

          {/* Price Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Price Details</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Price ({cartItems.length} items)</span>
                  <span>Rs.{calculateSubtotal().toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Discount</span>
                  <span className="text-green-600">-Rs.{calculateDiscount().toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">Free</span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total Amount</span>
                    <span>Rs.{calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="bg-green-50 text-green-800 text-sm p-3 rounded">
                  You will save Rs.{calculateDiscount().toLocaleString()} on this order
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition mt-6"
              >
                PLACE ORDER
              </button>

              <div className="mt-4 text-xs text-gray-500 text-center">
                By placing this order, you agree to our Terms & Conditions
              </div>
            </div>

            {/* Promo Code */}
            <div className="bg-white rounded-lg p-6 shadow-sm mt-4">
              <h3 className="font-medium mb-3">Promo Code</h3>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Apply
                </button>
              </div>
            </div>

            {/* Safety Assurance */}
            <div className="bg-white rounded-lg p-6 shadow-sm mt-4">
              <h3 className="font-medium mb-3">Safety Assurance</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  <span>100% Secure Payments</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  <span>Trustpay</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  <span>Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
