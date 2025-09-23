import { Droplets, Leaf, Settings, Monitor, Zap, TrendingUp, Award, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const HydroponicsInstallation = () => {
  const { t } = useTranslation();

  const hydroponicSystems = [
    {
      type: "Deep Water Culture (DWC)",
      icon: Droplets,
      description: "Simple and efficient system where plant roots are suspended in nutrient-rich water",
      price: "₹25,000 - ₹75,000",
      area: "100-500 sq ft",
      crops: ["Lettuce", "Spinach", "Herbs", "Kale"],
      features: [
        "Low maintenance requirements",
        "Fast plant growth rates",
        "Excellent for leafy greens",
        "Easy monitoring and control"
      ]
    },
    {
      type: "Nutrient Film Technique (NFT)",
      icon: Settings,
      description: "Continuous flow of nutrient solution through sloped channels for optimal root exposure",
      price: "₹40,000 - ₹1,20,000",
      area: "200-1000 sq ft",
      crops: ["Tomatoes", "Peppers", "Cucumbers", "Strawberries"],
      features: [
        "Water and nutrient efficient",
        "Scalable design options",
        "Good for vine crops",
        "Automated nutrient delivery"
      ]
    },
    {
      type: "Vertical Tower Systems",
      icon: TrendingUp,
      description: "Space-efficient vertical growing towers for maximum production in minimal space",
      price: "₹60,000 - ₹2,00,000",
      area: "50-300 sq ft",
      crops: ["Herbs", "Leafy Greens", "Strawberries", "Cherry Tomatoes"],
      features: [
        "Maximum space utilization",
        "Higher yield per square foot",
        "Suitable for urban farming",
        "Aesthetic appeal for display"
      ]
    },
    {
      type: "Ebb and Flow (Flood & Drain)",
      icon: Monitor,
      description: "Periodic flooding and draining cycles provide optimal water and oxygen balance",
      price: "₹35,000 - ₹1,00,000",
      area: "150-800 sq ft",
      crops: ["Vegetables", "Flowers", "Herbs", "Fruiting Plants"],
      features: [
        "Versatile for many crop types",
        "Good root aeration",
        "Reliable and proven method",
        "Easy maintenance access"
      ]
    }
  ];

  const installationProcess = [
    {
      step: "1",
      title: "Site Assessment & Planning",
      description: "Comprehensive evaluation of your space, requirements, and environmental conditions",
      duration: "2-3 days",
      deliverables: ["Site analysis report", "System design blueprint", "Equipment specifications", "Installation timeline"]
    },
    {
      step: "2",
      title: "System Design & Engineering",
      description: "Custom design of hydroponic system based on your crops, space, and budget",
      duration: "1-2 weeks",
      deliverables: ["Technical drawings", "Equipment list", "Nutrient schedule", "Monitoring setup"]
    },
    {
      step: "3",
      title: "Installation & Setup",
      description: "Professional installation with testing and calibration of all systems",
      duration: "3-7 days",
      deliverables: ["Complete installation", "System testing", "Initial nutrient setup", "Equipment training"]
    },
    {
      step: "4",
      title: "Training & Handover",
      description: "Comprehensive training on system operation, maintenance, and troubleshooting",
      duration: "2-3 days",
      deliverables: ["Operation manual", "Maintenance schedule", "Emergency protocols", "Support contacts"]
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      price: "₹25,000",
      area: "100 sq ft",
      plants: "50-80 plants",
      system: "DWC System",
      features: [
        "Basic DWC setup",
        "pH and EC meters",
        "Basic nutrients (1 month)",
        "Installation support",
        "2-hour training session"
      ],
      ideal: "Home growers & beginners"
    },
    {
      name: "Commercial Package",
      price: "₹1,00,000",
      area: "500 sq ft",
      plants: "300-500 plants",
      system: "NFT System",
      features: [
        "Professional NFT system",
        "Automated monitoring",
        "6-month nutrient supply",
        "Complete installation",
        "Full day training program",
        "3-month support"
      ],
      ideal: "Small to medium farms",
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "₹5,00,000+",
      area: "2000+ sq ft",
      plants: "1500+ plants",
      system: "Multi-system setup",
      features: [
        "Multiple growing systems",
        "IoT monitoring & control",
        "Climate control integration",
        "Professional installation",
        "Comprehensive training program",
        "12-month support contract",
        "Market linkage assistance"
      ],
      ideal: "Large commercial operations"
    }
  ];

  const benefits = [
    {
      icon: Droplets,
      title: "90% Less Water Usage",
      description: "Hydroponic systems use significantly less water than traditional farming methods"
    },
    {
      icon: TrendingUp,
      title: "3-5x Higher Yields",
      description: "Controlled environment and optimal nutrition lead to dramatically higher productivity"
    },
    {
      icon: Zap,
      title: "Faster Growth Cycles",
      description: "Plants grow 30-50% faster in hydroponic systems with proper nutrition"
    },
    {
      icon: Leaf,
      title: "Pesticide-Free Growing",
      description: "Controlled environment eliminates need for harmful pesticides and chemicals"
    }
  ];

  return (
    <section id="hydroponics-installation" className="py-20 bg-gradient-to-b from-background to-agri-growth/10">
      <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {t('services_page.solutions_title') || 'Hydroponics Installation Services'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('services_page.solutions_description') || 'Transform your farming with advanced hydroponic systems. We design, install, and maintain state-of-the-art soilless growing systems that maximize yields while minimizing water usage and environmental impact.'}
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* System Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              Hydroponic System Types
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {hydroponicSystems.map((system, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <system.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{system.type}</CardTitle>
                        <p className="text-sm text-muted-foreground">{system.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="outline">{system.price}</Badge>
                      <Badge variant="secondary">{system.area}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2">Ideal Crops:</h5>
                      <div className="flex flex-wrap gap-1">
                        {system.crops.map((crop, cropIndex) => (
                          <Badge key={cropIndex} variant="secondary" className="text-xs">
                            {crop}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {system.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-agri-primary mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Installation Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              Our Installation Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {installationProcess.map((step, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-agri-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <Badge variant="secondary">{step.duration}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <div>
                      <h5 className="font-semibold mb-2 text-xs">Deliverables:</h5>
                      <ul className="space-y-1">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="text-xs text-muted-foreground">
                            • {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              Installation Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative hover:shadow-lg transition-shadow duration-300 ${pkg.popular ? 'border-agri-primary shadow-lg' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-agri-primary">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-agri-primary mb-2">{pkg.price}</div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>Coverage: {pkg.area}</div>
                      <div>Capacity: {pkg.plants}</div>
                      <div>System: {pkg.system}</div>
                    </div>
                    <Badge variant="outline">{pkg.ideal}</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-agri-primary mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full mt-6 ${pkg.popular ? 'bg-gradient-primary' : ''}`}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-agri-growth/10 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
              Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-2">Urban Fresh Farms, Mumbai</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  "Our vertical hydroponic system increased lettuce production by 400% while using 85% less water than traditional methods."
                </p>
                <div className="flex gap-4 text-xs">
                  <span className="text-agri-primary font-semibold">400% Yield Increase</span>
                  <span className="text-agri-primary font-semibold">85% Water Savings</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2">Green Valley Hydroponics, Pune</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  "The NFT system allowed us to grow premium tomatoes year-round with consistent quality and 60% higher yields."
                </p>
                <div className="flex gap-4 text-xs">
                  <span className="text-agri-primary font-semibold">Year-round Production</span>
                  <span className="text-agri-primary font-semibold">60% Higher Yields</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
                    {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              {t('common.ready_to_get_started') || 'Ready to Start Your Hydroponic Journey?'}
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              {t('common.contact_team_description') || 'Join the future of farming with our expert hydroponic installation services. Get a free consultation and custom system design for your specific needs.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  {t('common.free_consultation') || 'Free Consultation'}
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-agri-primary">
                {t('common.download_brochure') || 'Download Brochure'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HydroponicsInstallation;