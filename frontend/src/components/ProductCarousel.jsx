import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const ProductCarousel = ({ title, subtitle, products }) => {
  const carouselRef = useRef(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -250, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 250, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-10 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden animate-fade-in-up">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/2 to-transparent animate-shimmer"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-10">
          <h3 className="text-4xl font-bold text-gradient mb-2 relative">
            {title}
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full"></span>
          </h3>
          {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
        </div>

        <div className="w-full px-4 relative">
          <div className="flex items-center">
            
            {/* Left Button */}
            <button
              onClick={scrollLeft}
              className="bg-white/95 backdrop-blur-sm border-none text-primary p-3.5 cursor-pointer transition-all duration-400 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-xl z-20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-hidden scroll-smooth flex-1 py-5"
            >
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="flex-1 min-w-[250px] bg-white/90 backdrop-blur-sm border border-primary/10 rounded-xl text-center p-5 transition-all duration-400 cursor-pointer hover:transform hover:-translate-y-2.5 hover:scale-103 hover:shadow-2xl hover:border-transparent relative overflow-hidden group block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-0 transition-opacity duration-400 group-hover:opacity-100 z-0"></div>
                  
                  <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/30 to-transparent rotate-45 transition-all duration-600 opacity-0 group-hover:opacity-100 group-hover:top-[-100%] group-hover:left-[-100%] z-0"></div>
                  
                  {/* Discount Badge */}
                  {product.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium z-20">
                      {product.discount}% OFF
                    </div>
                  )}
                  
                  <img
                    src={`/src/images/${product.image}.webp`}
                    alt={product.name}
                    className="w-[90%] h-40 mx-auto mb-4 object-contain transition-all duration-400 group-hover:scale-110 group-hover:rotate-3 filter drop-shadow-sm group-hover:brightness-120 group-hover:drop-shadow-md relative z-10"
                  />
                  
                  <p className="text-sm font-semibold text-gray-800 mb-2 relative z-10 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-sm line-clamp-2">
                    {product.name}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center mb-2 relative z-10">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="ml-1 text-xs text-gray-600 group-hover:text-white">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center justify-center gap-2 relative z-10">
                    <span className="text-primary font-bold text-sm transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-sm">
                      Rs.{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-xs text-gray-500 line-through group-hover:text-white/70">
                        Rs.{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={scrollRight}
              className="bg-white/95 backdrop-blur-sm border-none text-primary p-3.5 cursor-pointer transition-all duration-400 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-xl z-20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 ml-4"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCarousel
