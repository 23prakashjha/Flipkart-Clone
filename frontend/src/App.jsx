import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductCarousel from './components/ProductCarousel'
import BannerSection from './components/BannerSection'
import AccordionSection from './components/AccordionSection'
import UserReviews from './components/UserReviews'
import AppDownload from './components/AppDownload'
import Footer from './components/Footer'

// Pages
import Login from './pages/Login'
import SellerLogin from './pages/SellerLogin'
import ProductDetails from './pages/ProductDetails'
import Category from './pages/Category'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import SellerDashboard from './pages/SellerDashboard'
import Profile from './pages/Profile'
import Wishlist from './pages/Wishlist'
import Orders from './pages/Orders'
import OrderSuccess from './pages/OrderSuccess'
import UserReviewsPage from './pages/UserReviewsPage'

// Context
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { homepageSections, accordionSections } from './data/products'
import { userReviews } from './data/reviews'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
            <Header />
            <main>
              <HeroSection />
              {homepageSections.map((section, index) => (
                <div key={section.id}>
                  <ProductCarousel 
                    title={section.title}
                    subtitle={section.subtitle}
                    products={section.products}
                  />
                </div>
              ))}
              {accordionSections.map((section, index) => (
                <div key={section.id} className="bg-white">
                  <AccordionSection 
                    title={section.title}
                    subtitle={section.subtitle}
                    items={section.items}
                  />
                </div>
              ))}
              
              {/* User Reviews Section */}
              <div className="bg-gray-50">
                <UserReviews 
                  title="Customer Reviews"
                  subtitle="See what our verified customers are saying"
                  reviews={userReviews}
                />
              </div>

              {/* App Download Section */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
                <AppDownload 
                  title="Download Our Mobile App"
                  subtitle="Shop smarter, faster, and get exclusive deals"
                />
              </div>
            </main>
            <Footer />
          </div>
        } />

        {/* Authentication Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/seller-login" element={<SellerLogin />} />

        {/* Product Pages */}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:categoryId" element={<Category />} />

        {/* Shopping Pages */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />

        {/* User Account Pages */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<Wishlist />} />

        {/* Reviews Pages */}
        <Route path="/reviews" element={<UserReviewsPage />} />

        {/* Seller Pages */}
        <Route path="/seller" element={<SellerDashboard />} />

        {/* 404 Page */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
              <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
              <a href="/" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                Go Home
              </a>
            </div>
          </div>
        } />
      </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
