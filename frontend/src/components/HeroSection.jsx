import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    'back.webp',
    'back1.webp',
    'back2.webp',
    'back3.webp',
    'back4.webp',
    'back5.webp'
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent animate-shimmer"></div>
      
      <div className="w-full px-4 relative z-10">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          
          {/* Carousel Track */}
          <div 
            className="flex transition-transform duration-600 ease-out will-change-transform"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={`hero-slide-${index}`}
                className={`min-w-full relative overflow-hidden ${index === currentSlide ? 'opacity-100' : 'opacity-0'} transition-opacity duration-400`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-400 hover:opacity-100 z-10"></div>
                <img
                  src={`/src/images/${slide}`}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover cursor-pointer transition-all duration-500 hover:scale-108 hover:brightness-105 hover:shadow-2xl"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm border-none p-3.5 cursor-pointer text-primary transition-all duration-400 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-xl z-20 rounded-full w-12 h-12 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm border-none p-3.5 cursor-pointer text-primary transition-all duration-400 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-xl z-20 rounded-full w-12 h-12 flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 px-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-400 backdrop-blur-sm border-2 border-white/30 ${
                  index === currentSlide 
                    ? 'bg-primary scale-130 border-primary' 
                    : 'bg-white/50 hover:bg-primary/70 hover:scale-120'
                }`}
              >
                {index === currentSlide && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
