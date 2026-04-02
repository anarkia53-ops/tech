const SuccessPartnersSection = () => {
  const successPartners = [
    "ZARA",
    "FAB",
    "Town Team",
    "القوات المسلحة المصرية",
    "Mercedes-Benz",
    "Pepsi",
    "Adidas",
    "SH",
    "B.TECH",
    "Pizza Hut",
    "McDonald's",
    "KFC",
    "مول مصر",
    "اتصالات",
  ];

  return (
    <section id="partners" className="w-full py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
          شركاء النجاح
        </h2>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {successPartners.map((partner, index) => (
            <div
              key={index}
              className="p-6 bg-background border border-border rounded-lg hover:border-accent transition-colors flex items-center justify-center min-h-28"
            >
              <div className="text-center">
                <div className="text-base sm:text-lg font-bold text-foreground">
                  {partner}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center p-8 bg-background border border-border rounded-lg">
          <p className="text-lg text-muted-foreground mb-3">
            نفتخر بالعمل مع أكبر الشركات والعلامات التجارية المعروفة
          </p>
          <div className="h-1 w-16 bg-accent mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPartnersSection;
