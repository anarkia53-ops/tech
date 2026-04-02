const PortfolioSection = () => {
  // Create portfolio items using the hero image with different object-position crops
  const portfolioItems = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    objectPosition: `${(i % 3) * 50}% ${Math.floor(i / 3) * 50}%`,
  }));

  return (
    <section id="portfolio" className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
          سابقة أعمالنا
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg border border-border h-64 sm:h-72 cursor-pointer"
            >
              {/* Portfolio Image with Object Position */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F92d8ce78a1e549b2adbec0c63d3a13d1%2F56cf6444f59a4df38be379ed410303b2?format=webp&width=600&height=600"
                alt={`Portfolio item ${item.id + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                style={{
                  objectPosition: item.objectPosition,
                }}
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-card rounded-lg border border-border">
            <div className="text-4xl font-bold text-accent mb-2">50</div>
            <div className="text-foreground font-semibold">سنة خبرة</div>
          </div>
          <div className="p-8 bg-card rounded-lg border border-border">
            <div className="text-4xl font-bold text-accent mb-2">1000+</div>
            <div className="text-foreground font-semibold">مشروع منفذ</div>
          </div>
          <div className="p-8 bg-card rounded-lg border border-border">
            <div className="text-4xl font-bold text-accent mb-2">4</div>
            <div className="text-foreground font-semibold">دول عربية</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
