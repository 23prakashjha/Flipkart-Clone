import { useState } from 'react'
import { Smartphone, Download, Star, Shield, CheckCircle, Zap, ShoppingCart, Gift, TrendingUp } from 'lucide-react'

const AppDownload = ({ title, subtitle }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('')

  const platforms = [
    {
      id: 'android',
      name: 'Android',
      icon: Smartphone,
      color: 'bg-green-500',
      description: 'Get the app on Google Play Store',
      features: ['Fast & Secure', 'Easy Returns', 'Exclusive Offers', '24/7 Support'],
      downloadUrl: 'https://play.google.com/store',
      qrCode: 'android-qr'
    },
    {
      id: 'ios',
      name: 'iOS',
      icon: Smartphone,
      color: 'bg-blue-500',
      description: 'Download on the App Store',
      features: ['Premium Features', 'Apple Pay Support', 'Biometric Login', 'Voice Shopping'],
      downloadUrl: 'https://apps.apple.com',
      qrCode: 'ios-qr'
    }
  ]

  const stats = [
    { label: '10M+ Downloads', value: '10,000,000+' },
    { label: '4.5★ Rating', value: '4.5' },
    { label: '24/7 Support', value: 'Always Available' },
    { label: 'Free Shipping', value: 'On Orders Above ₹500' }
  ]

  const benefits = [
    {
      icon: Gift,
      title: 'Welcome Bonus',
      description: 'Get ₹100 off on your first order'
    },
    {
      icon: TrendingUp,
      title: 'Flash Deals',
      description: 'Access exclusive app-only deals'
    },
    {
      icon: ShoppingCart,
      title: 'Smart Recommendations',
      description: 'AI-powered product suggestions'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Multiple payment options'
    },
    {
      icon: Zap,
      title: 'Quick Checkout',
      description: 'Saved addresses & cards'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-blue-100">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - App Download */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-4">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Download Our Mobile App</h3>
                <p className="text-gray-600 mb-6">Shop smarter, faster, and get exclusive deals</p>
              </div>

              {/* Platform Selection */}
              <div className="flex justify-center space-x-4 mb-8">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      selectedPlatform === platform.id
                        ? `${platform.color} text-white shadow-lg transform scale-105`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <platform.icon className="w-6 h-6 mb-2" />
                    <span>{platform.name}</span>
                  </button>
                ))}
              </div>

              {/* Selected Platform Details */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {platforms.find(p => p.id === selectedPlatform)?.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {platforms.find(p => p.id === selectedPlatform)?.description}
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    FREE
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {platforms.find(p => p.id === selectedPlatform)?.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Download Buttons */}
                <div className="space-y-4">
                  <a
                    href={platforms.find(p => p.id === selectedPlatform)?.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-lg font-medium transition-all duration-200 ${
                      selectedPlatform === 'android'
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Now</span>
                  </a>
                  
                  <button
                    className={`w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-lg font-medium transition-all duration-200 ${
                      selectedPlatform === 'android'
                        ? 'bg-green-100 text-green-700 hover:bg-green-200 border border-green-300'
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-300'
                    }`}
                  >
                    <span>Scan QR Code</span>
                  </button>
                </div>

                {/* QR Code Placeholder */}
                <div className="text-center mt-6">
                  <div className="inline-block p-4 bg-white rounded-lg border-2 border-gray-300">
                    <div className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Scan to download {platforms.find(p => p.id === selectedPlatform)?.name} app
                    </p>
                  </div>
                </div>
              </div>

              {/* App Stats */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">App Statistics</h4>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our App?</h3>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${benefit.icon === Gift ? 'bg-purple-100' : benefit.icon === TrendingUp ? 'bg-orange-100' : benefit.icon === ShoppingCart ? 'bg-green-100' : benefit.icon === Shield ? 'bg-blue-100' : 'bg-yellow-100'}`}>
                      <benefit.icon className={`w-6 h-6 ${benefit.icon === Gift ? 'text-purple-600' : benefit.icon === TrendingUp ? 'text-orange-600' : benefit.icon === ShoppingCart ? 'text-green-600' : benefit.icon === Shield ? 'text-blue-600' : 'text-yellow-600'}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* User Reviews Preview */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">What Our Users Say</h4>
                <div className="space-y-4">
                  {[
                    { name: "Priya S.", rating: 5, comment: "Best shopping app! Love the exclusive deals and fast delivery!" },
                    { name: "Rahul K.", rating: 5, comment: "Smooth interface and great customer support!" },
                    { name: "Anjali N.", rating: 4, comment: "Easy returns and secure payments. Highly recommend!" }
                  ].map((review, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="font-semibold text-gray-900">{review.name}</span>
                        </div>
                        <span className="text-sm text-gray-600">{review.rating}★</span>
                      </div>
                      <p className="text-gray-700 text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
            Start Shopping Smarter Today
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppDownload
