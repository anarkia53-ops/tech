const AboutSection = () => {
  return (
    <section id="about" className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
          نبذة عن تيكنو دور
        </h2>

        {/* Company Info */}
        <div className="text-center mb-16">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            شركة تيكنو دور تأسست عام 1970 بسوريا دمشق.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {/* Years of Experience */}
          <div className="flex flex-col items-center p-8 bg-card rounded-lg border border-border hover:border-accent transition-colors">
            <div className="text-5xl font-bold text-accent mb-2">50+</div>
            <div className="text-lg text-foreground font-semibold">
              عاماً من الخبرة
            </div>
          </div>

          {/* Countries */}
          <div className="flex flex-col items-center p-8 bg-card rounded-lg border border-border hover:border-accent transition-colors">
            <div className="text-5xl font-bold text-accent mb-2">4</div>
            <div className="text-lg text-foreground font-semibold">
              دول عربية
            </div>
          </div>
        </div>

        {/* Motto Block */}
        <div className="bg-card border-2 border-accent rounded-lg p-8 sm:p-12 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-accent mb-4">
            جودة عالية - سعر مناسب - خبرة خمسون عاماً
          </p>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
