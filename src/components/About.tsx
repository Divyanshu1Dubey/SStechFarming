import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation-Driven",
      description: "Pioneering advanced agricultural technologies and sustainable farming practices across India."
    },
    {
      icon: Eye,
      title: "Vision-Focused", 
      description: "Creating a nationwide network of produce centers revolutionizing the mushroom value chain."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Maintaining the highest standards in mushroom cultivation, processing, and agricultural consulting."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Empowering farmers with cutting-edge technology and comprehensive support systems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-agri-growth/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About SS TechFarming
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Based in Bokaro, Jharkhand, Bharat, we are an innovative agritech startup specializing in 
              mushroom cultivation and precision farming technologies. Our mission is to transform 
              Indian agriculture through sustainable, technology-driven solutions.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                To establish produce centers across India that handle the complete mushroom value chain - 
                from spawn production and controlled atmosphere farming to value-added products and 
                organic fertilizers. Each center will serve as a hub for agricultural innovation, 
                offering consulting services, equipment rental, and precision farming solutions.
              </p>
              
              <h4 className="text-xl font-semibold mb-4 text-foreground">Core Services</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-agri-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mushroom spawn lab and indoor composting units
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-agri-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Commercial farming in controlled atmosphere
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-agri-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Plant and machinery rental services
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-agri-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Precision farming and hydroponics consulting
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-agri-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Soil health monitoring and weather stations
                </li>
              </ul>
            </div>

            {/* Right Content - Stats */}
            <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-strong">
              <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span>Farmers Supported</span>
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Planned Centers</span>
                  <span className="text-2xl font-bold">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Mushroom Varieties</span>
                  <span className="text-2xl font-bold">5+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>States Coverage</span>
                  <span className="text-2xl font-bold">28</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;