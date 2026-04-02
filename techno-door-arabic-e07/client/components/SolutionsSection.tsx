import { useState } from "react";

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      title: "مكن فوتوسيل",
      description: "أنظمة الفتح والإغلاق التلقائية",
      services: [],
    },
    {
      title: "أبواب الرولينج شاتر",
      description: "حلول أبواب الرولينج المتقدمة",
      services: ["صاج", "فوم", "ألمونيوم مخرم", "بولي كربونيت", "ألمونيوم", "مضاد للحريق"],
    },
    {
      title: "باب جرار مفصلي",
      description: "أبواب جرارة بتصميم مفصلي",
      services: [],
    },
    {
      title: "أبواب الحواجز",
      description: "حواجز أمان وحماية متقدمة",
      services: [],
    },
    {
      title: "أبواب الطوارئ",
      description: "أنظمة الطوارئ والحماية من الحريق",
      services: ["باب طوارئ", "باب حريق", "باب مضاد للحريق"],
    },
    {
      title: "أبواب شيش الحصيرة",
      description: "أبواب شيش الحصيرة المتينة",
      services: [],
    },
    {
      title: "أبواب Sectional",
      description: "أبواب سيكشنال عالية الأداء",
      services: ["باب فائق السرعة"],
    },
  ];

  return (
    <section id="services" className="w-full py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
          حلولنا المتكاملة
        </h2>

        {/* Tabs Container */}
        <div className="flex flex-col">
          {/* Tab Buttons - Scrollable on Mobile */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
            {solutions.map((solution, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 font-semibold rounded whitespace-nowrap transition-all ${
                  activeTab === index
                    ? "bg-accent text-accent-foreground"
                    : "bg-background text-foreground border border-border hover:border-accent"
                }`}
              >
                {solution.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-background rounded-lg border border-border p-8">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-accent mb-2">
                {solutions[activeTab].title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {solutions[activeTab].description}
              </p>
            </div>

            {/* Services Grid */}
            {solutions[activeTab].services.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solutions[activeTab].services.map((service, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card border border-border rounded hover:border-accent transition-colors"
                  >
                    <div className="w-6 h-6 bg-accent rounded-full mb-3 inline-flex items-center justify-center">
                      <span className="text-accent-foreground font-bold text-sm">✓</span>
                    </div>
                    <p className="text-foreground font-semibold ml-3">{service}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                <p>خدمة متخصصة موثوقة وعالية الجودة</p>
              </div>
            )}
          </div>
        </div>

        {/* Feature Highlight */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: "🏭", title: "تقنية متقدمة", desc: "أحدث الأنظمة والتقنيات" },
            { icon: "✅", title: "ضمان عالي", desc: "جودة مضمونة وموثوقة" },
            { icon: "🚀", title: "تنفيذ سريع", desc: "تركيب وتشغيل فوري" },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded text-center hover:border-accent transition-colors"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
