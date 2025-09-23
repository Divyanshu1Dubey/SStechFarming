import { useState } from "react";
import { Menu, X, Globe, ChevronDown, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import analytics from "@/lib/analytics";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    const currentLang = i18n.language;
    i18n.changeLanguage(lng);
    localStorage.setItem("preferredLanguage", lng);
    
    // Track language change
    analytics.trackLanguageChange(currentLang, lng);
    analytics.trackMenuUsage(`language_${lng}`, 'language_dropdown');
  };

  const trackMenuClick = (menuItem: string, menuType: string) => {
    analytics.trackMenuUsage(menuItem, menuType);
  };

  const mainNavItems = [
    { to: "/", label: t("navigation.home") },
    { to: "/about", label: t("navigation.about") },
    { to: "/services", label: t("navigation.solutions") },
    { to: "/products", label: t("navigation.products") },
    { to: "/contact", label: t("navigation.contact") },
  ];

  return (
    <nav className="bg-background/98 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img
                src="/lovable-uploads/8dedc6fe-2fb9-4f3a-9de6-ae8978d311d3.png"
                alt="SS TechFarming Logo"
                className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-agri-primary/20 to-agri-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground leading-tight bg-gradient-to-r from-agri-primary to-agri-secondary bg-clip-text text-transparent">
                SS TechFarming India
              </h1>
              <p className="text-sm text-muted-foreground font-medium">
                Complete Agricultural Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.to || '/'}
                className="text-foreground hover:text-agri-primary transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-agri-growth/20"
              >
                {item.label}
              </Link>
            ))}

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Link to="/catalog">
                <Button variant="outline" className="hover:bg-agri-growth/20 border-agri-primary/30">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {t("navigation.product_catalog")}
                </Button>
              </Link>

              <Link to="/request-quote">
                <Button className="bg-gradient-to-r from-agri-primary to-agri-secondary hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                  {t("navigation.get_quote") || "Get Quote"}
                </Button>
              </Link>

              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 hover:bg-agri-growth/20">
                    <Globe className="w-4 h-4" />
                    <span className="uppercase text-xs font-semibold">{i18n.language}</span>
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="animate-in fade-in-0 zoom-in-95 duration-200">
                  <DropdownMenuItem className="hover:cursor-pointer" onClick={() => changeLanguage("en")}>
                    🇺🇸 English
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:cursor-pointer" onClick={() => changeLanguage("hi")}>
                    🇮🇳 हिंदी
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:cursor-pointer" onClick={() => changeLanguage("bn")}>
                    🇧🇩 বাংলা
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-agri-growth/20"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border/50 animate-in slide-in-from-top duration-200">
            <div className="px-4 py-6 space-y-4 bg-gradient-to-b from-background to-agri-growth/5">
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to || '/'}
                  className="block px-4 py-3 text-foreground hover:text-agri-primary transition-colors duration-200 font-medium rounded-lg hover:bg-agri-growth/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Action Buttons */}
              <div className="pt-4 space-y-3 border-t border-border/50">
                <Link to="/catalog" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full justify-start">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {t("navigation.product_catalog")}
                  </Button>
                </Link>
                <Link to="/request-quote" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-agri-primary to-agri-secondary">
                    {t("navigation.get_quote") || "Get Quote"}
                  </Button>
                </Link>

                {/* Mobile Language Switcher */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        <span>Language</span>
                      </div>
                      <span className="uppercase text-xs">{i18n.language}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuItem onClick={() => changeLanguage("en")}>🇺🇸 English</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => changeLanguage("hi")}>🇮🇳 हिंदी</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => changeLanguage("bn")}>🇧🇩 বাংলা</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
