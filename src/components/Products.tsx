import { Package, Recycle, ShoppingCart, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import mushroomProductsImage from "@/assets/mushroom-products.jpg";

const Products = () => {
  const products = [
    {
      icon: Package,
      title: "Fresh White Button Mushrooms",
      description: "Premium quality fresh mushrooms grown in controlled environments with optimal nutrition and taste.",
      features: ["Organic certification", "Fresh daily harvest", "Premium packaging"],
      badge: "Fresh"
    },
    {
      icon: ShoppingCart,
      title: "Canned Mushroom Products",
      description: "Processed and preserved mushroom products with extended shelf life for commercial and retail markets.",
      features: ["Long shelf life", "Retail packaging", "Bulk options"],
      badge: "Processed"
    },
    {
      icon: Recycle,
      title: "Organic Fertilizer",
      description: "High-quality organic fertilizer made from used mushroom compost, rich in nutrients for soil health.",
      features: ["100% organic", "Rich in NPK", "Soil health improvement"],
      badge: "Eco-Friendly"
    },
    {
      icon: Award,
      title: "Value-Added Products",
      description: "Innovative mushroom-based food products including powders, extracts, and specialty preparations.",
      features: ["Health supplements", "Culinary products", "Custom formulations"],
      badge: "Premium"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-agri-growth/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From fresh mushrooms to organic fertilizers, we offer a complete range 
              of high-quality products derived from our sustainable cultivation practices.
            </p>
          </div>

          {/* Hero Product Section */}
          <div className="bg-white rounded-2xl shadow-strong overflow-hidden mb-16">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-agri-primary text-white">
                  Featured Products
                </Badge>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  Complete Mushroom Value Chain
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Experience the full spectrum of our mushroom cultivation expertise. 
                  From spawn to finished products, we maintain the highest quality 
                  standards throughout the entire production process.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-agri-growth/30 rounded-lg p-4">
                    <div className="font-semibold text-agri-soil mb-1">Daily Production</div>
                    <div className="text-2xl font-bold text-agri-primary">500+ kg</div>
                  </div>
                  <div className="bg-agri-growth/30 rounded-lg p-4">
                    <div className="font-semibold text-agri-soil mb-1">Quality Grade</div>
                    <div className="text-2xl font-bold text-agri-primary">Grade A+</div>
                  </div>
                </div>

                <Button className="w-fit bg-gradient-primary hover:opacity-90">
                  View Product Catalog
                </Button>
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

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 group hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="absolute -top-2 -right-2 bg-agri-secondary text-white"
                    >
                      {product.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-xs flex items-center justify-center">
                        <span className="w-2 h-2 bg-agri-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience Premium Quality?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss bulk orders, custom packaging, 
              or distribution partnerships. We're here to meet your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-agri-primary hover:bg-white/90"
              >
                Request Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-agri-primary"
              >
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;