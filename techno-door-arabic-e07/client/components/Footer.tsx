import { Facebook, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "الرئيسية", href: "#hero" },
    { label: "من نحن", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "أعمالنا", href: "#portfolio" },
    { label: "عملاؤنا", href: "#partners" },
    { label: "فروعنا", href: "#presence" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  const phones = ["01157114794", "01286254951"];

  return (
    <footer className="w-full bg-black border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F92d8ce78a1e549b2adbec0c63d3a13d1%2F56cf6444f59a4df38be379ed410303b2?format=webp&width=400&height=400"
              alt="Techno Door"
              className="h-10 w-auto mb-4"
            />
            <p className="text-4xl font-bold text-white mb-2">Techno Door</p>
            <p className="text-muted-foreground mb-4">
              الأبواب الضخمة تخصصنا.. تكنولوجيا تلبي كافة التحديات.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  {phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="block text-muted-foreground hover:text-accent transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  القاهرة - أول نزلة (مؤسسة الزكاة)
                </p>
              </div>
            </div>
          </div>

          {/* Social & Extra Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">متابعنا</h3>
            <a
              href="https://facebook.com/Technodoor.EG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 p-3 bg-blue-900/30 border border-blue-600/50 rounded hover:bg-blue-900/50 transition-colors text-white mb-4"
            >
              <Facebook className="w-5 h-5" />
              <span>Technodoor.EG</span>
            </a>

            {/* About */}
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                <span className="font-semibold">تأسست:</span> عام 1970 بسوريا دمشق
              </p>
              <p>
                <span className="font-semibold">الخبرة:</span> 50+ سنة في المجال
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border"></div>

      {/* Copyright Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p>
            © {currentYear} Techno Door. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">
              سياسة الخصوصية
            </a>
            <span>•</span>
            <a href="#" className="hover:text-accent transition-colors">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
