import { MapPin } from "lucide-react";

const PresenceSection = () => {
  const branches = [
    {
      country: "المقر الرئيسي (مصر)",
      city: "القاهرة",
      address: "أول نزلة (مؤسسة الزكاة)",
    },
    {
      country: "سوريا",
      city: "دمشق",
      address: "",
    },
    {
      country: "السودان",
      city: "الخرطوم",
      address: "",
    },
    {
      country: "ليبيا",
      city: "بنغازي",
      address: "",
    },
  ];

  return (
    <section id="presence" className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
          تواجدنا
        </h2>

        {/* Presence Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Map Placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-card border-2 border-border rounded-lg flex items-center justify-center relative overflow-hidden group">
              {/* Simple Map Visual */}
              <svg
                className="w-3/4 h-3/4 text-muted opacity-30"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                {/* Egypt placeholder shape */}
                <path d="M 40 20 L 60 25 L 65 40 L 60 60 L 45 65 L 35 50 L 30 35 Z" />
              </svg>

              {/* Overlay content */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-2" />
                  <p className="text-accent font-semibold text-sm">
                    تغطية جغرافية واسعة
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Branches List */}
          <div className="flex flex-col gap-4">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:border-accent transition-colors"
              >
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {branch.country}
                    </h3>
                    <p className="text-muted-foreground">
                      {branch.city}
                      {branch.address && ` - ${branch.address}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Presence Summary */}
        <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
          <p className="text-xl text-foreground font-semibold mb-2">
            تواجدنا في:
          </p>
          <p className="text-lg text-muted-foreground">
            مصر، سوريا، السودان، ليبيا
          </p>
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;
