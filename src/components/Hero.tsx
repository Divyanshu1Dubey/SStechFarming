import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mushroom-farm.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-agri-soil/80 via-agri-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge */}

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight mt-10">
            {t('hero.title')}
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-white text-agri-primary hover:bg-white/90 shadow-strong transform transition-transform duration-300 hover:scale-105 "
              >
                {t('hero.services')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-agri-primary hover:bg-white/90 shadow-strong transform transition-transform duration-300 hover:scale-105"
              >
                {t('hero.contact')}
              </Button>
            </Link>
          </div>
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{t('hero.location')}</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm text-white/80">{t('hero.farmers_empowered')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm text-white/80">{t('hero.produce_centers_planned')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm text-white/80">{t('hero.organic_solutions')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
