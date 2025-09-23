import { Package, Palette, Shield, Truck, Award, CheckCircle, Eye, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const CustomPackaging = () => {
  const { t } = useTranslation();

  const packagingOptions = [
    {
      type: "Retail Packaging",
      icon: Package,
      description: "Consumer-ready packaging for retail stores and direct sales",
      minOrder: "500 units",
      price: "₹8-25/unit",
      features: [
        "Custom brand printing",
        "Product information labels", 
        "Barcode integration",
        "Attractive shelf display",
        "Food-safe materials"
      ],
      sizes: ["100g", "200g", "500g", "1kg"]
    },
    {
      type: "Premium Gift Packaging",
      icon: Award,
      description: "Luxury packaging for premium products and gift items",
      minOrder: "200 units",
      price: "₹25-75/unit",
      features: [
        "Premium materials",
        "Elegant design options",
        "Custom ribbon/sealing",
        "Gift card insertion",
        "Protective cushioning"
      ],
      sizes: ["250g", "500g", "750g", "1kg"]
    },
    {
      type: "Bulk Commercial Packaging",
      icon: Truck,
      description: "Efficient packaging for restaurants and commercial buyers",
      minOrder: "1000 units",
      price: "₹3-12/unit",
      features: [
        "Bulk quantity focus",
        "Easy handling design",
        "Cost-effective materials",
        "Stackable containers",
        "Clear quantity marking"
      ],
      sizes: ["2kg", "5kg", "10kg", "20kg"]
    },
    {
      type: "Export Packaging",
      icon: Shield,
      description: "International shipping compliant packaging with extended shelf life",
      minOrder: "1000 units",
      price: "₹15-40/unit",
      features: [
        "International standards",
        "Extended preservation",
        "Moisture control",
        "Tamper-evident sealing",
        "Multi-language labels"
      ],
      sizes: ["500g", "1kg", "2kg", "5kg"]
    }
  ];

  const customizationOptions = [
    {
      category: "Branding & Design",
      icon: Palette,
      options: [
        "Logo placement and sizing",
        "Brand color schemes",
        "Custom graphics and artwork", 
        "Product photography integration",
        "QR codes for traceability"
      ]
    },
    {
      category: "Materials & Sustainability",
      icon: Shield,
      options: [
        "Biodegradable materials",
        "Recyclable packaging options",
        "Food-grade certifications",
        "Moisture barrier coatings",
        "Temperature-resistant materials"
      ]
    },
    {
      category: "Functionality",
      icon: Zap,
      options: [
        "Resealable closures",
        "Easy-open features",
        "Portion control windows",
        "Stackable design",
        "Microwave-safe options"
      ]
    },
    {
      category: "Information & Compliance",
      icon: Eye,
      options: [
        "Nutritional information",
        "Storage instructions",
        "Expiry date printing",
        "Regulatory compliance labels",
        "Ingredient listings"
      ]
    }
  ];

  const packagingProcess = [
    {
      step: "1",
      title: "Design Consultation",
      description: "Discuss your brand requirements, target market, and packaging goals",
      duration: "1-2 days"
    },
    {
      step: "2",
      title: "Concept Development",
      description: "Create initial design concepts and material recommendations",
      duration: "3-5 days"
    },
    {
      step: "3",
      title: "Sample Creation",
      description: "Produce physical samples for approval and testing",
      duration: "1-2 weeks"
    },
    {
      step: "4",
      title: "Production & Delivery",
      description: "Full-scale production and quality-controlled delivery",
      duration: "2-4 weeks"
    }
  ];

  const industries = [
    {
      name: "Restaurants & Hotels",
      requirements: "Bulk quantities, easy handling, cost-effective",
      popularSizes: ["2kg", "5kg", "10kg"]
    },
    {
      name: "Retail Stores",
      requirements: "Attractive display, consumer information, shelf appeal",
      popularSizes: ["100g", "200g", "500g", "1kg"]
    },
    {
      name: "Export Companies", 
      requirements: "International compliance, extended shelf life, durability",
      popularSizes: ["500g", "1kg", "2kg"]
    },
    {
      name: "Gift & Premium Market",
      requirements: "Luxury appearance, premium materials, gift presentation",
      popularSizes: ["250g", "500g", "750g"]
    }
  ];

  return (
    <section id="custom-packaging" className="py-20 bg-gradient-to-b from-background to-agri-growth/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Custom Packaging Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Stand out in the market with custom-designed packaging that reflects your brand. 
              From retail-ready consumer packs to bulk commercial packaging, we create solutions 
              that protect your products and enhance your brand presence.
            </p>
          </div>

          {/* Packaging Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              Packaging Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {packagingOptions.map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{option.type}</CardTitle>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="outline">{option.price}</Badge>
                      <Badge variant="secondary">Min: {option.minOrder}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2">Available Sizes:</h5>
                      <div className="flex flex-wrap gap-2">
                        {option.sizes.map((size, sizeIndex) => (
                          <Badge key={sizeIndex} variant="secondary" className="text-xs">
                            {size}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Features:</h5>
                      <ul className="space-y-1">
                        {option.features.map((feature, featureIndex) => (
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

          {/* Customization Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              Customization Options
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {customizationOptions.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg text-center">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.options.map((option, optionIndex) => (
                        <li key={optionIndex} className="text-sm flex items-start">
                          <span className="w-2 h-2 bg-agri-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          {option}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Industry Solutions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              Industry-Specific Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Requirements:</h5>
                        <p className="text-sm text-muted-foreground">{industry.requirements}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Popular Sizes:</h5>
                        <div className="flex flex-wrap gap-2">
                          {industry.popularSizes.map((size, sizeIndex) => (
                            <Badge key={sizeIndex} variant="outline" className="text-xs">
                              {size}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Packaging Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              Custom Packaging Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packagingProcess.map((step, index) => (
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

          {/* Quote Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
              Get Custom Packaging Quote
            </h2>
            <form action="https://formspree.io/f/mpwjnpgp" method="POST" className="space-y-6">
              <input type="hidden" name="form_type" value="custom_packaging" />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Company/Brand Name *
                  </label>
                  <Input name="brandName" placeholder="Your Brand Name" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Contact Person *
                  </label>
                  <Input name="contactPerson" placeholder="Full Name" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input type="email" name="email" placeholder="contact@brand.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number *
                  </label>
                  <Input name="phone" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Packaging Type
                  </label>
                  <select name="packagingType" className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select Type</option>
                    <option value="retail">Retail Packaging</option>
                    <option value="premium">Premium Gift Packaging</option>
                    <option value="bulk">Bulk Commercial</option>
                    <option value="export">Export Packaging</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Quantity Needed
                  </label>
                  <Input name="quantity" placeholder="e.g., 1000 units" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Product Size/Weight
                  </label>
                  <Input name="size" placeholder="e.g., 500g" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Design & Branding Requirements
                </label>
                <Textarea 
                  name="requirements" 
                  placeholder="Describe your branding requirements, logo placement, colors, special features, etc."
                  rows={4}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Target Launch Date
                </label>
                <Input type="date" name="launchDate" />
              </div>

              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                Request Custom Packaging Quote
              </Button>
            </form>
          </div>

          {/* Success Stories */}
          <div className="bg-agri-growth/10 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
              Custom Packaging Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-2">Organic Valley Premium Mushrooms</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  "Custom retail packaging helped us achieve 40% better shelf visibility and 25% increase in sales in premium supermarkets."
                </p>
                <div className="flex gap-4 text-xs">
                  <span className="text-agri-primary font-semibold">40% Better Visibility</span>
                  <span className="text-agri-primary font-semibold">25% Sales Increase</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2">Fresh Express Restaurant Chain</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  "Bulk commercial packaging reduced our handling time by 50% and cut packaging costs by 30% across 20 locations."
                </p>
                <div className="flex gap-4 text-xs">
                  <span className="text-agri-primary font-semibold">50% Time Savings</span>
                  <span className="text-agri-primary font-semibold">30% Cost Reduction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-primary rounded-2xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Create Your Custom Packaging?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let our packaging experts help you create the perfect solution for your brand. 
              From concept to delivery, we'll ensure your products stand out in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Schedule Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-agri-primary">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPackaging;