import { Package, Recycle, ShoppingCart, Award, Star, Truck, Shield, Clock, CheckCircle, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import mushroomProductsImage from "@/assets/mushroom-products.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { 
  ScrollReveal, 
  GlowCard, 
  PulseButton, 
  GradientText,
  ShimmerCard,
  FloatingElement,
  RotatingIcon,
  Typewriter
} from './SimpleAnimations';
import './SimpleAnimations.css';

const Products = () => {
  const { t } = useTranslation();

  const freshMushrooms = [
    {
      icon: Package,
      title: "White Button Mushroom Spawn",
      description: "Premium lab-tested white button mushroom spawn for cultivation. AI-powered quality control ensures maximum yield.",
      price: "₹120-150/kg",
      availability: "Year-round",
      nutritionalHighlights: ["Lab Tested", "High Yield", "AI Quality Control"],
      shelfLife: "30 days (refrigerated)",
      features: [
        "Laboratory tested and certified",
        "AI-powered production monitoring",
        "Quality guaranteed spawn bags",
        "Technical support included"
      ],
      badge: "Lab Grade",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=200&fit=crop&crop=center"
    },
    {
      icon: Package,
      title: "Fresh White Button Mushrooms", 
      description: "Premium fresh mushrooms with AI-monitored growth conditions. Perfect for commercial kitchens and retail.",
      price: "₹350-400/kg",
      availability: "Daily harvest",
      nutritionalHighlights: ["High Protein", "Low Calorie", "Rich in Vitamins"],
      shelfLife: "7-10 days fresh",
      features: [
        "AI-controlled growing environment",
        "Fresh daily harvest with smart tracking",
        "Consistent quality and size", 
        "Perfect for restaurants and retail"
      ],
      badge: "Fresh",
      image: "https://images.unsplash.com/photo-1616593235552-7ad5b86b8b8b?w=300&h=200&fit=crop&crop=center"
    },
    {
      icon: ShoppingCart,
      title: "Shiitake Mushrooms",
      description: "Premium shiitake mushrooms grown using advanced controlled environment agriculture technology.",
      price: "₹500-600/kg",
      availability: "Season-based",
      nutritionalHighlights: ["Immune Booster", "Antioxidants", "Medicinal Properties"],
      shelfLife: "5-8 days fresh",
      features: [
        "Controlled environment cultivation",
        "Advanced nutrient monitoring",
        "Premium quality for gourmet cooking",
        "Health-focused production"
      ],
      badge: "Premium",
      image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=300&h=200&fit=crop&crop=center"
    }
  ];

  const processedMushrooms = [
    {
      icon: ShoppingCart,
      title: "Processed Canned Mushrooms",
      description: "AI-optimized processing ensures maximum nutrition retention. Smart packaging for extended shelf life and quality.",
      price: "₹500-600/kg",
      availability: "Bulk orders",
      nutritionalHighlights: ["Extended Shelf Life", "Nutrition Retained", "Smart Packaging"],
      shelfLife: "2 years (canned)",
      features: [
        "AI-optimized processing for nutrition retention",
        "Smart packaging technology",
        "Automated quality control systems",
        "Blockchain-tracked supply chain"
      ],
      badge: "Smart Tech",
      image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=300&h=200&fit=crop&crop=center"
    },
    {
      icon: Package,
      title: "Dried Mushroom Products",
      description: "Advanced dehydration technology preserves nutrients and flavor. Smart storage solutions for farmers and retailers.",
      price: "₹800-1200/kg",
      availability: "Year-round",
      nutritionalHighlights: ["Concentrated Nutrients", "Long Storage", "Premium Quality"],
      shelfLife: "12+ months",
      features: [
        "Advanced dehydration technology",
        "Smart storage monitoring systems",
        "Nutrient concentration optimization",
        "Export-quality processing"
      ],
      badge: "Premium",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=200&fit=crop&crop=center"
    }
  ];

  const organicFertilizers = [
    {
      icon: Leaf,
      title: "AI-Optimized Organic Fertilizer",
      description: "Smart compost made from mushroom waste using AI-controlled composting. Maximizes nutrient value for modern agriculture.",
      price: "₹80-100/kg", 
      availability: "Year-round",
      nutritionalHighlights: ["AI Optimized", "Smart Nutrients", "Soil Intelligence"],
      shelfLife: "Indefinite (dry storage)",
      features: [
        "AI-controlled composting process",
        "Smart nutrient release technology",
        "Soil health monitoring compatible", 
        "IoT-enabled application tracking"
      ],
      badge: "Smart Agri",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop&crop=center"
    },
    {
      icon: Recycle,
      title: "Bio-Enhanced Vermicompost",
      description: "Advanced bio-enhanced vermicompost with precision nutrient monitoring. Perfect for smart farming operations.",
      price: "₹120-150/kg",
      availability: "Year-round", 
      nutritionalHighlights: ["Bio Enhanced", "Precision Nutrients", "Smart Release"],
      shelfLife: "24+ months",
      features: [
        "Bio-enhancement technology",
        "Precision nutrient profiling",
        "Smart release mechanisms",
        "Compatible with precision agriculture"
      ],
      badge: "Bio Tech",
      image: "https://images.unsplash.com/photo-1574263867128-4e73b5db6388?w=300&h=200&fit=crop&crop=center"
    }
  ];

  const processedProducts = [
    {
      icon: Package,
      title: "Dried Mushroom Mix",
      description: "Premium dried mushrooms for long-term storage and enhanced flavors",
      price: "₹800-1200/kg",
      shelfLife: "12+ months",
      features: [
        "Extended shelf life",
        "Concentrated flavors",
        "Easy storage and transport",
        "Rehydrates perfectly"
      ]
    },
    {
      icon: Package,
      title: "Mushroom Powder",
      description: "Fine mushroom powder for seasoning and nutritional supplements",
      price: "₹1500-2000/kg",
      shelfLife: "18+ months",
      features: [
        "Concentrated nutrition",
        "Versatile ingredient",
        "Long shelf life",
        "Easy to incorporate in foods"
      ]
    },
    {
      icon: Package,
      title: "Canned Mushrooms",
      description: "Ready-to-use canned mushrooms in brine for commercial and retail markets",
      price: "₹150-200/can",
      shelfLife: "24+ months",
      features: [
        "Ready to use",
        "Long shelf life",
        "Convenient packaging",
        "Restaurant quality"
      ]
    }
  ];



  const qualityAssuranceFeatures = [
    {
      icon: Shield,
      title: "Quality Certified",
      description: "All products meet international food safety standards"
    },
    {
      icon: Truck,
      title: "Fresh Delivery",
      description: "Cold chain maintained from farm to your doorstep"
    },
    {
      icon: Clock,
      title: "Harvest to Pack",
      description: "Products packed within 24 hours of harvest"
    },
    {
      icon: Star,
      title: "Premium Grade",
      description: "Only Grade A+ products reach our customers"
    }
  ];
  
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-agri-growth/10 to-background shadow-[inset_0_100px_200px_-100px_rgba(44,165,17,0.5)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Animated Header */}
          <ScrollReveal direction="down" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <GradientText>
                <Typewriter 
                  text={t('products_page.title')} 
                  speed={80}
                  startDelay={300}
                />
              </GradientText>
            </h2>
            <ScrollReveal direction="up" className="mt-6">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('products_page.subtitle')}
              </p>
            </ScrollReveal>
          </ScrollReveal>

          {/* Hero Product Section */}
          <div className="bg-white rounded-2xl shadow-strong overflow-hidden mb-16">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-agri-primary text-white">
                  {t('products_page.featured_products')}
                </Badge>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  {t('products_page.value_chain_title')}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('products_page.value_chain_description')}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-agri-growth/30 rounded-lg p-4">
                    <div className="font-semibold text-agri-soil mb-1">{t('products_page.production_stat')}</div>
                    <div className="text-2xl font-bold text-agri-primary">500+ kg</div>
                  </div>
                  <div className="bg-agri-growth/30 rounded-lg p-4">
                    <div className="font-semibold text-agri-soil mb-1">{t('products_page.quality_stat')}</div>
                    <div className="text-2xl font-bold text-agri-primary">Grade A+</div>
                  </div>
                </div>
                <Link to="/products">
                  <Button className="w-fit bg-gradient-primary hover:opacity-90">
                    {t('products_page.view_all')}
                  </Button>
                </Link>
              </div>

              <div className="relative min-h-[300px]">
                <img
                  src={mushroomProductsImage}
                  alt="Mushroom Products"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-agri-primary/10"></div>
              </div>
            </div>
          </div>

          {/* Quality Assurance Features */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {qualityAssuranceFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Product Categories Tabs */}
          <Tabs defaultValue="all" className="w-full mb-16">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="fresh">Fresh Mushrooms</TabsTrigger>
              <TabsTrigger value="processed">Processed Products</TabsTrigger>
              <TabsTrigger value="fertilizers">Organic Fertilizers</TabsTrigger>
            </TabsList>

            {/* All Products Tab - Show 4 representative products */}
            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Fresh Mushroom Representative */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=200&fit=crop&crop=center"
                        alt="Fresh White Button Mushrooms"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge variant="secondary" className="absolute top-4 right-4 bg-green-500 text-white">
                      Fresh
                    </Badge>
                    <CardTitle className="text-lg">Fresh White Button Mushrooms</CardTitle>
                    <div className="text-center">
                      <Badge variant="outline" className="text-green-600 font-bold">
                        ₹350-400/kg
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Premium fresh mushrooms with AI-monitored growth conditions. Perfect for commercial kitchens and retail.
                    </p>
                    <ul className="space-y-2">
                      <li className="text-xs flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        AI-controlled growing environment
                      </li>
                      <li className="text-xs flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        Daily harvest with smart tracking
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Processed Product Representative */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=300&h=200&fit=crop&crop=center"
                        alt="Shiitake Mushrooms"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge variant="secondary" className="absolute top-4 right-4 bg-orange-500 text-white">
                      Premium
                    </Badge>
                    <CardTitle className="text-lg">Shiitake Mushrooms</CardTitle>
                    <div className="text-center">
                      <Badge variant="outline" className="text-green-600 font-bold">
                        ₹500-600/kg
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Premium shiitake mushrooms grown using advanced controlled environment agriculture technology.
                    </p>
                    <ul className="space-y-2">
                      <li className="text-xs flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        Controlled environment cultivation
                      </li>
                      <li className="text-xs flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        Advanced nutrient monitoring
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Processed Products Representative */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center"
                        alt="Mushroom Powder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge variant="secondary" className="absolute top-4 right-4 bg-purple-500 text-white">
                      Processed
                    </Badge>
                    <CardTitle className="text-lg">Mushroom Powder</CardTitle>
                    <div className="text-center">
                      <Badge variant="outline" className="text-green-600 font-bold">
                        ₹800-1000/kg
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Dehydrated mushroom powder with smart packaging technology and IoT-enabled quality tracking.
                    </p>
                    <ul className="space-y-2">
                      <li className="text-xs flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        Data-driven processing
                      </li>
                      <li className="text-xs flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        AI quality control
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Organic Fertilizer Representative */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop&crop=center"
                        alt="Organic Fertilizer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge variant="secondary" className="absolute top-4 right-4 bg-emerald-500 text-white">
                      Eco-Friendly
                    </Badge>
                    <CardTitle className="text-lg">Organic Fertilizer</CardTitle>
                    <div className="text-center">
                      <Badge variant="outline" className="text-green-600 font-bold">
                        ₹80-120/kg
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Premium organic fertilizer with algorithm-optimized NPK ratios using AI soil analysis technology.
                    </p>
                    <ul className="space-y-2">
                      <li className="text-xs flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        Algorithm-optimized NPK
                      </li>
                      <li className="text-xs flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        AI soil analysis
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>



            <TabsContent value="fresh">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {freshMushrooms.map((product, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                          <CardHeader>
                            <div className="relative mb-4">
                              {/* Product Image */}
                              <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                                <img 
                                  src={product.image} 
                                  alt={product.title}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              
                              <Badge variant="secondary" className="absolute -top-2 -right-2 bg-agri-secondary text-white animate-pulse">
                                {product.badge}
                              </Badge>
                            </div>
                            <CardTitle className="text-lg text-center">{product.title}</CardTitle>
                            <div className="text-center">
                              <Badge variant="outline" className="text-green-600 font-bold">
                                {product.price}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                            
                            <div className="space-y-3 mb-4">
                              <div className="flex justify-between text-xs">
                                <span className="font-semibold">Availability:</span>
                                <span>{product.availability}</span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="font-semibold">Shelf Life:</span>
                                <span>{product.shelfLife}</span>
                              </div>
                            </div>

                            <div className="mb-4">
                              <h5 className="text-xs font-semibold mb-2">Quality Highlights:</h5>
                              <div className="flex flex-wrap gap-1">
                                {product.nutritionalHighlights.map((highlight, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {highlight}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <ul className="space-y-2">
                              {product.features.slice(0, 2).map((feature, idx) => (
                                <li key={idx} className="text-xs flex items-start">
                                  <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="processed">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processedMushrooms.map((product, index) => (
                  <ScrollReveal 
                    key={index} 
                    direction={index % 2 === 0 ? 'left' : 'right'} 
                    className={`stagger-item`}
                  >
                    <GlowCard className="hover-lift breathing">
                      <ShimmerCard>
                        <Card className="border-0 bg-transparent h-full">
                          <CardHeader>
                            <div className="relative mb-4">
                              {/* Product Image */}
                              <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                                <img 
                                  src={product.image} 
                                  alt={product.title}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              
                              <Badge variant="secondary" className="absolute -top-2 -right-2 bg-agri-secondary text-white animate-pulse">
                                {product.badge}
                              </Badge>
                            </div>
                            <CardTitle className="text-lg text-center">
                              <GradientText>{product.title}</GradientText>
                            </CardTitle>
                      <div className="text-center">
                        <Badge variant="outline" className="text-agri-primary font-bold">
                          {product.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                      
                      <div className="flex justify-between text-xs mb-4">
                        <span className="font-semibold">Shelf Life:</span>
                        <span>{product.shelfLife}</span>
                      </div>

                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-xs flex items-start">
                            <CheckCircle className="w-3 h-3 text-agri-primary mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                        </Card>
                      </ShimmerCard>
                    </GlowCard>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fertilizers">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {organicFertilizers.map((product, index) => (
                  <Card key={index} className="hover:shadow-medium transition-all duration-300 group hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg text-center">{product.title}</CardTitle>
                      <div className="text-center">
                        <Badge variant="outline" className="text-agri-primary font-bold">
                          {product.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-xs">
                          <span className="font-semibold">Availability:</span>
                          <span>{product.availability}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="font-semibold">Shelf Life:</span>
                          <span>{product.shelfLife}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-xs font-semibold mb-2">Key Benefits:</h5>
                        <div className="flex flex-wrap gap-1">
                          {product.nutritionalHighlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-xs flex items-start">
                            <CheckCircle className="w-3 h-3 text-agri-primary mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('products_page.cta_title')}
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              {t('products_page.cta_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-agri-primary hover:bg-white transform transition-transform duration-300 hover:scale-105"
              >
                {t('products_page.cta_quote')}
              </Button>
              <a href="/catalog.pdf" download>
                <Button
                  size="lg"
                  className="bg-white text-agri-primary hover:bg-white transform transition-transform duration-300 hover:scale-105"
                >
                  {t('products_page.cta_catalog')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
