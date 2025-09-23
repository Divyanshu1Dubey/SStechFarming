import { ArrowRight, MapPin, Sparkles, Leaf, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mushroom-farm.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { 
  FloatingElement, 
  ScrollReveal, 
  GradientText, 
  PulseButton, 
  AnimatedCounter, 
  Typewriter,
  ParticleField,
  MorphingShape,
  WaveBackground,
  RotatingIcon
} from './SimpleAnimations';
import './SimpleAnimations.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with particles */}
      <ParticleField particleCount={15} color="#ffffff" className="opacity-20" />
      
      {/* Floating morphing shapes */}
      <FloatingElement delay={0} className="absolute top-20 left-10 z-0">
        <MorphingShape size={150} color="#ffffff20" />
      </FloatingElement>
      <FloatingElement delay={2} className="absolute bottom-20 right-10 z-0">
        <MorphingShape size={120} color="#ffffff20" />
      </FloatingElement>

      {/* Background Image with better overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Wave Background */}
      <WaveBackground waveColor="#ffffff" className="opacity-10" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge with animation */}
          <ScrollReveal direction="down" className="mb-6">
            <div className="inline-flex items-center space-x-2 mt-5 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 glass-morphism">
              <MapPin className="w-4 h-4 text-agri-secondary" />
              <span className="text-sm font-medium">📍 Bokaro, Jharkhand, India</span>
              <RotatingIcon speed="slow" className="ml-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </RotatingIcon>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-10 text-white">
              <Typewriter 
                text={t('hero.title')} 
                speed={50} 
                startDelay={500}
              />
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" className="mb-4">
            <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              {t('hero.future_of_agriculture')}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" className="mb-8">
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </ScrollReveal>


          <ScrollReveal direction="up" className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/services">
                <PulseButton 
                  variant="primary"
                  className="text-lg px-8 py-4 flex items-center space-x-2 hover-lift"
                >
                  <span>{t('hero.services')}</span>
                  <ArrowRight className="w-5 h-5" />
                </PulseButton>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30 hover-scale glass-morphism"
                >
                  <Leaf className="w-5 h-5 mr-2" />
                  {t('hero.contact')}
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Enhanced Stats with Animation */}
          <ScrollReveal direction="up" className="mt-16 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FloatingElement delay={0} className="stagger-item">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 glass-morphism hover-lift neon-border intensity-low">
                  <RotatingIcon speed="slow" className="mb-3">
                    <Award className="w-8 h-8 text-yellow-400 mx-auto" />
                  </RotatingIcon>
                  <div className="text-3xl font-bold mb-2 text-glow">
                    <AnimatedCounter target={200} suffix="+" duration={2000} />
                  </div>
                  <div className="text-sm text-white/80">{t('hero.farmers_empowered')}</div>
                </div>
              </FloatingElement>

              <FloatingElement delay={1} className="stagger-item">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 glass-morphism hover-lift neon-border intensity-low">
                  <RotatingIcon speed="slow" direction="counterclockwise" className="mb-3">
                    <Leaf className="w-8 h-8 text-green-400 mx-auto" />
                  </RotatingIcon>
                  <div className="text-3xl font-bold mb-2 text-glow">
                    <AnimatedCounter target={25} suffix="+" duration={2500} />
                  </div>
                  <div className="text-sm text-white/80">{t('hero.produce_centers_planned')}</div>
                </div>
              </FloatingElement>

              <FloatingElement delay={2} className="stagger-item">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 glass-morphism hover-lift neon-border intensity-low">
                  <RotatingIcon speed="slow" className="mb-3">
                    <Sparkles className="w-8 h-8 text-blue-400 mx-auto" />
                  </RotatingIcon>
                  <div className="text-3xl font-bold mb-2 text-glow">
                    <AnimatedCounter target={100} suffix="%" duration={3000} />
                  </div>
                  <div className="text-sm text-white/80">{t('hero.organic_solutions')}</div>
                </div>
              </FloatingElement>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
