import { useNavigate } from 'react-router-dom'
import { CheckCircle, Package, ArrowLeft, Home, ShoppingBag } from 'lucide-react'

export default function OrderSuccess() {
  const navigate = useNavigate()

  const orderId = 'ORD' + Date.now().toString().slice(-6)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your order. Your order has been placed successfully and will be delivered soon.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <Package className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-medium">Order ID: {orderId}</span>
            </div>
            <p className="text-sm text-gray-600">
              A confirmation email has been sent to your registered email address.
            </p>
          </div>

          {/* Estimated Delivery */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">Estimated Delivery</p>
            <p className="font-medium text-gray-900">
              {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => navigate('/orders')}
              className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              <Package className="h-5 w-5 mr-2" />
              View Order Details
            </button>
            
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => navigate('/')}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                <Home className="h-4 w-4 mr-2" />
                Home
              </button>
              
              <button
                onClick={() => navigate('/cart')}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Continue Shopping
              </button>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-6 pt-6 border-t">
            <p className="text-sm text-gray-600 mb-2">Need help with your order?</p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Contact Customer Support
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
