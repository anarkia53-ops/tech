import { Phone, MessageCircle, Facebook } from "lucide-react";

const ContactSection = () => {
  const phones = ["01157114794", "01286254951"];

  return (
    <section id="contact" className="w-full py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-16">
          تواصل معنا
        </h2>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {/* Phone Buttons */}
          {phones.map((phone, index) => (
            <a
              key={index}
              href={`tel:${phone}`}
              className="p-8 bg-background border-2 border-border rounded-lg hover:border-accent transition-all hover:shadow-lg flex items-center gap-4"
            >
              <Phone className="w-10 h-10 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  اتصال مباشر
                </p>
                <p className="text-2xl font-bold text-foreground">{phone}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Social Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${phones[0]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-gradient-to-r from-green-900 to-green-800 rounded-lg hover:from-green-800 hover:to-green-700 transition-all hover:shadow-lg flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">واتساب</span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/Technodoor.EG"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg hover:from-blue-800 hover:to-blue-700 transition-all hover:shadow-lg flex items-center justify-center gap-3"
          >
            <Facebook className="w-8 h-8 text-white" />
            <span className="text-xl font-bold text-white">Technodoor.EG</span>
          </a>
        </div>

        {/* Contact Info Summary */}
        <div className="p-8 bg-background border border-border rounded-lg text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            معلومات التواصل
          </h3>
          <div className="space-y-3">
            <p className="text-lg text-muted-foreground">
              <span className="font-semibold">البريد:</span> القاهرة - أول نزلة
              (مؤسسة الزكاة)
            </p>
            <p className="text-lg text-muted-foreground">
              <span className="font-semibold">الهواتف:</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone}`}
                  className="text-accent font-semibold hover:text-accent/80 transition-colors text-lg"
                >
                  {phone}
                </a>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mt-6">
              <span className="font-semibold">ساعات العمل:</span> طوال الأسبوع
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-12 bg-gradient-to-r from-accent to-cyan-600 rounded-lg text-center">
          <h3 className="text-3xl font-bold text-accent-foreground mb-4">
            لا تتردد في التواصل معنا
          </h3>
          <p className="text-lg text-accent-foreground mb-6 opacity-90">
            فريقنا جاهز لمساعدتك وتقديم أفضل الحلول
          </p>
          <a
            href={`tel:${phones[0]}`}
            className="inline-block px-8 py-3 bg-accent-foreground text-accent font-bold rounded hover:bg-white transition-colors"
          >
            اتصل الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
