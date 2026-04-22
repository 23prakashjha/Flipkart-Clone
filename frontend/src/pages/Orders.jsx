import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Package, Truck, CheckCircle, XCircle, Clock, Eye, Download } from 'lucide-react'

export default function Orders() {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('all')

  const [orders] = useState([
    {
      id: 'ORD001',
      date: '2024-01-15',
      status: 'delivered',
      total: 24999,
      items: [
        {
          id: 1,
          name: 'Motorola Edge 40 5G',
          price: 24999,
          quantity: 1,
          image: 'moto'
        }
      ],
      deliveryAddress: {
        name: 'John Doe',
        address: '123 Main Street, Apt 4B',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001'
      },
      paymentMethod: 'Cash on Delivery',
      estimatedDelivery: '2024-01-17',
      trackingId: 'TRK123456789'
    },
    {
      id: 'ORD002',
      date: '2024-01-14',
      status: 'processing',
      total: 65998,
      items: [
        {
          id: 2,
          name: 'Vivo V29 5G',
          price: 32999,
          quantity: 2,
          image: 'vivo'
        }
      ],
      deliveryAddress: {
        name: 'John Doe',
        address: '123 Main Street, Apt 4B',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001'
      },
      paymentMethod: 'Credit Card',
      estimatedDelivery: '2024-01-18',
      trackingId: 'TRK123456790'
    },
    {
      id: 'ORD003',
      date: '2024-01-10',
      status: 'shipped',
      total: 37898,
      items: [
        {
          id: 3,
          name: 'Samsung Galaxy Watch 6',
          price: 18999,
          quantity: 2,
          image: 'one1'
        }
      ],
      deliveryAddress: {
        name: 'John Doe',
        address: '123 Main Street, Apt 4B',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001'
      },
      paymentMethod: 'UPI',
      estimatedDelivery: '2024-01-16',
      trackingId: 'TRK123456791'
    },
    {
      id: 'ORD004',
      date: '2024-01-08',
      status: 'cancelled',
      total: 19999,
      items: [
        {
          id: 4,
          name: 'Apple AirPods Pro',
          price: 19999,
          quantity: 1,
          image: 'one2'
        }
      ],
      deliveryAddress: {
        name: 'John Doe',
        address: '123 Main Street, Apt 4B',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001'
      },
      paymentMethod: 'Net Banking',
      estimatedDelivery: '2024-01-12',
      trackingId: null,
      cancellationReason: 'Product out of stock'
    },
    {
      id: 'ORD005',
      date: '2024-01-05',
      status: 'pending',
      total: 53998,
      items: [
        {
          id: 5,
          name: 'OnePlus Nord CE 3',
          price: 26999,
          quantity: 2,
          image: 'oneplus'
        }
      ],
      deliveryAddress: {
        name: 'John Doe',
        address: '123 Main Street, Apt 4B',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001'
      },
      paymentMethod: 'EMI',
      estimatedDelivery: '2024-01-20',
      trackingId: null
    }
  ])

  const filters = [
    { id: 'all', label: 'All Orders', count: orders.length },
    { id: 'pending', label: 'Pending', count: orders.filter(o => o.status === 'pending').length },
    { id: 'processing', label: 'Processing', count: orders.filter(o => o.status === 'processing').length },
    { id: 'shipped', label: 'Shipped', count: orders.filter(o => o.status === 'shipped').length },
    { id: 'delivered', label: 'Delivered', count: orders.filter(o => o.status === 'delivered').length },
    { id: 'cancelled', label: 'Cancelled', count: orders.filter(o => o.status === 'cancelled').length }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />
      case 'processing':
        return <Package className="h-5 w-5 text-blue-500" />
      case 'shipped':
        return <Truck className="h-5 w-5 text-purple-500" />
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return <Package className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'processing':
        return 'bg-blue-100 text-blue-800'
      case 'shipped':
        return 'bg-purple-100 text-purple-800'
      case 'delivered':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredOrders = activeFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === activeFilter)

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
          <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
          <div className="flex space-x-2 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="bg-white rounded-lg p-8 shadow-sm text-center">
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-600 mb-4">
                {activeFilter === 'all' 
                  ? "You haven't placed any orders yet" 
                  : `No ${activeFilter} orders found`}
              </p>
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm">
                {/* Order Header */}
                <div className="p-6 border-b">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">Order #{order.id}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Placed on {new Date(order.date).toLocaleDateString()}
                      </p>
                      {order.trackingId && (
                        <p className="text-sm text-gray-600">
                          Tracking ID: {order.trackingId}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">Rs.{order.total.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">{order.items.length} items</p>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6 border-b">
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4">
                        <img
                          src={`/src/images/${item.image}.webp`}
                          alt={item.name}
                          className="w-16 h-16 object-contain rounded border"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                          <p className="text-sm font-medium">Rs.{(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                        <Link
                          to={`/product/${item.id}`}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          View Product
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Details */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Delivery Address</h4>
                      <p className="text-sm text-gray-600">{order.deliveryAddress.name}</p>
                      <p className="text-sm text-gray-600">{order.deliveryAddress.address}</p>
                      <p className="text-sm text-gray-600">
                        {order.deliveryAddress.city}, {order.deliveryAddress.state} - {order.deliveryAddress.pincode}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Payment Method</h4>
                      <p className="text-sm text-gray-600">{order.paymentMethod}</p>
                      {order.estimatedDelivery && (
                        <p className="text-sm text-gray-600 mt-2">
                          Estimated Delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>

                  {order.cancellationReason && (
                    <div className="mt-4 p-3 bg-red-50 rounded-lg">
                      <p className="text-sm text-red-800">
                        <strong>Cancellation Reason:</strong> {order.cancellationReason}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </button>
                    {order.trackingId && (
                      <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                        Track Order
                      </button>
                    )}
                    {order.status === 'delivered' && (
                      <>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                          Return/Exchange
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                          Download Invoice
                        </button>
                      </>
                    )}
                    {order.status === 'pending' && (
                      <button className="px-4 py-2 border border-red-300 rounded-lg text-red-600 hover:bg-red-50 transition">
                        Cancel Order
                      </button>
                    )}
                    {(order.status === 'processing' || order.status === 'shipped') && (
                      <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                        Contact Support
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
