import { Link } from 'react-router-dom'
import { categories } from '../data/products'

const CategorySection = () => {

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 p-8 mx-4 rounded-2xl shadow-lg relative overflow-hidden animate-fade-in-up">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer"></div>
      
      <div className="relative z-10 flex flex-wrap justify-between gap-5 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category.id}`}
            className="flex-1 min-w-[80px] max-w-[130px] text-center cursor-pointer group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-xl p-4 transition-all duration-400 hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white hover:transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-transparent relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-0 transition-opacity duration-400 group-hover:opacity-100 z-0"></div>
              
              <img
                src={`/src/images/${category.icon}`}
                alt={category.name}
                className="w-20 h-16 mx-auto mb-3 object-contain transition-all duration-400 group-hover:scale-115 group-hover:rotate-3 filter drop-shadow-sm group-hover:brightness-130 group-hover:drop-shadow-md relative z-10"
              />
              
              <p className="text-sm font-semibold text-gray-700 group-hover:text-white transition-all duration-300 relative z-10">
                {category.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategorySection
