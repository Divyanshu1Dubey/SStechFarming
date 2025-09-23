// Enhanced product data with comprehensive specifications
export interface ProductSpecification {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: {
    retail: string;
    bulk: string;
    currency: string;
  };
  availability: {
    status: 'available' | 'seasonal' | 'out_of_stock';
    seasonality?: string;
    restockDate?: string;
  };
  images: {
    primary: string;
    gallery: string[];
    thumbnail: string;
  };
  description: {
    short: string;
    detailed: string;
    benefits: string[];
    uses: string[];
  };
  specifications: {
    weight?: string;
    dimensions?: string;
    shelfLife: string;
    packaging: string[];
    storageConditions: string;
    origin: string;
    certifications: string[];
    processingMethod?: string;
    composition?: Record<string, string>;
  };
  nutritional?: {
    calories: string;
    protein: string;
    fiber: string;
    minerals: string[];
    vitamins: string[];
    nutritionFacts: Record<string, string>;
  };
  qualityMetrics: {
    rating: number;
    reviews: number;
    qualityScore: number;
    certificationLevel: 'standard' | 'premium' | 'organic' | 'export';
  };
  cultivation?: {
    growingMedium: string;
    harvestTime: string;
    yieldPerSquareFoot: string;
    temperatureRange: string;
    humidityRange: string;
    growingDifficulty: 'easy' | 'moderate' | 'challenging';
  };
  businessInfo: {
    minimumOrder: string;
    bulkDiscounts: Record<string, string>;
    leadTime: string;
    customizationAvailable: boolean;
    sampleAvailable: boolean;
  };
  sustainability: {
    carbonFootprint: string;
    waterUsage: string;
    organicContent: number;
    locallySourced: boolean;
    sustainabilityScore: number;
  };
  tags: string[];
  relatedProducts: string[];
  seasonalVariations?: Record<string, any>;
}

