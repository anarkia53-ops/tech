import {
  Award,
  Settings,
  Globe,
  CheckCircle,
} from "lucide-react";

const WhySection = () => {
  const reasons = [
    {
      icon: Award,
      title: "الخبرة",
      description:
        "أكثر من 50 سنة من التراكم والخبرة في مجال الأبواب الأوتوماتيكية والضخمة",
    },
    {
      icon: Settings,
      title: "الحلول المتكاملة",
      description:
        "نوفر حلولاً شاملة وقابلة للتخصيص لكل احتياجات عملائنا المختلفة",
    },
    {
      icon: Globe,
      title: "التغطية الجغرافية",
      description:
        "حضور قوي في أربع دول عربية مع فروع وخدمات ممتدة على نطاق واسع",
    },
    {
      icon: CheckCircle,
      title: "التنفيذ الموثوق",
      description:
        "تنفيذ احترافي وضمانات عالية مع دعم ما بعد البيع المتميز والموثوق",
    },
  ];

  return (
    <section className="w-full py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
          لماذا Techno Door
        </h2>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="p-8 bg-background rounded-lg border border-border hover:border-accent transition-all hover:shadow-lg group"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-muted-foreground mb-6">
            اختر تيكنو دور لتحصل على الأفضل في كل مرة
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground font-bold rounded hover:bg-accent/90 transition-colors"
          >
            ابدأ معنا اليوم
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
