import { Truck, Wrench, Clock, Shield, Phone, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const EquipmentRental = () => {
  const { t } = useTranslation();

  const equipmentCategories = [
    {
      category: "Mushroom Farming Equipment",
      items: [
        {
          name: "Climate Control Systems",
          description: "Advanced HVAC systems for maintaining optimal temperature and humidity in mushroom growing rooms",
          dailyRate: "₹500-800",
          features: ["Temperature control", "Humidity monitoring", "Air circulation", "Energy efficient"]
        },
        {
          name: "Sterilization Equipment", 
          description: "Autoclave and sterilization units for substrate preparation and contamination control",
          dailyRate: "₹300-600",
          features: ["High-temperature sterilization", "Automatic cycles", "Safety certified", "Easy operation"]
        },
        {
          name: "Composting Machinery",
          description: "Turning machines and composting equipment for organic waste processing",
          dailyRate: "₹400-700",
          features: ["Automated turning", "Temperature monitoring", "Efficient composting", "Durable design"]
        }
      ]
    },
    {
      category: "Precision Farming Tools",
      items: [
        {
          name: "Soil Testing Kits",
          description: "Professional soil analysis equipment for pH, NPK, and micronutrient testing",
          dailyRate: "₹200-300",
          features: ["Digital readings", "Multiple parameters", "Portable design", "Accurate results"]
        },
        {
          name: "Weather Monitoring Stations",
          description: "IoT-enabled weather stations for real-time environmental data collection",
          dailyRate: "₹350-500",
          features: ["Real-time data", "Cloud connectivity", "Multiple sensors", "Mobile app access"]
        },
        {
          name: "Hydroponic Systems",
          description: "Complete hydroponic setups for soilless cultivation of vegetables and herbs",
          dailyRate: "₹600-1200",
          features: ["Nutrient management", "pH control", "Automated watering", "Space efficient"]
        }
      ]
    },
    {
      category: "Processing & Packaging",
      items: [
        {
          name: "Packaging Machines",
          description: "Automated packaging solutions for fresh and processed agricultural products",
          dailyRate: "₹800-1500",
          features: ["Various packaging sizes", "Vacuum sealing", "Label printing", "High speed operation"]
        },
        {
          name: "Dehydration Equipment",
          description: "Industrial dehydrators for mushroom and vegetable processing",
          dailyRate: "₹400-800",
          features: ["Temperature control", "Uniform drying", "Energy efficient", "Large capacity"]
        },
        {
          name: "Quality Testing Equipment",
          description: "Laboratory-grade equipment for product quality and safety testing",
          dailyRate: "₹300-500",
          features: ["Contamination testing", "Nutritional analysis", "Digital results", "Certified accuracy"]
        }
      ]
    }
  ];

  const rentalBenefits = [
    {
      icon: Truck,
      title: "Flexible Rental Terms",
      description: "Daily, weekly, monthly, or seasonal rental options to match your project timeline"
    },
    {
      icon: Wrench,
      title: "Maintenance Included",
      description: "All equipment comes with free maintenance, technical support, and replacement if needed"
    },
    {
      icon: Clock,
      title: "Quick Delivery",
      description: "Same-day or next-day delivery across our service areas in Eastern India"
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Comprehensive insurance coverage included with all rental agreements"
    }
  ];

  const serviceAreas = [
    "Jharkhand", "Bihar", "West Bengal", "Odisha", "Chhattisgarh", "Parts of Uttar Pradesh", "Assam"
  ];

  return (
    <section id="equipment-rental" className="py-20 bg-gradient-to-b from-background to-agri-growth/10">
      <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {t('services_page.rental_title') || 'Equipment Rental Services'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('services_page.rental_description') || 'Access professional-grade agricultural equipment without the upfront investment. Our rental services provide flexible access to the latest farming technology, from mushroom cultivation systems to precision farming tools.'}
            </p>
          </div>

          {/* Rental Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {rentalBenefits.map((benefit, index) => (
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

          {/* Equipment Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              Available Equipment
            </h2>
            <div className="space-y-12">
              {equipmentCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-bold mb-6 text-agri-primary">{category.category}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg">{item.name}</CardTitle>
                          <Badge variant="secondary" className="w-fit">
                            {item.dailyRate}/day
                          </Badge>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                            {item.description}
                          </p>
                          <div className="space-y-2">
                            <h5 className="font-semibold text-sm">Key Features:</h5>
                            <ul className="space-y-1">
                              {item.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                                  <CheckCircle className="w-3 h-3 text-agri-primary mr-2 flex-shrink-0" />
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
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-agri-growth/10 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
              Service Coverage Areas
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              We provide equipment rental services across Eastern and Central India
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {area}
                </Badge>
              ))}
            </div>
          </div>

          {/* Rental Process */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-10 text-foreground">
              How Equipment Rental Works
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Choose Equipment",
                  description: "Browse our catalog and select the equipment you need for your project"
                },
                {
                  step: "2", 
                  title: "Get Quote",
                  description: "Contact us for a customized quote based on your rental duration and requirements"
                },
                {
                  step: "3",
                  title: "Delivery & Setup",
                  description: "We deliver and set up the equipment at your location with full training"
                },
                {
                  step: "4",
                  title: "Ongoing Support",
                  description: "Receive 24/7 technical support and maintenance throughout the rental period"
                }
              ].map((step, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-agri-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
                    {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {t('common.ready_to_get_started') || 'Ready to Rent Equipment?'}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('common.contact_team_description') || 'Contact our team to discuss your equipment needs and get a customized rental package. We provide delivery, setup, and ongoing technical support.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  <Phone className="w-5 h-5 mr-2" />
                  {t('common.contact_us') || 'Contact Us'}
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                <Truck className="w-5 h-5 mr-2" />
                {t('common.request_delivery') || 'Request Delivery'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentRental;