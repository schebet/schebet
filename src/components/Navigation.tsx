import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Facebook, Instagram, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = ({ selectedCategory, onCategoryChange }: { 
  selectedCategory?: string; 
  onCategoryChange?: (category: string) => void 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  
  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      // If we're on home page, smooth scroll to section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-lg border-b border-border z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => handleNavClick('home')} className="text-2xl font-bold text-gradient-primary cursor-pointer">
            Šebet
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => handleNavClick('home')} className="text-foreground hover:text-primary transition-colors cursor-pointer">
              Početna
            </button>
            <button onClick={() => handleNavClick('blog')} className="text-foreground hover:text-primary transition-colors cursor-pointer">
              Blog
            </button>
            <button onClick={() => handleNavClick('gallery')} className="text-foreground hover:text-primary transition-colors cursor-pointer">
              Galerija
            </button>
            <button onClick={() => handleNavClick('about')} className="text-foreground hover:text-primary transition-colors cursor-pointer">
              O selu
            </button>
            
            <div className="flex items-center gap-4 ml-4 border-l border-border pl-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/schebet/schebet-chronicles-hub" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:info@seloSebet.com"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-muted"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in-up">
            <button onClick={() => handleNavClick('home')} className="block w-full text-left text-foreground hover:text-primary transition-colors cursor-pointer">
              Početna
            </button>
            <button onClick={() => handleNavClick('blog')} className="block w-full text-left text-foreground hover:text-primary transition-colors cursor-pointer">
              Blog
            </button>
            <button onClick={() => handleNavClick('gallery')} className="block w-full text-left text-foreground hover:text-primary transition-colors cursor-pointer">
              Galerija
            </button>
            <button onClick={() => handleNavClick('about')} className="block w-full text-left text-foreground hover:text-primary transition-colors cursor-pointer">
              O selu
            </button>
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/schebet/schebet-chronicles-hub" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:info@seloSebet.com"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
