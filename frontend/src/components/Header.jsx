import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingCart, User, Store, Menu, X, ChevronDown, Bell, Headphones, Megaphone, Smartphone, Heart, Box, Plus, CreditCard, Gift } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

const Header = () => {
  const { user, seller, isAuthenticated, isSellerAuthenticated, logout, sellerLogout } = useAuth()
  const { getCartCount } = useCart()
  const navigate = useNavigate()
  
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
  const loginDropdownRef = useRef(null)
  const moreDropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
        setIsLoginDropdownOpen(false)
      }
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setIsMoreDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const categories = [
    { name: 'Minutes', icon: 'Minutes.webp' },
    { name: 'Mobiles & Tablets', icon: 'mobiles.webp' },
    { name: 'Tv\'s & Appliances', icon: 'Tv and applinces.webp' },
    { name: 'Electronics', icon: 'Electronic.webp' },
    { name: 'Fashion', icon: 'fashion.webp' },
    { name: 'Home & Kitchen', icon: 'Home and kitchen.webp' },
    { name: 'Beauty & Toys', icon: 'Beauty and toys.webp' },
    { name: 'Furniture', icon: 'furniture.webp' },
    { name: 'Books Flights', icon: 'book flight.webp' },
    { name: 'Grocery', icon: 'grocery.webp' },
  ]

  return (
    <>
      {/* Main Header */}
      <header className="bg-gradient-to-r from-primary to-primary-dark p-3 sticky top-0 z-50 shadow-lg backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/src/images/fkheaderlogo_exploreplus-44005d.svg" 
                alt="Flipkart" 
                className="h-10 cursor-pointer transition-transform hover:scale-105 brightness-0 invert"
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative bg-white/95 backdrop-blur-sm rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, brands and many more"
                className="w-full px-6 py-3 pr-12 rounded-full bg-transparent outline-none text-gray-800 placeholder-gray-500 font-medium"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-primary-dark text-white p-2.5 rounded-full transition-all hover:scale-105">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* Login Dropdown */}
            <div className="relative" ref={loginDropdownRef}>
              <button
                onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-2.5 rounded-full text-white font-medium transition-all hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <User className="w-5 h-5" />
                {isAuthenticated ? user?.name || 'Account' : 'Login'}
                <ChevronDown className={`w-4 h-4 transition-transform ${isLoginDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLoginDropdownOpen && (
                <div className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-2xl min-w-72 py-2 animate-fade-in-up">
                  {!isAuthenticated ? (
                    <>
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="flex gap-3 items-center">
                          <Link to="/login" className="text-primary hover:text-primary-dark font-medium transition-colors hover:underline">New Customers?</Link>
                          <Link to="/login" className="text-primary hover:text-primary-dark font-medium transition-colors hover:underline">Signup</Link>
                        </div>
                      </div>
                      <Link to="/login" className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all hover:border-l-4 hover:border-primary">
                        <User className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-700">Login</span>
                      </Link>
                    </>
                  ) : (
                    <>
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm text-gray-600">Welcome,</p>
                        <p className="font-medium text-gray-900">{user?.name}</p>
                      </div>
                      <Link to="/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all hover:border-l-4 hover:border-primary">
                        <User className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-700">My Profile</span>
                      </Link>
                      <Link to="/orders" className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all hover:border-l-4 hover:border-primary">
                        <Box className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-700">Orders</span>
                      </Link>
                      <Link to="/wishlist" className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all hover:border-l-4 hover:border-primary">
                        <Heart className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-700">Wishlist</span>
                      </Link>
                      <button
                        onClick={logout}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all hover:border-l-4 hover:border-red-500 w-full text-left"
                      >
                        <User className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-700">Logout</span>
                      </button>
                    </>
                  )}
                  <Link to="/cart" className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all hover:border-l-4 hover:border-primary">
                    <Plus className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">Flipkart Plus Zone</span>
                  </Link>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all hover:border-l-4 hover:border-primary">
                    <Gift className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">Rewards</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all hover:border-l-4 hover:border-primary">
                    <CreditCard className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">Gift Cards</span>
                  </a>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link to="/cart" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full text-white font-medium transition-all hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-lg relative">
              <ShoppingCart className="w-5 h-5 transition-transform hover:scale-110" />
              <span className="hidden md:inline">Cart</span>
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Become Seller */}
            {isSellerAuthenticated ? (
              <Link to="/seller" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full text-white font-medium transition-all hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-lg">
                <Store className="w-5 h-5 transition-transform hover:scale-110" />
                <span className="hidden md:inline">Seller Dashboard</span>
              </Link>
            ) : (
              <Link to="/seller-login" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full text-white font-medium transition-all hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-lg">
                <Store className="w-5 h-5 transition-transform hover:scale-110" />
                <span className="hidden md:inline">Become a Seller</span>
              </Link>
            )}

            {/* More Dropdown */}
            <div className="relative" ref={moreDropdownRef}>
              <button
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full text-white transition-all hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <ChevronDown className={`w-5 h-5 transition-transform ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMoreDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-2xl min-w-64 py-2 animate-fade-in-up">
                  <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all hover:border-l-4 hover:border-primary">
                    <Bell className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">Notification Preferences</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all hover:border-l-4 hover:border-primary">
                    <Headphones className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">24*7 Customer Care</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all hover:border-l-4 hover:border-primary">
                    <Megaphone className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">Advertise</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all hover:border-l-4 hover:border-primary">
                    <Smartphone className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">Download App</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden bg-white/10 backdrop-blur-sm border border-white/30 p-2.5 rounded-full text-white transition-all hover:bg-white/20"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden mt-4 px-4">
          <div className="relative bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, brands and many more"
              className="w-full px-4 py-2.5 pr-10 rounded-full bg-transparent outline-none text-gray-800 placeholder-gray-500 font-medium"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-primary-dark text-white p-1.5 rounded-full">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 px-4 space-y-2 animate-fade-in-up">
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-4 space-y-3">
              {!isAuthenticated ? (
                <Link to="/login" className="w-full flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2.5 rounded-full text-white font-medium">
                  <User className="w-5 h-5" />
                  Login
                </Link>
              ) : (
                <>
                  <div className="text-white px-4 py-2">
                    <p className="text-sm">Welcome,</p>
                    <p className="font-medium">{user?.name}</p>
                  </div>
                  <Link to="/profile" className="w-full flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2.5 rounded-full text-white font-medium">
                    <User className="w-5 h-5" />
                    My Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2.5 rounded-full text-white font-medium"
                  >
                    <User className="w-5 h-5" />
                    Logout
                  </button>
                </>
              )}
              <Link to="/cart" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full text-white font-medium relative">
                <ShoppingCart className="w-5 h-5" />
                Cart
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Link>
              {isSellerAuthenticated ? (
                <Link to="/seller" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full text-white font-medium">
                  <Store className="w-5 h-5" />
                  Seller Dashboard
                </Link>
              ) : (
                <Link to="/seller-login" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full text-white font-medium">
                  <Store className="w-5 h-5" />
                  Become a Seller
                </Link>
              )}
              <button className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full text-white font-medium">
                <ChevronDown className="w-5 h-5" />
                More
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Category Bar */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-4 m-3 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer"></div>
        <div className="relative z-10 flex flex-wrap justify-between gap-4 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-1 min-w-[100px] max-w-[130px] text-center cursor-pointer group"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-xl p-3 transition-all duration-400 hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white hover:transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-transparent">
                <img
                  src={`/src/images/${category.icon}`}
                  alt={category.name}
                  className="w-16 h-14 mx-auto mb-2 object-contain transition-transform duration-400 group-hover:scale-115 group-hover:rotate-3"
                />
                <p className="text-sm font-medium text-gray-700 group-hover:text-white transition-colors">
                  {category.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header
