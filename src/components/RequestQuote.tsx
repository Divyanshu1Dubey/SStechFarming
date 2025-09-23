import { Calculator, FileText, Clock, CheckCircle, Phone, Mail, Truck, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useAnalytics } from "@/hooks/useAnalytics";

const RequestQuote = () => {
  const { t } = useTranslation();
  const { trackFormSubmission, trackButtonClick } = useAnalytics();

  const quoteTypes = [
    {
      type: "Product Purchase",
      icon: Package,
      description: "Get quotes for fresh mushrooms, processed products, and organic fertilizers",
      turnaround: "4-6 hours",
      features: [
        "Volume-based pricing",
        "Delivery cost included",
        "Quality specifications",
        "Payment terms"
      ]
    },
    {
      type: "Bulk Orders",
      icon: Truck,
      description: "Special pricing for large volume orders and wholesale purchases",
      turnaround: "12-24 hours",
      features: [
        "Tier-based discounts",
        "Flexible delivery schedule",
        "Credit terms available",
        "Account manager support"
      ]
    },
    {
      type: "Custom Packaging",
      icon: FileText,
      description: "Custom design and branding solutions for your products",
      turnaround: "2-3 days",
      features: [
        "Design consultation",
        "Material recommendations",
        "Sample production",
        "Branding integration"
      ]
    },
    {
      type: "Services & Installation",
      icon: Calculator,
      description: "Professional services including setup, training, and consulting",
      turnaround: "1-2 days",
      features: [
        "Site assessment included",
        "Equipment specifications",
        "Training programs",
        "Ongoing support"
      ]
    }
  ];

  const pricingFactors = [
    {
      factor: "Product Type & Quality",
      impact: "Fresh vs processed products have different pricing structures"
    },
    {
      factor: "Order Volume",
      impact: "Larger orders qualify for significant volume discounts"
    },
    {
      factor: "Delivery Location",
      impact: "Distance and accessibility affect delivery costs"
    },
    {
      factor: "Packaging Requirements",
      impact: "Custom packaging adds value but increases costs"
    },
    {
      factor: "Seasonality",
      impact: "Some products have seasonal availability affecting prices"
    },
    {
      factor: "Payment Terms",
      impact: "Extended payment terms may affect final pricing"
    }
  ];

  const quickPricing = {
    mushrooms: [
      { product: "Oyster Mushrooms", retail: "₹120-150/kg", bulk: "₹100-120/kg" },
      { product: "Button Mushrooms", retail: "₹80-100/kg", bulk: "₹70-85/kg" },
      { product: "Shiitake Mushrooms", retail: "₹350-400/kg", bulk: "₹320-350/kg" }
    ],
    processed: [
      { product: "Dried Mushroom Mix", retail: "₹800-1200/kg", bulk: "₹700-900/kg" },
      { product: "Mushroom Powder", retail: "₹1500-2000/kg", bulk: "₹1400-1600/kg" },
      { product: "Canned Mushrooms", retail: "₹150-200/can", bulk: "₹140-160/can" }
    ],
    fertilizers: [
      { product: "Spent Mushroom Substrate", retail: "₹15-25/kg", bulk: "₹12-18/kg" },
      { product: "Vermicompost Premium", retail: "₹20-30/kg", bulk: "₹18-25/kg" },
      { product: "Liquid Bio-Fertilizer", retail: "₹150-200/L", bulk: "₹130-180/L" }
    ]
  };

  return (
    <section id="request-quote" className="py-20 bg-gradient-to-b from-background to-agri-growth/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Request Quote
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Get accurate, competitive pricing for all our products and services. 
              Our team provides detailed quotes within hours, not days.
            </p>
          </div>

          {/* Quote Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quoteTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{type.type}</CardTitle>
                  <Badge variant="secondary">Response: {type.turnaround}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs flex items-center">
                        <CheckCircle className="w-3 h-3 text-agri-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Pricing Reference */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              Quick Pricing Reference
            </h2>
            <Tabs defaultValue="mushrooms" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
                <TabsTrigger value="mushrooms">Fresh Mushrooms</TabsTrigger>
                <TabsTrigger value="processed">Processed</TabsTrigger>
                <TabsTrigger value="fertilizers">Fertilizers</TabsTrigger>
              </TabsList>

              <TabsContent value="mushrooms">
                <div className="grid md:grid-cols-3 gap-4">
                  {quickPricing.mushrooms.map((item, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{item.product}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Retail:</span>
                            <Badge variant="outline">{item.retail}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Bulk:</span>
                            <Badge variant="secondary">{item.bulk}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="processed">
                <div className="grid md:grid-cols-3 gap-4">
                  {quickPricing.processed.map((item, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{item.product}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Retail:</span>
                            <Badge variant="outline">{item.retail}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Bulk:</span>
                            <Badge variant="secondary">{item.bulk}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="fertilizers">
                <div className="grid md:grid-cols-3 gap-4">
                  {quickPricing.fertilizers.map((item, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{item.product}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Retail:</span>
                            <Badge variant="outline">{item.retail}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Bulk:</span>
                            <Badge variant="secondary">{item.bulk}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Pricing Factors */}
          <div className="bg-agri-growth/10 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
              Factors Affecting Pricing
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingFactors.map((factor, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">{factor.factor}</h4>
                  <p className="text-sm text-muted-foreground">{factor.impact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Request Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
              Request Detailed Quote
            </h2>
            <form action="https://formspree.io/f/mpwjnpgp" method="POST" className="space-y-6" onSubmit={(e) => {
              const formData = new FormData(e.currentTarget);
              trackFormSubmission('quote_request', {
                quote_type: formData.get('quoteType'),
                order_value: formData.get('orderValue'),
                location: formData.get('location')
              });
            }}>
              <input type="hidden" name="form_type" value="quote_request" />
              
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Full Name *
                  </label>
                  <Input name="fullName" placeholder="Your Full Name" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Company Name
                  </label>
                  <Input name="company" placeholder="Company Name (if applicable)" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input type="email" name="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number *
                  </label>
                  <Input name="phone" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>

              {/* Quote Type */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Quote Type *
                  </label>
                  <select name="quoteType" className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring" required>
                    <option value="">Select Quote Type</option>
                    <option value="product_purchase">Product Purchase</option>
                    <option value="bulk_orders">Bulk Orders</option>
                    <option value="custom_packaging">Custom Packaging</option>
                    <option value="services">Services & Installation</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Expected Order Value
                  </label>
                  <select name="orderValue" className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select Range</option>
                    <option value="under_10k">Under ₹10,000</option>
                    <option value="10k_25k">₹10,000 - ₹25,000</option>
                    <option value="25k_50k">₹25,000 - ₹50,000</option>
                    <option value="50k_100k">₹50,000 - ₹1,00,000</option>
                    <option value="over_100k">Over ₹1,00,000</option>
                  </select>
                </div>
              </div>

              {/* Location & Timeline */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Delivery Location *
                  </label>
                  <Input name="location" placeholder="City, State" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Required By Date
                  </label>
                  <Input type="date" name="requiredDate" />
                </div>
              </div>

              {/* Detailed Requirements */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Detailed Requirements *
                </label>
                <Textarea 
                  name="requirements" 
                  placeholder="Please provide detailed information about products/services you need, quantities, specifications, etc."
                  rows={5}
                  required 
                />
              </div>

              {/* Additional Information */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Additional Information
                </label>
                <Textarea 
                  name="additionalInfo" 
                  placeholder="Any special requirements, certifications needed, payment preferences, etc."
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                <Calculator className="w-4 h-4 mr-2" />
                Request Quote
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * We typically respond within 4-24 hours with a detailed quote
              </p>
            </form>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center">Quick Phone Quote</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Need a quote urgently? Call us directly for immediate assistance.
                </p>
                <Link to="tel:+917992338119">
                  <Button className="bg-gradient-primary">
                    Call +91 79923 38119
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center">Email Quote</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Send us your requirements directly via email for detailed quotes.
                </p>
                <Link to="mailto:info@sstechfarmingindia.com">
                  <Button variant="outline">
                    Email Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-primary rounded-2xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Get Your Quote in Hours, Not Days
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our dedicated team ensures you receive accurate, competitive quotes quickly. 
              We include all costs upfront with no hidden charges.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">4-6h</div>
                <div className="text-sm">Product Quotes</div>
              </div>
              <div>
                <div className="text-2xl font-bold">12-24h</div>
                <div className="text-sm">Bulk Orders</div>
              </div>
              <div>
                <div className="text-2xl font-bold">2-3d</div>
                <div className="text-sm">Custom Solutions</div>
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Transparent Pricing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;