import { Package, Recycle, ShoppingCart, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import mushroomProductsImage from "@/assets/mushroom-products.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t } = useTranslation();

  const products = [
    {
      icon: Package,
      title: t('products_page.product1_title'),
      description: t('products_page.oyster_description'),
      features: [
        t('products_page.oyster_feature1'),
        t('products_page.oyster_feature2'),
        t('products_page.oyster_feature3'),
      ],
      badge: t('products_page.oyster_badge')
    },
    {
      icon: Package,
      title: t('products_page.shiitake_title'),
      description: t('products_page.shiitake_description'),
      features: [
        t('products_page.shiitake_feature1'),
        t('products_page.shiitake_feature2'),
        t('products_page.shiitake_feature3'),
      ],
      badge: t('products_page.shiitake_badge')
    },
    {
      icon: ShoppingCart,
      title: t('products_page.lions_mane_title'),
      description: t('products_page.lions_mane_description'),
      features: [
        t('products_page.lions_mane_feature1'),
        t('products_page.lions_mane_feature2'),
        t('products_page.lions_mane_feature3'),
      ],
      badge: t('products_page.lions_mane_badge')
    },
    {
      icon: Recycle,
      title: t('products_page.fertilizer_title'),
      description: t('products_page.fertilizer_description'),
      features: [
        t('products_page.fertilizer_feature1'),
        t('products_page.fertilizer_feature2'),
        t('products_page.fertilizer_feature3'),
      ],
      badge: t('products_page.fertilizer_badge')
    },
    {
      icon: Recycle,
      title: t('products_page.fertilizer_title'),
      description: t('products_page.fertilizer_description'),
      features: [
        t('products_page.fertilizer_feature1'),
        t('products_page.fertilizer_feature2'),
        t('products_page.fertilizer_feature3'),
      ],
      badge: t('products_page.fertilizer_badge')
    },
    {
      icon: Recycle,
      title: t('products_page.fertilizer_title'),
      description: t('products_page.fertilizer_description'),
      features: [
        t('products_page.fertilizer_feature1'),
        t('products_page.fertilizer_feature2'),
        t('products_page.fertilizer_feature3'),
      ],
      badge: t('products_page.fertilizer_badge')
    },
    {
      icon: Recycle,
      title: t('products_page.fertilizer_title'),
      description: t('products_page.fertilizer_description'),
      features: [
        t('products_page.fertilizer_feature1'),
        t('products_page.fertilizer_feature2'),
        t('products_page.fertilizer_feature3'),
      ],
      badge: t('products_page.fertilizer_badge')
    },
    {
      icon: Recycle,
      title: t('products_page.fertilizer_title'),
      description: t('products_page.fertilizer_description'),
      features: [
        t('products_page.fertilizer_feature1'),
        t('products_page.fertilizer_feature2'),
        t('products_page.fertilizer_feature3'),
      ],
      badge: t('products_page.fertilizer_badge')
    },
  ];
  
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-agri-growth/10 to-background shadow-[inset_0_100px_200px_-100px_rgba(44,165,17,0.5)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('products_page.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('products_page.subtitle')}
            </p>
          </div>

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
                  <ul className="space-y-2 flex flex-col items-start">
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