export const enhancedProductDatabase: ProductSpecification[] = [
  // Fresh Mushrooms
  {
    id: "OM001",
    name: "Premium Oyster Mushrooms",
    category: "Fresh Mushrooms",
    subcategory: "Gourmet Varieties",
    price: {
      retail: "₹120-150/kg",
      bulk: "₹100-120/kg",
      currency: "INR"
    },
    availability: {
      status: "available",
      seasonality: "Year-round cultivation"
    },
    images: {
      primary: "/src/assets/mushroom-products.jpg",
      gallery: ["/src/assets/mushroom-products.jpg"],
      thumbnail: "/src/assets/mushroom-products.jpg"
    },
    description: {
      short: "Fresh, organic oyster mushrooms grown using sustainable farming practices",
      detailed: "Our Premium Oyster Mushrooms are cultivated in climate-controlled environments using organic substrates. Known for their delicate texture and mild, slightly sweet flavor, these mushrooms are perfect for various culinary applications. Rich in protein, vitamins, and minerals, they offer exceptional nutritional value while maintaining the highest quality standards.",
      benefits: [
        "High in protein and essential amino acids",
        "Rich in B-vitamins and potassium",
        "Low in calories and fat",
        "Contains antioxidants and beta-glucans",
        "Supports immune system health"
      ],
      uses: [
        "Stir-fries and sautéed dishes",
        "Soups and broths",
        "Pizza toppings",
        "Pasta preparations",
        "Grilled or roasted side dishes"
      ]
    },
    specifications: {
      shelfLife: "7-10 days (refrigerated at 2-4°C)",
      packaging: ["500g biodegradable trays", "1kg bulk packs", "2kg commercial boxes"],
      storageConditions: "Store in refrigerator, high humidity environment",
      origin: "SS TechFarming Climate-Controlled Facility",
      certifications: ["Organic India Certified", "FSSAI License", "GAP Certified"],
      processingMethod: "Hand-harvested, minimal processing",
      composition: {
        "Moisture Content": "85-90%",
        "Dry Matter": "10-15%",
        "Substrate": "100% Organic Rice Straw"
      }
    },
    nutritional: {
      calories: "33 kcal/100g",
      protein: "3.3g/100g",
      fiber: "2.3g/100g",
      minerals: ["Potassium", "Phosphorus", "Copper", "Selenium"],
      vitamins: ["B1", "B2", "B3", "B5", "B6"],
      nutritionFacts: {
        "Carbohydrates": "6.1g",
        "Fat": "0.4g",
        "Sodium": "9mg",
        "Iron": "1.3mg",
        "Calcium": "3mg"
      }
    },
    qualityMetrics: {
      rating: 4.8,
      reviews: 145,
      qualityScore: 9.2,
      certificationLevel: "organic"
    },
    cultivation: {
      growingMedium: "Sterilized rice straw substrate",
      harvestTime: "14-18 days from inoculation",
      yieldPerSquareFoot: "0.8-1.2 kg",
      temperatureRange: "20-25°C",
      humidityRange: "85-95%",
      growingDifficulty: "moderate"
    },
    businessInfo: {
      minimumOrder: "5kg",
      bulkDiscounts: {
        "25kg+": "5% discount",
        "50kg+": "10% discount",
        "100kg+": "15% discount"
      },
      leadTime: "24-48 hours",
      customizationAvailable: true,
      sampleAvailable: true
    },
    sustainability: {
      carbonFootprint: "0.8 kg CO2/kg product",
      waterUsage: "2.5L per kg",
      organicContent: 100,
      locallySourced: true,
      sustainabilityScore: 9.5
    },
    tags: ["organic", "fresh", "gourmet", "high-protein", "sustainable"],
    relatedProducts: ["BM001", "SM001", "DM001"]
  },
  
  {
    id: "BM001",
    name: "Fresh Button Mushrooms",
    category: "Fresh Mushrooms",
    subcategory: "Commercial Varieties",
    price: {
      retail: "₹80-100/kg",
      bulk: "₹70-85/kg",
      currency: "INR"
    },
    availability: {
      status: "available",
      seasonality: "Year-round cultivation"
    },
    images: {
      primary: "/src/assets/mushroom-products.jpg",
      gallery: ["/src/assets/mushroom-products.jpg"],
      thumbnail: "/src/assets/mushroom-products.jpg"
    },
    description: {
      short: "Classic white button mushrooms, perfect for everyday culinary applications",
      detailed: "Our Fresh Button Mushrooms are the most popular variety, known for their mild flavor and versatile texture. Grown in controlled environments using traditional composting methods, these mushrooms offer consistent quality and are perfect for both home cooking and commercial food preparation.",
      benefits: [
        "Rich in selenium and antioxidants",
        "Low calorie, nutrient-dense",
        "Good source of riboflavin",
        "Contains ergothioneine",
        "Supports cardiovascular health"
      ],
      uses: [
        "Raw in salads",
        "Cooked in curries",
        "Pizza and sandwich toppings",
        "Soups and gravies",
        "Stuffed mushroom preparations"
      ]
    },
    specifications: {
      shelfLife: "5-7 days (refrigerated at 2-4°C)",
      packaging: ["250g consumer packs", "500g family packs", "1kg bulk boxes"],
      storageConditions: "Cool, dry place with good ventilation",
      origin: "SS TechFarming Production Unit",
      certifications: ["FSSAI Certified", "GAP Certified", "ISO 22000"],
      processingMethod: "Traditional cultivation, hand-selected",
      composition: {
        "Moisture Content": "90-92%",
        "Dry Matter": "8-10%",
        "Substrate": "Composted Agricultural Waste"
      }
    },
    nutritional: {
      calories: "22 kcal/100g",
      protein: "3.1g/100g",
      fiber: "1.0g/100g",
      minerals: ["Selenium", "Copper", "Potassium", "Phosphorus"],
      vitamins: ["B2", "B3", "B5", "D2"],
      nutritionFacts: {
        "Carbohydrates": "3.3g",
        "Fat": "0.3g",
        "Sodium": "5mg",
        "Iron": "0.5mg",
        "Calcium": "3mg"
      }
    },
    qualityMetrics: {
      rating: 4.6,
      reviews: 98,
      qualityScore: 8.8,
      certificationLevel: "standard"
    },
    cultivation: {
      growingMedium: "Traditional compost substrate",
      harvestTime: "21-28 days from spawning",
      yieldPerSquareFoot: "1.0-1.5 kg",
      temperatureRange: "16-18°C",
      humidityRange: "80-90%",
      growingDifficulty: "easy"
    },
    businessInfo: {
      minimumOrder: "10kg",
      bulkDiscounts: {
        "50kg+": "8% discount",
        "100kg+": "12% discount",
        "200kg+": "18% discount"
      },
      leadTime: "12-24 hours",
      customizationAvailable: false,
      sampleAvailable: true
    },
    sustainability: {
      carbonFootprint: "0.6 kg CO2/kg product",
      waterUsage: "3.2L per kg",
      organicContent: 75,
      locallySourced: true,
      sustainabilityScore: 8.2
    },
    tags: ["fresh", "commercial", "versatile", "affordable", "traditional"],
    relatedProducts: ["OM001", "SM001", "MP001"]
  },

  // Processed Products
  {
    id: "DM001",
    name: "Premium Dried Mushroom Mix",
    category: "Processed Products",
    subcategory: "Dried Products",
    price: {
      retail: "₹800-1200/kg",
      bulk: "₹700-900/kg",
      currency: "INR"
    },
    availability: {
      status: "available",
      seasonality: "Year-round production"
    },
    images: {
      primary: "/src/assets/mushroom-products.jpg",
      gallery: ["/src/assets/mushroom-products.jpg"],
      thumbnail: "/src/assets/mushroom-products.jpg"
    },
    description: {
      short: "Premium blend of dried oyster, shiitake, and button mushrooms",
      detailed: "Our Premium Dried Mushroom Mix combines the best of three mushroom varieties - oyster, shiitake, and button mushrooms. Using advanced solar-drying technology, we preserve the natural flavors and nutritional content while extending shelf life. This versatile product is perfect for soups, stews, and seasoning applications.",
      benefits: [
        "Concentrated flavor and nutrients",
        "Long shelf life without preservatives",
        "Rich in umami compounds",
        "High protein concentration",
        "Convenient storage and use"
      ],
      uses: [
        "Soup base and broths",
        "Seasoning powder",
        "Rehydrated for cooking",
        "Tea and health drinks",
        "Food manufacturing ingredient"
      ]
    },
    specifications: {
      shelfLife: "12 months (sealed, dry conditions)",
      packaging: ["100g retail pouches", "250g family packs", "500g bulk bags", "1kg commercial units"],
      storageConditions: "Cool, dry place, airtight containers",
      origin: "SS TechFarming Processing Unit",
      certifications: ["FSSAI Certified", "Export Quality", "HACCP"],
      processingMethod: "Solar drying, no additives or preservatives",
      composition: {
        "Moisture Content": "8-10%",
        "Oyster Mushrooms": "40%",
        "Shiitake Mushrooms": "35%",
        "Button Mushrooms": "25%"
      }
    },
    nutritional: {
      calories: "280 kcal/100g",
      protein: "20-25g/100g",
      fiber: "15-20g/100g",
      minerals: ["Potassium", "Iron", "Selenium", "Zinc"],
      vitamins: ["B-complex", "D2", "Folate"],
      nutritionFacts: {
        "Carbohydrates": "45g",
        "Fat": "2.5g",
        "Sodium": "12mg",
        "Iron": "8.5mg",
        "Calcium": "15mg"
      }
    },
    qualityMetrics: {
      rating: 4.7,
      reviews: 89,
      qualityScore: 9.0,
      certificationLevel: "premium"
    },
    businessInfo: {
      minimumOrder: "1kg",
      bulkDiscounts: {
        "5kg+": "10% discount",
        "10kg+": "15% discount",
        "25kg+": "22% discount"
      },
      leadTime: "2-3 days",
      customizationAvailable: true,
      sampleAvailable: true
    },
    sustainability: {
      carbonFootprint: "1.2 kg CO2/kg product",
      waterUsage: "0.5L per kg (solar drying)",
      organicContent: 85,
      locallySourced: true,
      sustainabilityScore: 8.8
    },
    tags: ["dried", "premium", "multi-variety", "long-shelf-life", "export-quality"],
    relatedProducts: ["MP001", "CM001", "OM001"]
  },

  // Organic Fertilizers
  {
    id: "SMS001",
    name: "Spent Mushroom Substrate Premium",
    category: "Organic Fertilizers",
    subcategory: "Soil Amendments",
    price: {
      retail: "₹15-25/kg",
      bulk: "₹12-18/kg",
      currency: "INR"
    },
    availability: {
      status: "available",
      seasonality: "Continuous production"
    },
    images: {
      primary: "/src/assets/mushroom-products.jpg",
      gallery: ["/src/assets/mushroom-products.jpg"],
      thumbnail: "/src/assets/mushroom-products.jpg"
    },
    description: {
      short: "Premium organic compost from mushroom cultivation waste",
      detailed: "Our Spent Mushroom Substrate is the byproduct of our mushroom cultivation process, composted and aged to create a nutrient-rich soil amendment. This premium organic fertilizer improves soil structure, water retention, and provides slow-release nutrients for sustainable plant growth.",
      benefits: [
        "Improves soil structure and aeration",
        "Enhances water retention capacity",
        "Provides slow-release nutrition",
        "Promotes beneficial microbial activity",
        "Reduces need for chemical fertilizers"
      ],
      uses: [
        "Garden soil amendment",
        "Potting mix ingredient",
        "Lawn top dressing",
        "Vegetable garden fertilizer",
        "Flower bed enrichment"
      ]
    },
    specifications: {
      shelfLife: "No expiry (proper storage conditions)",
      packaging: ["5kg bags", "10kg sacks", "25kg bulk bags", "50kg commercial units"],
      storageConditions: "Covered, well-ventilated area",
      origin: "SS TechFarming Composting Facility",
      certifications: ["Organic Input Certified", "FCO Approved", "Environmental Clearance"],
      processingMethod: "Aerobic composting, 60-day maturation",
      composition: {
        "Nitrogen (N)": "1.2-1.8%",
        "Phosphorus (P2O5)": "0.8-1.2%",
        "Potassium (K2O)": "0.6-1.0%",
        "Organic Carbon": "25-35%",
        "pH": "6.5-7.5",
        "Moisture": "40-50%"
      }
    },
    qualityMetrics: {
      rating: 4.9,
      reviews: 203,
      qualityScore: 9.5,
      certificationLevel: "organic"
    },
    businessInfo: {
      minimumOrder: "50kg",
      bulkDiscounts: {
        "500kg+": "15% discount",
        "1000kg+": "25% discount",
        "5000kg+": "35% discount"
      },
      leadTime: "1-2 days",
      customizationAvailable: true,
      sampleAvailable: true
    },
    sustainability: {
      carbonFootprint: "0.2 kg CO2/kg product (waste recycling)",
      waterUsage: "0.8L per kg",
      organicContent: 100,
      locallySourced: true,
      sustainabilityScore: 9.8
    },
    tags: ["organic", "sustainable", "soil-amendment", "eco-friendly", "waste-recycling"],
    relatedProducts: ["VC001", "LBF001"],
    seasonalVariations: {
      "summer": { "moisture": "35-40%", "availability": "high" },
      "winter": { "moisture": "45-50%", "availability": "moderate" },
      "monsoon": { "moisture": "50-55%", "availability": "limited" }
    }
  }
];

