import { 
  Microscope, 
  Factory, 
  Droplets, 
  Thermometer, 
  Settings, 
  BarChart3,
  Leaf,
  Building
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import precisionFarmingImage from "@/assets/precision-farming.jpg";

const Services = () => {
  const services = [
    {
      icon: Microscope,
      title: "Mushroom Spawn Labs",
      description: "State-of-the-art spawn production facilities for white button mushrooms with controlled sterile environments.",
      features: ["Sterile cultivation environments", "Quality spawn production", "Research & development"]
    },
    {
      icon: Factory,
      title: "Indoor Composting Units", 
      description: "Advanced composting systems that convert organic waste into premium growing medium for mushroom cultivation.",
      features: ["Automated composting process", "Organic fertilizer production", "Waste-to-value conversion"]
    },
    {
      icon: Building,
      title: "Controlled Atmosphere Farming",
      description: "Commercial mushroom farming facilities with precise environmental control for optimal yields.",
      features: ["Climate-controlled growing", "Maximum yield optimization", "Year-round production"]
    },
    {
      icon: Settings,
      title: "Equipment Rental",
      description: "Comprehensive plant and machinery rental services tailored to regional agricultural needs.",
      features: ["Regional equipment availability", "Maintenance support", "Flexible rental terms"]
    },
    {
      icon: Droplets,
      title: "Precision Farming Solutions",
      description: "Advanced hydroponics, polyhouse setup, and drip irrigation systems for modern agriculture.",
      features: ["Hydroponic systems", "Polyhouse construction", "Drip irrigation setup"]
    },
    {
      icon: BarChart3,
      title: "Soil Health Monitoring",
      description: "Comprehensive soil analysis and monitoring systems including NPK levels, pH, and weather stations.",
      features: ["NPK monitoring", "Soil pH analysis", "Weather station setup"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background shadow-[inset_0_100px_200px_-100px_rgba(44,165,17,0.5)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive agritech solutions covering the entire mushroom value chain 
              and precision farming technologies across India.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow duration-300 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Leaf className="w-4 h-4 text-agri-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Service Section */}
          <div className="bg-gradient-to-r from-agri-growth to-agri-secondary/20 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  Consulting & Technology Setup
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our expert consulting services help you establish complete agricultural 
                  technology solutions. From mushroom plant setup to precision farming 
                  infrastructure, we provide end-to-end support for modern agricultural ventures.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <Thermometer className="w-5 h-5 text-agri-primary mr-3" />
                    <span className="text-sm">Climate Control Systems</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="w-5 h-5 text-agri-primary mr-3" />
                    <span className="text-sm">IoT Monitoring Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <Droplets className="w-5 h-5 text-agri-primary mr-3" />
                    <span className="text-sm">Water Management</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 text-agri-primary mr-3" />
                    <span className="text-sm">Automation Systems</span>
                  </div>
                </div>

                <Button className="bg-gradient-primary hover:opacity-90">
                  Schedule Consultation
                </Button>
              </div>

              <div className="relative">
                <img 
                  src={precisionFarmingImage} 
                  alt="Precision Farming Technology" 
                  className="rounded-xl shadow-strong w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agri-primary/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;