import { Users, Lightbulb, Target, TrendingUp, Clock, Award, MessageSquare, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const ConsultingServices = () => {
  const { t } = useTranslation();

  const consultingAreas = [
    {
      icon: Lightbulb,
      title: "Farm Setup & Planning",
      description: "Complete guidance for establishing new mushroom farms and agricultural ventures",
      services: [
        "Site selection and analysis",
        "Infrastructure design and planning", 
        "Equipment selection and procurement",
        "Operational workflow design",
        "Investment planning and ROI analysis"
      ],
      duration: "2-4 weeks",
      price: "₹25,000 - ₹75,000"
    },
    {
      icon: Target,
      title: "Precision Farming Implementation",
      description: "Technology integration and optimization for modern agricultural practices",
      services: [
        "IoT sensor network setup",
        "Automated irrigation system design",
        "Climate control system installation",
        "Data analytics and monitoring",
        "Smart farming protocol development"
      ],
      duration: "3-6 weeks",
      price: "₹50,000 - ₹150,000"
    },
    {
      icon: TrendingUp,
      title: "Business Growth Strategy",
      description: "Strategic planning for scaling agricultural operations and market expansion",
      services: [
        "Market analysis and opportunity assessment",
        "Business model optimization",
        "Distribution channel development",
        "Brand positioning and marketing",
        "Financial planning and investment guidance"
      ],
      duration: "4-8 weeks", 
      price: "₹75,000 - ₹200,000"
    },
    {
      icon: Users,
      title: "Training & Capacity Building",
      description: "Comprehensive training programs for farmers and agricultural teams",
      services: [
        "Technical skills development",
        "Modern farming techniques",
        "Equipment operation and maintenance",
        "Quality control and safety protocols",
        "Leadership and team management"
      ],
      duration: "1-2 weeks",
      price: "₹15,000 - ₹50,000"
    }
  ];

  const consultingProcess = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "We conduct a thorough analysis of your current operations, goals, and challenges",
      duration: "1-2 days"
    },
    {
      step: "2", 
      title: "Strategy Development",
      description: "Our experts develop a customized action plan tailored to your specific needs",
      duration: "3-5 days"
    },
    {
      step: "3",
      title: "Implementation Support",
      description: "We provide hands-on guidance during the implementation phase",
      duration: "Ongoing"
    },
    {
      step: "4",
      title: "Performance Monitoring",
      description: "Continuous monitoring and optimization to ensure sustainable success",
      duration: "Long-term"
    }
  ];

  const expertTeam = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Agricultural Consultant",
      expertise: "20+ years in agricultural innovation and farm management",
      specializations: ["Mushroom cultivation", "Precision farming", "Sustainable agriculture"]
    },
    {
      name: "Priya Sharma",
      role: "Technology Integration Specialist", 
      expertise: "15+ years in IoT and smart farming solutions",
      specializations: ["IoT systems", "Data analytics", "Automation"]
    },
    {
      name: "Amit Verma",
      role: "Business Strategy Advisor",
      expertise: "12+ years in agribusiness development",
      specializations: ["Market analysis", "Financial planning", "Growth strategy"]
    },
    {
      name: "Dr. Sunita Devi",
      role: "Sustainability Expert",
      expertise: "18+ years in organic farming and environmental science",
      specializations: ["Organic practices", "Waste management", "Environmental compliance"]
    }
  ];

  const successMetrics = [
    { metric: "Client Success Rate", value: "95%", description: "Clients achieve their goals within projected timeline" },
    { metric: "Average ROI Improvement", value: "40%", description: "Return on investment increase after consulting" },
    { metric: "Cost Reduction", value: "25%", description: "Average operational cost savings achieved" },
    { metric: "Productivity Increase", value: "35%", description: "Average improvement in farm productivity" }
  ];

  return (
    <section id="consulting-services" className="py-20 bg-gradient-to-b from-background to-agri-growth/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {t('services_page.consulting_title') || 'Agricultural Consulting Services'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('services_page.consulting_description') || 'Expert guidance to transform your agricultural venture. Our experienced consultants provide comprehensive support from farm planning to optimization, helping you achieve sustainable growth and maximum profitability.'}
            </p>
          </div>          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-agri-primary mb-2">{metric.value}</div>
                  <div className="font-semibold mb-2">{metric.metric}</div>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Consulting Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              Our Consulting Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {consultingAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <area.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{area.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">
                        <Clock className="w-3 h-3 mr-1" />
                        {area.duration}
                      </Badge>
                      <Badge variant="outline">{area.price}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h5 className="font-semibold mb-3">Services Included:</h5>
                    <ul className="space-y-2">
                      {area.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-agri-primary mr-2 flex-shrink-0 mt-0.5" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Consulting Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              Our Consulting Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultingProcess.map((step, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-agri-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <Badge variant="secondary">{step.duration}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Expert Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              Meet Our Expert Team
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {expertTeam.map((expert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{expert.name}</CardTitle>
                    <p className="text-agri-primary font-semibold">{expert.role}</p>
                    <p className="text-sm text-muted-foreground">{expert.expertise}</p>
                  </CardHeader>
                  <CardContent>
                    <h5 className="font-semibold mb-2">Specializations:</h5>
                    <div className="flex flex-wrap gap-2">
                      {expert.specializations.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="secondary">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-agri-growth/10 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-5 h-5 text-agri-primary mr-2" />
                  <span className="font-semibold">Ramesh Gupta, Mushroom Farmer</span>
                </div>
                <p className="text-sm text-muted-foreground italic mb-4">
                  "SS TechFarming's consulting transformed our small mushroom operation into a profitable enterprise. 
                  Their expertise in setup and technology integration increased our yield by 50%."
                </p>
                <div className="flex items-center">
                  <Award className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-xs text-muted-foreground">Verified Client</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-5 h-5 text-agri-primary mr-2" />
                  <span className="font-semibold">Sita Devi, Organic Farm Owner</span>
                </div>
                <p className="text-sm text-muted-foreground italic mb-4">
                  "The precision farming consultation helped us reduce water usage by 30% while improving crop quality. 
                  The ROI was achieved within 8 months."
                </p>
                <div className="flex items-center">
                  <Award className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-xs text-muted-foreground">Verified Client</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              Consulting Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <CardTitle>Basic Consultation</CardTitle>
                  <div className="text-2xl font-bold text-agri-primary">₹15,000</div>
                  <p className="text-sm text-muted-foreground">Perfect for small farms</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agri-primary mr-2" />
                      Initial assessment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agri-primary mr-2" />
                      Basic recommendations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agri-primary mr-2" />
                      2-week follow-up
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agri-primary mr-2" />
                      Email support
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative border-agri-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-agri-primary">Most Popular</Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle>Professional Consultation</CardTitle>
                  <div className="text-2xl font-bold text-agri-primary">₹75,000</div>
                  <p className="text-sm text-muted-foreground">Ideal for medium farms</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agri-primary mr-2" />
                      Comprehensive analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agri-primary mr-2" />
                      Implementation support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agri-primary mr-2" />
                      3-month monitoring
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agri-primary mr-2" />
                      On-site visits
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agri-primary mr-2" />
                      Technology integration
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-primary">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <CardTitle>Enterprise Consultation</CardTitle>
                  <div className="text-2xl font-bold text-agri-primary">₹200,000</div>
                  <p className="text-sm text-muted-foreground">For large operations</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agri-primary mr-2" />
                      Full business transformation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agri-primary mr-2" />
                      Dedicated project manager
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agri-primary mr-2" />
                      12-month support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agri-primary mr-2" />
                      Custom solutions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-agri-primary mr-2" />
                      Market linkage support
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-primary rounded-2xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards agricultural success with our expert consultation. 
              Book a free initial assessment and discover how we can help you achieve your farming goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Book Free Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-agri-primary">
                Download Services Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingServices;