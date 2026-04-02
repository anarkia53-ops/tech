const PartnersStrip = () => {
  const partners = [
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
    <section className="w-full py-8 bg-card border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {/* First set of partners */}
          {partners.map((partner, index) => (
            <div key={`${index}-1`} className="flex-shrink-0">
              <span className="text-foreground font-semibold text-lg">
                {partner}
              </span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div key={`${index}-2`} className="flex-shrink-0">
              <span className="text-foreground font-semibold text-lg">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default PartnersStrip;
