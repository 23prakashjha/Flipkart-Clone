import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Plus, Package, TrendingUp, Users, DollarSign, Eye, Edit, Trash2, LogOut, Menu, X, BarChart3, ShoppingBag, Star } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function SellerDashboard() {
  const navigate = useNavigate()
  const { seller, isSellerAuthenticated, sellerLogout } = useAuth()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    // Check if seller is authenticated, if not redirect to seller login
    if (!isSellerAuthenticated) {
      navigate('/seller-login')
    }
  }, [isSellerAuthenticated, navigate])

  const [products] = useState([
    {
      id: 1,
      name: 'Motorola Edge 40 5G',
      price: 24999,
      stock: 50,
      sold: 125,
      rating: 4.3,
      image: 'moto',
      status: 'active'
    },
    {
      id: 2,
      name: 'Vivo V29 5G',
      price: 32999,
      stock: 30,
      sold: 89,
      rating: 4.5,
      image: 'vivo',
      status: 'active'
    },
    {
      id: 3,
      name: 'Samsung Galaxy Watch 6',
      price: 18999,
      stock: 0,
      sold: 67,
      rating: 4.2,
      image: 'one1',
      status: 'inactive'
    }
  ])

  const [orders] = useState([
    {
      id: 'ORD001',
      customer: 'Rahul Sharma',
      product: 'Motorola Edge 40 5G',
      quantity: 1,
      amount: 24999,
      status: 'pending',
      date: '2024-01-15'
    },
    {
      id: 'ORD002',
      customer: 'Priya Patel',
      product: 'Vivo V29 5G',
      quantity: 2,
      amount: 65998,
      status: 'processing',
      date: '2024-01-14'
    },
    {
      id: 'ORD003',
      customer: 'Amit Kumar',
      product: 'Samsung Galaxy Watch 6',
      quantity: 1,
      amount: 18999,
      status: 'delivered',
      date: '2024-01-13'
    }
  ])

  const stats = {
    totalRevenue: 109996,
    totalOrders: 281,
    totalProducts: 3,
    avgRating: 4.3
  }

  const handleLogout = () => {
    sellerLogout()
    navigate('/seller-login')
  }

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'customers', label: 'Customers', icon: Users }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">Rs.{stats.totalRevenue.toLocaleString()}</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-500" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Orders</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
                  </div>
                  <ShoppingBag className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Products</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
                  </div>
                  <Package className="h-8 w-8 text-purple-500" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Avg Rating</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.avgRating}</p>
                  </div>
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">Recent Orders</h3>
                <button
                  onClick={() => setActiveTab('orders')}
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 text-sm font-medium text-gray-700">Order ID</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-700">Customer</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-700">Product</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-700">Amount</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.slice(0, 5).map((order) => (
                      <tr key={order.id} className="border-b">
                        <td className="py-3 text-sm">{order.id}</td>
                        <td className="py-3 text-sm">{order.customer}</td>
                        <td className="py-3 text-sm">{order.product}</td>
                        <td className="py-3 text-sm">Rs.{order.amount.toLocaleString()}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )

      case 'products':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Products</h2>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Product</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Price</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Stock</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Sold</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Rating</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-b">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <img
                              src={`/src/images/${product.image}.webp`}
                              alt={product.name}
                              className="w-12 h-12 object-contain rounded mr-3"
                            />
                            <span className="text-sm font-medium">{product.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">Rs.{product.price.toLocaleString()}</td>
                        <td className="py-3 px-4 text-sm">{product.stock}</td>
                        <td className="py-3 px-4 text-sm">{product.sold}</td>
                        <td className="py-3 px-4 text-sm">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            {product.rating}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            product.status === 'active' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {product.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-700">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-gray-600 hover:text-gray-700">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )

      case 'orders':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Orders</h2>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Order ID</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Customer</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Product</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Quantity</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Amount</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-b">
                        <td className="py-3 px-4 text-sm font-medium">{order.id}</td>
                        <td className="py-3 px-4 text-sm">{order.customer}</td>
                        <td className="py-3 px-4 text-sm">{order.product}</td>
                        <td className="py-3 px-4 text-sm">{order.quantity}</td>
                        <td className="py-3 px-4 text-sm">Rs.{order.amount.toLocaleString()}</td>
                        <td className="py-3 px-4 text-sm">{order.date}</td>
                        <td className="py-3 px-4">
                          <select defaultValue={order.status} className="text-sm border rounded px-2 py-1">
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                          </select>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-blue-600 hover:text-blue-700 text-sm">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h3>
            <p className="text-gray-600">This section is under development.</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              >
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <h1 className="text-xl font-bold text-gray-900 ml-4 lg:ml-0">Seller Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <span className="text-sm text-gray-600">Welcome,</span>
                <span className="text-sm font-medium text-gray-900 ml-1">{seller?.storeName || 'Seller'}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'block' : 'hidden'} lg:block w-64 bg-white shadow-sm min-h-screen`}>
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id)
                      setSidebarOpen(false)
                    }}
                    className={`w-full flex items-center px-3 py-2 rounded-lg transition ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}
