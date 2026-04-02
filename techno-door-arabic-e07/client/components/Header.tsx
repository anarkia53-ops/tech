import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "الرئيسية", href: "#hero" },
    { label: "من نحن", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "أعمالنا", href: "#portfolio" },
    { label: "عملاؤنا", href: "#partners" },
    { label: "فروعنا", href: "#presence" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/92 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Right side (RTL) */}
          <div className="flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F92d8ce78a1e549b2adbec0c63d3a13d1%2F56cf6444f59a4df38be379ed410303b2?format=webp&width=400&height=400"
              alt="Techno Door"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center mx-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button - Left side (RTL) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={handleNavClick}
              className="px-6 py-2 bg-accent text-accent-foreground font-semibold rounded hover:bg-accent/90 transition-colors"
            >
              اتصل الآن
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="#contact"
              onClick={handleNavClick}
              className="px-4 py-2 bg-accent text-accent-foreground font-semibold rounded text-sm hover:bg-accent/90 transition-colors"
            >
              اتصل الآن
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-card transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent hover:bg-background rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
