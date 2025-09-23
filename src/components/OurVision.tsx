import { Target, Globe, Leaf, TrendingUp, Users, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const OurVision = () => {
  const { t } = useTranslation();

  const visionPillars = [
    {
      icon: Target,
      title: "AI-Driven Agriculture",
      description: "Implementing cutting-edge AI and IoT technologies to optimize farming operations and maximize yield potential across all produce centers."
    },
    {
      icon: Globe,
      title: "Nationwide Network",
      description: "Establishing 25+ produce centers across India, creating a comprehensive ecosystem that connects farmers to markets efficiently."
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Promoting eco-friendly farming methods and circular economy principles to ensure environmental sustainability for future generations."
    },
    {
      icon: TrendingUp,
      title: "Value Chain Integration",
      description: "Complete integration from seed production to market delivery, ensuring quality control and maximum profitability for farmers."
    },
    {
      icon: Users,
      title: "Farmer Empowerment",
      description: "Providing comprehensive training, resources, and technology access to enable farmers to achieve sustainable growth and prosperity."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Continuous research and development in agricultural technologies, creating innovative solutions for modern farming challenges."
    }
  ];

  const roadmapSteps = [
    {
      phase: "Phase 1",
      title: "Foundation (2024-2025)",
      description: "Establish flagship centers in Jharkhand, Bihar, and West Bengal with complete mushroom cultivation facilities."
    },
    {
      phase: "Phase 2", 
      title: "Expansion (2025-2027)",
      description: "Scale to 15+ centers across Eastern and Central India, introducing precision farming and hydroponics solutions."
    },
    {
      phase: "Phase 3",
      title: "Innovation (2027-2030)",
      description: "Launch AI-powered marketplace, expand to 25+ centers nationwide, and establish SS TechFarming as India's leading agritech platform."
    }
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-background to-agri-growth/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Our Vision
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('about_page.vision_description')}
            </p>
          </div>

          {/* Vision Statement */}
          <div className="bg-gradient-primary rounded-2xl p-10 mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              "Transforming India's Agricultural Landscape"
            </h2>
            <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
              To establish AI-driven produce centers across India that cover the full value chain — from seed and spawn to farming, 
              value-added products, and fertilizers — all powered by a single AI-driven platform. Each hub will drive agricultural 
              innovation with consulting, equipment rental, precision farming, marketplace services, and real-time insights to help 
              farmers and partners grow sustainably and profitably.
            </p>
          </div>

          {/* Vision Pillars */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-10 text-foreground">
              Our Vision Pillars
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visionPillars.map((pillar, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-10 text-foreground">
              Our Growth Roadmap
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {roadmapSteps.map((step, index) => (
                <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
                  <CardHeader>
                    <div className="text-sm font-semibold text-agri-primary mb-2">{step.phase}</div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Impact Goals */}
          <div className="bg-agri-growth/10 rounded-2xl p-10 mb-16">
            <h3 className="text-3xl font-bold text-center mb-10 text-foreground">
              Impact Goals by 2030
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-agri-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Farmers Empowered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-agri-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Produce Centers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-agri-primary mb-2">50,000+</div>
                <div className="text-sm text-muted-foreground">Tonnes Annual Production</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-agri-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">States Coverage</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Join Our Vision for the Future
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of India's agricultural revolution. Whether you're a farmer, investor, or technology partner, 
              there's a place for you in our vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Partner With Us
                </Button>
              </Link>
              <Link to="/Career">
                <Button size="lg" variant="outline">
                  Join Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;