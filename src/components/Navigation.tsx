import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { to: "/", label: t('navigation.home') },
    { to: "/about", label: t('navigation.about') },
    { to: "/services", label: t('navigation.services') },
    { to: "/products", label: t('navigation.products') },
    { to: "/contact", label: t('navigation.contact') },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/8dedc6fe-2fb9-4f3a-9de6-ae8978d311d3.png" 
              alt="SS TechFarming Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">SS TechFarming India</h1>
              <p className="text-xs text-muted-foreground">Farm Smarter</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={() => changeLanguage('en')}>EN</Button>
              <Button variant="ghost" size="sm" onClick={() => changeLanguage('hi')}>HI</Button>
            </div>
            <Link to="/get-started">
              <Button variant="default" className="bg-gradient-primary hover:opacity-90">
                {t('navigation.get_started')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link to="/get-started">
                  <Button variant="default" className="w-full bg-gradient-primary">
                    {t('navigation.get_started')}
                  </Button>
                </Link>
              </div>
               <div className="flex items-center space-x-2 px-3 py-2">
                <Button variant="ghost" size="sm" onClick={() => changeLanguage('en')}>EN</Button>
                <Button variant="ghost" size="sm" onClick={() => changeLanguage('hi')}>HI</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
