import { Package, Recycle, ShoppingCart, Award, Star, Truck, Shield, Clock, CheckCircle, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import mushroomProductsImage from "@/assets/mushroom-products.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import analytics from '@/lib/analytics';

const Products = () => {
  const { t } = useTranslation();

  const trackProductView = (productName: string, productType: string, price: string) => {
    analytics.trackProductView(productName, productType, price);
  };

  const freshMushrooms = [
    {
      icon: Package,
      title: t('products.spawn_title'),
      description: t('products.spawn_description'),
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
      image: "/src/assets/mushroom-products.jpg"
    },
    {
      icon: Package,
      title: t('products.fresh_title'), 
      description: t('products.fresh_description'),
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
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=250&fit=crop&crop=center"
    }
  ];

  const processedMushrooms = [
    {
      icon: Recycle,
      title: t('products.canned_title'),
      description: t('products.canned_description'),
      price: "₹200-300/can",
      availability: "Always available",
      nutritionalHighlights: ["Ready to Cook", "Long Shelf Life", "Preservative Free"],
      shelfLife: "18 months",
      features: [
        "Premium canned mushrooms",
        "AI quality control",
        "Value-added processing",
        "Bulk packaging available"
      ],
      badge: "Canned",
      image: "/src/assets/mushroom-products.jpg"
      // https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=250&fit=crop&crop=center
    },
    {
      icon: Package,
      title: t('products.value_added_title'),
      description: t('products.value_added_description'),
      price: "₹400-600/pack",
      availability: "Always available", 
      nutritionalHighlights: ["Premium Quality", "Health Benefits", "Ready to Use"],
      shelfLife: "12 months",
      features: [
        "Value-added mushroom products",
        "Smart processing technology", 
        "Nutritional optimization",
        "Custom formulations"
      ],
      badge: "Value Added",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&crop=center"
    }
  ];

  const organicFertilizers = [
    {
      icon: Leaf,
      title: t('products.fertilizer_title'),
      description: t('products.fertilizer_description'),
      price: "₹80-120/kg",
      availability: "Always available",
      nutritionalHighlights: ["Organic Certified", "NPK Balanced", "Soil Health"],
      shelfLife: "Indefinite (proper storage)",
      features: [
        "Algorithm-optimized NPK",
        "AI soil analysis",
        "Quality algorithms",
        "Sustainable production"
      ],
      badge: "Eco-Friendly",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&crop=center"
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-white to-agri-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('products.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Product Categories Tabs */}
        <Tabs defaultValue="all" className="w-full mb-16">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">{t('products.all_products')}</TabsTrigger>
            <TabsTrigger value="fresh">{t('products.fresh_mushrooms')}</TabsTrigger>
            <TabsTrigger value="processed">{t('products.processed_products')}</TabsTrigger>
            <TabsTrigger value="fertilizers">{t('products.organic_fertilizers')}</TabsTrigger>
          </TabsList>

          {/* All Products Tab - Show 4 representative products */}
          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* White Button Mushroom Spawn */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1505497531331-ecab4f042a8c?w=400&h=250&fit=crop&crop=center"
                      alt="White Button Mushroom Spawn"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge variant="secondary" className="absolute top-4 right-4 bg-blue-500 text-white">
                    Lab Grade
                  </Badge>
                  <CardTitle className="text-lg">{t('products.spawn_title')}</CardTitle>
                  <div className="text-center">
                    <Badge variant="outline" className="text-green-600 font-bold">
                      ₹120-150/kg
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t('products.spawn_description')}
                  </p>
                  <ul className="space-y-2">
                    <li className="text-xs flex items-start">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      Laboratory tested and certified
                    </li>
                    <li className="text-xs flex items-start">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      AI-powered production monitoring
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Fresh White Button Mushrooms */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=250&fit=crop&crop=center"
                      alt="Fresh White Button Mushrooms"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge variant="secondary" className="absolute top-4 right-4 bg-green-500 text-white">
                    Fresh
                  </Badge>
                  <CardTitle className="text-lg">{t('products.fresh_title')}</CardTitle>
                  <div className="text-center">
                    <Badge variant="outline" className="text-green-600 font-bold">
                      ₹350-400/kg
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t('products.fresh_description')}
                  </p>
                  <ul className="space-y-2">
                    <li className="text-xs flex items-start">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      AI-controlled growing environment
                    </li>
                    <li className="text-xs flex items-start">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      Fresh daily harvest with smart tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Canned Mushrooms */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=250&fit=crop&crop=center"
                      alt="Canned Mushrooms"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge variant="secondary" className="absolute top-4 right-4 bg-purple-500 text-white">
                    Canned
                  </Badge>
                  <CardTitle className="text-lg">{t('products.canned_title')}</CardTitle>
                  <div className="text-center">
                    <Badge variant="outline" className="text-green-600 font-bold">
                      ₹200-300/can
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t('products.canned_description')}
                  </p>
                  <ul className="space-y-2">
                    <li className="text-xs flex items-start">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      Premium canned mushrooms
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

          {/* Fresh Mushrooms Tab */}
          <TabsContent value="fresh">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freshMushrooms.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-100">
                      <img 
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge variant="secondary" className="absolute top-4 right-4 bg-green-500 text-white">
                      {product.badge}
                    </Badge>
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                    <div className="text-center">
                      <Badge variant="outline" className="text-green-600 font-bold">
                        {product.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    
                    <div className="space-y-2 mb-4">
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
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Processed Products Tab */}
          <TabsContent value="processed">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processedMushrooms.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-100">
                      <img 
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge variant="secondary" className="absolute top-4 right-4 bg-purple-500 text-white">
                      {product.badge}
                    </Badge>
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                    <div className="text-center">
                      <Badge variant="outline" className="text-green-600 font-bold">
                        {product.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    
                    <div className="space-y-2 mb-4">
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
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Organic Fertilizers Tab */}
          <TabsContent value="fertilizers">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {organicFertilizers.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-100">
                      <img 
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge variant="secondary" className="absolute top-4 right-4 bg-emerald-500 text-white">
                      {product.badge}
                    </Badge>
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                    <div className="text-center">
                      <Badge variant="outline" className="text-green-600 font-bold">
                        {product.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    
                    <div className="space-y-2 mb-4">
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
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-agri-primary to-agri-secondary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">{t('products.cta_title')}</h3>
          <p className="text-xl mb-8 opacity-90">
            {t('products.cta_description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-quote">
              <Button size="lg" className="bg-gradient-to-r from-agri-primary to-agri-secondary text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                <ShoppingCart className="w-5 h-5 mr-2" />
                {t('navigation.request_quote') || 'Request Quote'}
              </Button>
            </Link>
            <Link to="/catalog">
              <Button size="lg" variant="outline" className="border-2 border-white text-black">
                <Package className="w-5 h-5 mr-2" />
                {t('products.cta_catalog')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;