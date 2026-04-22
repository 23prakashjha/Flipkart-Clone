const BannerSection = ({ images }) => {
  return (
    <section className="py-8 px-4 animate-fade-in-up">
      <div className="w-full">
        <div className={`grid grid-cols-1 ${images.length === 3 ? 'md:grid-cols-3' : images.length === 4 ? 'md:grid-cols-4' : 'lg:grid-cols-4'} gap-6`}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-400 hover:shadow-2xl hover:transform hover:scale-105 cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100 z-10"></div>
              <img
                src={`/src/images/${image}.webp`}
                alt={`Banner ${index + 1}`}
                className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BannerSection