// Product search and filter functions
export class ProductDataService {
  private products: ProductSpecification[];

  constructor() {
    this.products = enhancedProductDatabase;
  }

  getAllProducts(): ProductSpecification[] {
    return this.products;
  }

  getProductById(id: string): ProductSpecification | undefined {
    return this.products.find(product => product.id === id);
  }

  getProductsByCategory(category: string): ProductSpecification[] {
    return this.products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  }

  searchProducts(query: string): ProductSpecification[] {
    const searchTerm = query.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.short.toLowerCase().includes(searchTerm) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  getAvailableProducts(): ProductSpecification[] {
    return this.products.filter(product => product.availability.status === 'available');
  }

  getOrganicProducts(): ProductSpecification[] {
    return this.products.filter(product => 
      product.sustainability.organicContent >= 75 ||
      product.qualityMetrics.certificationLevel === 'organic'
    );
  }

  getProductsByPriceRange(min: number, max: number): ProductSpecification[] {
    return this.products.filter(product => {
      const price = parseFloat(product.price.retail.replace(/[₹,-]/g, '').split('/')[0]);
      return price >= min && price <= max;
    });
  }

  getRelatedProducts(productId: string): ProductSpecification[] {
    const product = this.getProductById(productId);
    if (!product) return [];
    
    return product.relatedProducts
      .map(id => this.getProductById(id))
      .filter(Boolean) as ProductSpecification[];
  }

  getSustainabilityReport(): Record<string, any> {
    const totalProducts = this.products.length;
    const organicProducts = this.getOrganicProducts().length;
    const avgSustainabilityScore = this.products.reduce((sum, product) => 
      sum + product.sustainability.sustainabilityScore, 0) / totalProducts;
    
    return {
      totalProducts,
      organicProducts,
      organicPercentage: (organicProducts / totalProducts * 100).toFixed(1),
      avgSustainabilityScore: avgSustainabilityScore.toFixed(1),
      locallySourcedProducts: this.products.filter(p => p.sustainability.locallySourced).length
    };
  }
}

export const productDataService = new ProductDataService();