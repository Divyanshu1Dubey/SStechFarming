import { Package, Truck, Clock, Users, Calculator, CheckCircle, FileText, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const BulkOrders = () => {
  const { t } = useTranslation();

  const bulkProducts = [
    {
      category: "Fresh Mushrooms",
      icon: Package,
      products: [
        {
          name: "Oyster Mushrooms",
          minOrder: "50 kg",
          price: "₹100-120/kg",
          availability: "Daily",
          packaging: "5kg, 10kg crates"
        },
        {
          name: "Button Mushrooms",
          minOrder: "100 kg",
          price: "₹75-90/kg", 
          availability: "Daily",
          packaging: "10kg, 20kg crates"
        },
        {
          name: "Shiitake Mushrooms",
          minOrder: "25 kg",
          price: "₹320-350/kg",
          availability: "Weekly",
          packaging: "2kg, 5kg crates"
        }
      ]
    },
    {
      category: "Processed Products",
      icon: FileText,
      products: [
        {
          name: "Dried Mushroom Mix",
          minOrder: "10 kg",
          price: "₹700-900/kg",
          availability: "Always in stock",
          packaging: "1kg, 5kg vacuum packs"
        },
        {
          name: "Mushroom Powder",
          minOrder: "5 kg",
          price: "₹1400-1600/kg",
          availability: "Always in stock",
          packaging: "500g, 1kg sealed containers"
        },
        {
          name: "Canned Mushrooms",
          minOrder: "100 cans",
          price: "₹140-160/can",
          availability: "Always in stock",
          packaging: "400g cans, bulk cartons"
        }
      ]
    },
    {
      category: "Organic Fertilizers",
      icon: Truck,
      products: [
        {
          name: "Spent Mushroom Substrate",
          minOrder: "500 kg",
          price: "₹12-18/kg",
          availability: "Daily",
          packaging: "50kg bags"
        },
        {
          name: "Vermicompost Premium",
          minOrder: "200 kg",
          price: "₹18-25/kg",
          availability: "Weekly",
          packaging: "25kg, 50kg bags"
        },
        {
          name: "Liquid Bio-Fertilizer",
          minOrder: "20 liters",
          price: "₹130-180/liter",
          availability: "Monthly",
          packaging: "5L, 10L containers"
        }
      ]
    }
  ];

  const orderTiers = [
    {
      tier: "Bronze",
      minOrder: "₹10,000",
      discount: "5%",
      benefits: [
        "5% bulk discount",
        "Standard delivery",
        "Email support",
        "Basic packaging"
      ]
    },
    {
      tier: "Silver",
      minOrder: "₹25,000",
      discount: "8%",
      benefits: [
        "8% bulk discount",
        "Priority delivery",
        "Phone support",
        "Custom packaging options",
        "Flexible payment terms"
      ],
      popular: true
    },
    {
      tier: "Gold",
      minOrder: "₹50,000",
      discount: "12%",
      benefits: [
        "12% bulk discount",
        "Express delivery",
        "Dedicated account manager",
        "Custom branding available",
        "Extended payment terms",
        "Quality certificates"
      ]
    },
    {
      tier: "Platinum",
      minOrder: "₹1,00,000+",
      discount: "15%+",
      benefits: [
        "15%+ bulk discount",
        "Same-day delivery (local)",
        "24/7 support hotline",
        "White-label packaging",
        "Net 60 payment terms",
        "Exclusive product access",
        "Partnership opportunities"
      ]
    }
  ];

  const orderProcess = [
    {
      step: "1",
      title: "Submit Requirement",
      description: "Fill out our bulk order form with your specific requirements and quantities",
      icon: FileText
    },
    {
      step: "2",
      title: "Get Quote",
      description: "Receive a detailed quote within 24 hours including pricing and delivery timeline",
      icon: Calculator
    },
    {
      step: "3",
      title: "Confirm Order",
      description: "Review and confirm your order with payment terms and delivery schedule",
      icon: CheckCircle
    },
    {
      step: "4",
      title: "Production & Delivery",
      description: "We process your order and deliver according to the agreed schedule",
      icon: Truck
    }
  ];

  const whyChooseBulk = [
    {
      icon: Package,
      title: "Significant Cost Savings",
      description: "Save 5-15% on bulk orders with tier-based discounts"
    },
    {
      icon: Truck,
      title: "Reliable Supply Chain",
      description: "Guaranteed supply with flexible delivery schedules"
    },
    {
      icon: Clock,
      title: "Priority Processing",
      description: "Bulk orders get priority in production and delivery"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Assigned account manager for personalized service"
    }
  ];

  return (
    <section id="bulk-orders" className="py-20 bg-gradient-to-b from-background to-agri-growth/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Bulk Orders & Wholesale
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Scale your business with our bulk ordering program. Get premium quality products 
              at wholesale prices with flexible terms and dedicated support for restaurants, 
              retailers, and distributors.
            </p>
          </div>

          {/* Why Choose Bulk */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {whyChooseBulk.map((benefit, index) => (
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

          {/* Bulk Products */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              Bulk Product Categories
            </h2>
            <div className="space-y-8">
              {bulkProducts.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.products.map((product, productIndex) => (
                      <Card key={productIndex} className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <div className="flex gap-2">
                            <Badge variant="outline">{product.price}</Badge>
                            <Badge variant="secondary">Min: {product.minOrder}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="font-semibold">Availability:</span>
                              <span className="text-agri-primary">{product.availability}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-semibold">Packaging:</span>
                              <span>{product.packaging}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Tiers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              Bulk Order Tiers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {orderTiers.map((tier, index) => (
                <Card key={index} className={`relative hover:shadow-lg transition-shadow duration-300 ${tier.popular ? 'border-agri-primary shadow-lg' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-agri-primary">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{tier.tier}</CardTitle>
                    <div className="text-2xl font-bold text-agri-primary">{tier.discount}</div>
                    <div className="text-sm text-muted-foreground">Discount</div>
                    <Badge variant="outline">Min Order: {tier.minOrder}</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-agri-primary mr-2 flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              How Bulk Ordering Works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {orderProcess.map((step, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-agri-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-5 h-5 text-white" />
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

          {/* Bulk Order Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
              Request Bulk Quote
            </h2>
            <form action="https://formspree.io/f/mpwjnpgp" method="POST" className="space-y-6">
              <input type="hidden" name="form_type" value="bulk_order" />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Company Name *
                  </label>
                  <Input name="company" placeholder="Your Company Name" required />
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
                  <Input type="email" name="email" placeholder="business@company.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number *
                  </label>
                  <Input name="phone" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Business Type
                  </label>
                  <select name="businessType" className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select Business Type</option>
                    <option value="restaurant">Restaurant/Hotel</option>
                    <option value="retailer">Retailer/Supermarket</option>
                    <option value="distributor">Distributor/Wholesaler</option>
                    <option value="processor">Food Processor</option>
                    <option value="exporter">Exporter</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Expected Order Value
                  </label>
                  <select name="orderValue" className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select Range</option>
                    <option value="10k-25k">₹10,000 - ₹25,000</option>
                    <option value="25k-50k">₹25,000 - ₹50,000</option>
                    <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                    <option value="100k+">₹1,00,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Product Requirements *
                </label>
                <Textarea 
                  name="requirements" 
                  placeholder="Please specify products, quantities, delivery schedule, and any special requirements..."
                  rows={5}
                  required 
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                Request Quote
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-primary rounded-2xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Place a Bulk Order?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our bulk order specialists are ready to help you get the best deals and 
              ensure timely delivery for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: +91 79923 38119
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-agri-primary">
                Download Bulk Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkOrders;