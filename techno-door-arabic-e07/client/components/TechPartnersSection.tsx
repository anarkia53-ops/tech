const TechPartnersSection = () => {
  const techPartners = ["simu", "acm", "somfy", "tornado", "ditec", "roger technology"];

  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
          شركاء التكنولوجيا
        </h2>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {techPartners.map((partner, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-lg hover:border-accent transition-colors flex items-center justify-center min-h-32"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-foreground capitalize">
                  {partner}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Info */}
        <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
          <p className="text-lg text-muted-foreground mb-4">
            نحن نتعاون مع أفضل الشركات العالمية المتخصصة في تكنولوجيا الأتمتة والأبواب
          </p>
          <p className="text-accent font-semibold">
            للحصول على أفضل المنتجات والخدمات لعملائنا
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechPartnersSection;
