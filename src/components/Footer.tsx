import { Facebook, Instagram, Mail, Github, MapPin, Phone } from "lucide-react";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      // If we're on home page, smooth scroll to section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-gradient-primary mb-4">
              Selo Šebet
            </h3>
            <p className="text-muted-foreground mb-4">
              Dokumentarni sajt o našem selu — čuvamo priče i tradiciju za buduće
              generacije.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/schebet/schebet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@seloSebet.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Brzi linkovi</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavClick('home')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Početna
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('blog')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('gallery')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Galerija
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  O selu
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Selo Šebet, Opština XYZ</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+381 123 456 789</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@seloSebet.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Selo Šebet. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};
