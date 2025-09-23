import { Download, Search, Filter, Grid, List, Eye, Heart, ShoppingCart, Package, Truck, Star, Award, Leaf, Phone, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";
import CatalogDownload from './CatalogDownload';

const Catalog = () => {
  const { t } = useTranslation();
  const { trackSearch, trackButtonClick, trackDownload } = useAnalytics();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const catalogData = {
    freshMushrooms: [
      {
        id: "OM001",
        name: "Premium Oyster Mushrooms",
        category: "Fresh Mushrooms",
        price: "₹120-150/kg",
        bulkPrice: "₹100-120/kg",
        image: "/src/assets/mushroom-products.jpg",
        description: "Fresh, organic oyster mushrooms grown using sustainable farming practices",
        specifications: {
          shelfLife: "7-10 days (refrigerated)",
          packaging: "500g, 1kg, 2kg packs",
          certifications: ["Organic", "FSSAI"],
          origin: "SS TechFarming Facility"
        },
        nutritional: {
          protein: "3.3g/100g",
          fiber: "2.3g/100g",
          calories: "33 kcal/100g",
          minerals: "High in Potassium, Phosphorus"
        },
        availability: "Year-round",
        rating: 4.8,
        reviews: 145
      },
      {
        id: "BM001",
        name: "Fresh Button Mushrooms",
        category: "Fresh Mushrooms",
        price: "₹80-100/kg",
        bulkPrice: "₹70-85/kg",
        image: "/src/assets/mushroom-products.jpg",
        description: "Classic white button mushrooms, perfect for culinary applications",
        specifications: {
          shelfLife: "5-7 days (refrigerated)",
          packaging: "250g, 500g, 1kg packs",
          certifications: ["FSSAI", "GAP Certified"],
          origin: "SS TechFarming Facility"
        },
        nutritional: {
          protein: "3.1g/100g",
          fiber: "1.0g/100g",
          calories: "22 kcal/100g",
          minerals: "Rich in Selenium, Copper"
        },
        availability: "Year-round",
        rating: 4.6,
        reviews: 98
      },
      {
        id: "SM001",
        name: "Shiitake Mushrooms",
        category: "Fresh Mushrooms",
        price: "₹350-400/kg",
        bulkPrice: "₹320-350/kg",
        image: "/src/assets/mushroom-products.jpg",
        description: "Premium shiitake mushrooms with rich umami flavor",
        specifications: {
          shelfLife: "10-12 days (refrigerated)",
          packaging: "250g, 500g premium packs",
          certifications: ["Organic", "Export Quality"],
          origin: "Climate-controlled facility"
        },
        nutritional: {
          protein: "2.2g/100g",
          fiber: "2.5g/100g",
          calories: "34 kcal/100g",
          minerals: "High in B-vitamins, Zinc"
        },
        availability: "Seasonal (Oct-Mar)",
        rating: 4.9,
        reviews: 67
      }
    ],
    processedProducts: [
      {
        id: "DM001",
        name: "Dried Mushroom Mix",
        category: "Processed Products",
        price: "₹800-1200/kg",
        bulkPrice: "₹700-900/kg",
        image: "/src/assets/mushroom-products.jpg",
        description: "Premium blend of dried oyster, shiitake, and button mushrooms",
        specifications: {
          shelfLife: "12 months (sealed)",
          packaging: "100g, 250g, 500g, 1kg",
          certifications: ["FSSAI", "Export Grade"],
          processing: "Solar dried, no additives"
        },
        nutritional: {
          protein: "20-25g/100g",
          fiber: "15-20g/100g",
          calories: "280 kcal/100g",
          minerals: "Concentrated nutrients"
        },
        availability: "Year-round",
        rating: 4.7,
        reviews: 89
      },
      {
        id: "MP001",
        name: "Mushroom Powder",
        category: "Processed Products",
        price: "₹1500-2000/kg",
        bulkPrice: "₹1400-1600/kg",
        image: "/src/assets/mushroom-products.jpg",
        description: "Fine mushroom powder for seasoning and food fortification",
        specifications: {
          shelfLife: "18 months (sealed)",
          packaging: "50g, 100g, 250g, 500g",
          certifications: ["FSSAI", "HACCP"],
          processing: "Spray dried technology"
        },
        nutritional: {
          protein: "35-40g/100g",
          fiber: "25-30g/100g",
          calories: "350 kcal/100g",
          minerals: "High concentration"
        },
        availability: "Year-round",
        rating: 4.8,
        reviews: 54
      },
      {
        id: "CM001",
        name: "Canned Mushrooms",
        category: "Processed Products",
        price: "₹150-200/can",
        bulkPrice: "₹140-160/can",
        image: "/src/assets/mushroom-products.jpg",
        description: "Ready-to-use canned mushrooms in natural brine",
        specifications: {
          shelfLife: "24 months (unopened)",
          packaging: "400g, 800g cans",
          certifications: ["FSSAI", "BRC"],
          processing: "Thermal sterilization"
        },
        nutritional: {
          protein: "2.5g/100g",
          fiber: "2.0g/100g",
          calories: "25 kcal/100g",
          minerals: "Preserved nutrients"
        },
        availability: "Year-round",
        rating: 4.5,
        reviews: 112
      }
    ],
    fertilizers: [
      {
        id: "SMS001",
        name: "Spent Mushroom Substrate",
        category: "Organic Fertilizers",
        price: "₹15-25/kg",
        bulkPrice: "₹12-18/kg",
        image: "/src/assets/mushroom-products.jpg",
        description: "Premium organic compost from mushroom cultivation",
        specifications: {
          shelfLife: "No expiry (proper storage)",
          packaging: "5kg, 10kg, 25kg, 50kg bags",
          certifications: ["Organic Input", "FCO"],
          composition: "Rich in NPK and micronutrients"
        },
        benefits: {
          soilHealth: "Improves soil structure",
          waterRetention: "Enhances moisture retention",
          microbialActivity: "Promotes beneficial microbes",
          slowRelease: "Gradual nutrient release"
        },
        availability: "Year-round",
        rating: 4.9,
        reviews: 203
      },
      {
        id: "VC001",
        name: "Vermicompost Premium",
        category: "Organic Fertilizers",
        price: "₹20-30/kg",
        bulkPrice: "₹18-25/kg",
        image: "/src/assets/mushroom-products.jpg",
        description: "High-quality vermicompost enriched with mushroom substrate",
        specifications: {
          shelfLife: "No expiry (proper storage)",
          packaging: "5kg, 10kg, 25kg, 50kg bags",
          certifications: ["Organic", "FCO Certified"],
          composition: "Earthworm castings + SMS"
        },
        benefits: {
          plantGrowth: "Enhances plant growth",
          diseaseResistance: "Improves disease resistance",
          yieldIncrease: "20-30% yield improvement",
          soilFertility: "Long-term soil fertility"
        },
        availability: "Year-round",
        rating: 4.8,
        reviews: 156
      },
      {
        id: "LBF001",
        name: "Liquid Bio-Fertilizer",
        category: "Bio-Fertilizers",
        price: "₹150-200/L",
        bulkPrice: "₹130-180/L",
        image: "/src/assets/mushroom-products.jpg",
        description: "Concentrated liquid fertilizer with beneficial microorganisms",
        specifications: {
          shelfLife: "12 months (refrigerated)",
          packaging: "500ml, 1L, 5L, 20L containers",
          certifications: ["FSSAI", "Organic Input"],
          dilution: "1:100 ratio for application"
        },
        benefits: {
          quickAction: "Fast nutrient absorption",
          rootDevelopment: "Enhanced root growth",
          stressResistance: "Improves stress tolerance",
          naturalGrowth: "Chemical-free nutrition"
        },
        availability: "Year-round",
        rating: 4.7,
        reviews: 78
      }
    ]
  };

  const allProducts = [
    ...catalogData.freshMushrooms,
    ...catalogData.processedProducts,
    ...catalogData.fertilizers
  ];

  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === 'all' || 
      (selectedCategory === 'fresh' && product.category === 'Fresh Mushrooms') ||
      (selectedCategory === 'processed' && product.category === 'Processed Products') ||
      (selectedCategory === 'fertilizers' && (product.category === 'Organic Fertilizers' || product.category === 'Bio-Fertilizers'));
    
    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  const ProductCard = ({ product, isListView = false }: { product: any, isListView?: boolean }) => (
    <Card className={`hover:shadow-lg transition-shadow duration-300 ${isListView ? 'flex' : ''}`}>
      <div className={isListView ? 'w-48 flex-shrink-0' : ''}>
        <div className="aspect-video bg-gradient-to-r from-agri-primary/20 to-agri-growth/20 rounded-t-lg relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Package className="w-12 h-12 text-agri-primary/60" />
          </div>
          <div className="absolute top-2 right-2">
            <Badge variant="secondary">{product.id}</Badge>
          </div>
          <div className="absolute top-2 left-2">
            <div className="flex items-center bg-white/90 rounded px-2 py-1">
              <Star className="w-3 h-3 text-yellow-500 mr-1" />
              <span className="text-xs font-semibold">{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <Badge variant="outline" className="mt-1">{product.category}</Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-bold text-agri-primary">{product.price}</div>
                <div className="text-sm text-muted-foreground">Bulk: {product.bulkPrice}</div>
              </div>
              <Badge variant={product.availability === 'Year-round' ? 'default' : 'secondary'}>
                {product.availability}
              </Badge>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <Eye className="w-4 h-4 mr-1" />
              {product.reviews} reviews
            </div>
            
            <div className="flex gap-2 pt-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-1" />
                    Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{product.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="aspect-video bg-gradient-to-r from-agri-primary/20 to-agri-growth/20 rounded-lg flex items-center justify-center">
                      <Package className="w-16 h-16 text-agri-primary/60" />
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Description</h4>
                      <p className="text-muted-foreground">{product.description}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Specifications</h4>
                        <ul className="space-y-1 text-sm">
                          {Object.entries(product.specifications || {}).map(([key, value]) => (
                            <li key={key}>
                              <span className="capitalize font-medium">{key.replace(/([A-Z])/g, ' $1')}:</span> {value as string}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {product.nutritional && (
                        <div>
                          <h4 className="font-semibold mb-2">Nutritional Info</h4>
                          <ul className="space-y-1 text-sm">
                            {Object.entries(product.nutritional).map(([key, value]) => (
                              <li key={key}>
                                <span className="capitalize font-medium">{key}:</span> {value as string}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {product.benefits && (
                        <div>
                          <h4 className="font-semibold mb-2">Benefits</h4>
                          <ul className="space-y-1 text-sm">
                            {Object.entries(product.benefits).map(([key, value]) => (
                              <li key={key}>
                                <span className="capitalize font-medium">{key.replace(/([A-Z])/g, ' $1')}:</span> {value as string}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <Link to="/request-quote" className="flex-1">
                        <Button className="w-full bg-gradient-primary">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Request Quote
                        </Button>
                      </Link>
                      <Button variant="outline">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Link to="/request-quote" className="flex-1">
                <Button size="sm" className="w-full bg-gradient-primary">
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  Quote
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );

  return (
    <section id="catalog" className="py-20 bg-gradient-to-b from-background to-agri-growth/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Product Catalog
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive catalog of premium mushrooms, processed products, and organic fertilizers. 
              Download our complete catalog or browse products online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/catalog.pdf" download onClick={() => trackDownload('catalog.pdf', 'pdf')}>
                <Button className="bg-gradient-primary hover:opacity-90" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Full Catalog (PDF)
                </Button>
              </a>
              <Link to="/request-quote">
                <Button variant="outline" size="lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Request Custom Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSearchTerm(value);
                      if (value.length > 2) {
                        trackSearch(value, filteredProducts.length);
                      }
                    }}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex gap-2 items-center">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="all">All Categories</option>
                  <option value="fresh">Fresh Mushrooms</option>
                  <option value="processed">Processed Products</option>
                  <option value="fertilizers">Fertilizers</option>
                </select>
                
                <div className="flex border border-input rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} of {allProducts.length} products
            </div>
          </div>

          {/* Product Grid/List */}
          <div className={viewMode === 'grid' ? 
            'grid gap-6 md:grid-cols-2 lg:grid-cols-3' : 
            'space-y-4'
          }>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} isListView={viewMode === 'list'} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Products Found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Featured Categories */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Product Categories
            </h2>
            
            <Tabs defaultValue="fresh-mushrooms" className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-4xl mx-auto mb-8">
                <TabsTrigger value="fresh-mushrooms">Fresh Mushrooms</TabsTrigger>
                <TabsTrigger value="processed">Processed Products</TabsTrigger>
                <TabsTrigger value="fertilizers">Fertilizers</TabsTrigger>
                <TabsTrigger value="catalog-download" className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Download Catalog</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="fresh-mushrooms">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catalogData.freshMushrooms.slice(0, 3).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="processed">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catalogData.processedProducts.slice(0, 3).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="fertilizers">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catalogData.fertilizers.slice(0, 3).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="catalog-download">
                <div className="max-w-4xl mx-auto">
                  <CatalogDownload />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Quality Assurance */}
          <div className="mt-20 bg-agri-growth/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Quality Assurance
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                All our products meet the highest quality standards with proper certifications
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-lg p-6">
                <Award className="w-8 h-8 text-agri-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">FSSAI Certified</h4>
                <p className="text-sm text-muted-foreground">Food safety standards compliance</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <Leaf className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Organic Certified</h4>
                <p className="text-sm text-muted-foreground">Chemical-free organic products</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <Package className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Export Quality</h4>
                <p className="text-sm text-muted-foreground">International standard packaging</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <Truck className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Fresh Delivery</h4>
                <p className="text-sm text-muted-foreground">Cold chain logistics</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 bg-gradient-primary rounded-2xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Order?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact our team for custom quotes, bulk orders, or product samples. 
              We provide competitive pricing with guaranteed quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" variant="secondary">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Request Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-agri-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;