const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F92d8ce78a1e549b2adbec0c63d3a13d1%2F56cf6444f59a4df38be379ed410303b2?format=webp&width=1920&height=1080"
          alt="Techno Door - Industrial Doors"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Techno Door
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-200 mb-4 font-semibold">
          الأبواب الضخمة تخصصنا.. تكنولوجيا تلبي كافة التحديات.
        </p>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          خبرة 50 عاماً في تقديم أفضل الحلول الأوتوماتيكية بأعلى جودة.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("services")}
            className="px-8 py-3 bg-accent text-accent-foreground font-bold rounded hover:bg-accent/90 transition-colors text-lg"
          >
            اكتشف خدماتنا
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-accent text-accent font-bold rounded hover:bg-accent/10 transition-colors text-lg"
          >
            تواصل معنا
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
