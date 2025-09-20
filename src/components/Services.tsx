import { 
  Microscope, 
  Factory, 
  Droplets, 
  Thermometer, 
  Settings, 
  BarChart3,
  Leaf,
  Building,
  TrendingUp,
  Zap,
  ShieldCheck,
  ClipboardList,
  DraftingCompass,
  Wrench,
  GraduationCap,
  Store,
  Users,
  Truck,
  Lock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import precisionFarmingImage from "@/assets/precision-farming.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Microscope,
      title: t("services_page.spawn_labs_title"),
      description: t("services_page.spawn_labs_description"),
      features: [
        t("services_page.spawn_labs_feature1"),
        t("services_page.spawn_labs_feature2"),
        t("services_page.spawn_labs_feature3"),
      ]
    },
    {
      icon: Factory,
      title: t("services_page.composting_title"), 
      description: t("services_page.composting_description"),
      features: [
        t("services_page.composting_feature1"),
        t("services_page.composting_feature2"),
        t("services_page.composting_feature3"),
      ]
    },
    {
      icon: Building,
      title: t("services_page.farming_title"),
      description: t("services_page.farming_description"),
      features: [
        t("services_page.farming_feature1"),
        t("services_page.farming_feature2"),
        t("services_page.farming_feature3"),
      ]
    },
    {
      icon: Settings,
      title: t("services_page.rental_title"),
      description: t("services_page.rental_description"),
      features: [
        t("services_page.rental_feature1"),
        t("services_page.rental_feature2"),
        t("services_page.rental_feature3"),
      ]
    },
    {
      icon: Droplets,
      title: t("services_page.solutions_title"),
      description: t("services_page.solutions_description"),
      features: [
        t("services_page.solutions_feature1"),
        t("services_page.solutions_feature2"),
        t("services_page.solutions_feature3"),
      ]
    },
    {
      icon: BarChart3,
      title: t("services_page.monitoring_title"),
      description: t("services_page.monitoring_description"),
      features: [
        t("services_page.monitoring_feature1"),
        t("services_page.monitoring_feature2"),
        t("services_page.monitoring_feature3"),
      ]
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: t('services_page.benefit1_title'), description: t('services_page.benefit1_desc') },
    { icon: Zap, title: t('services_page.benefit2_title'), description: t('services_page.benefit2_desc') },
    { icon: ShieldCheck, title: t('services_page.benefit3_title'), description: t('services_page.benefit3_desc') },
  ];

  const howItWorks = [
    { icon: ClipboardList, title: t('services_page.how_it_works_step1_title'), description: t('services_page.how_it_works_step1_desc') },
    { icon: DraftingCompass, title: t('services_page.how_it_works_step2_title'), description: t('services_page.how_it_works_step2_desc') },
    { icon: Wrench, title: t('services_page.how_it_works_step3_title'), description: t('services_page.how_it_works_step3_desc') },
    { icon: GraduationCap, title: t('services_page.how_it_works_step4_title'), description: t('services_page.how_it_works_step4_desc') },
  ];

  return (
    <section id="services" className="py-24 bg-background shadow-[inset_0_100px_200px_-100px_rgba(44,165,17,0.5)]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t("services_page.header")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              {t("services_page.subheader")}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-strong-2 transition-shadow duration-300 group border-0 bg-white/5 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border-4 border-white/20">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 h-24">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-base">
                        <Leaf className="w-5 h-5 text-agri-primary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* How It Works Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t('services_page.how_it_works_title')}</h2>
          </div>
          <div className="relative mb-24">
            <div className="absolute left-1/2 -translate-x-1/2 top-10 h-full w-[2px] bg-gradient-to-b from-agri-primary/20 via-agri-primary/50 to-transparent"></div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {howItWorks.map((step, index) => (
                <div key={index} className={`flex items-start gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white border-4 border-white/20">
                      <step.icon className="w-10 h-10" />
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

           {/* Why Choose Us Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t('services_page.why_choose_us')}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white/20">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Service Section */}
          <div className="bg-gradient-to-r from-agri-growth to-agri-secondary/20 rounded-3xl p-10 md:p-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-6 text-foreground">
                  {t("services_page.consulting_title")}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t("services_page.consulting_description")}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-5 mb-10">
                  <div className="flex items-center">
                    <Thermometer className="w-6 h-6 text-agri-primary mr-3" />
                    <span className="text-base">{t("services_page.consulting_feature1")}</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="w-6 h-6 text-agri-primary mr-3" />
                    <span className="text-base">{t("services_page.consulting_feature2")}</span>
                  </div>
                  <div className="flex items-center">
                    <Droplets className="w-6 h-6 text-agri-primary mr-3" />
                    <span className="text-base">{t("services_page.consulting_feature3")}</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="w-6 h-6 text-agri-primary mr-3" />
                    <span className="text-base">{t("services_page.consulting_feature4")}</span>
                  </div>
                </div>
                <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  {t("services_page.schedule_consultation")}
                </Button>
                </Link>
              </div>

              <div className="relative">
                <img 
                  src={precisionFarmingImage} 
                  alt="Precision Farming Technology" 
                  className="rounded-2xl shadow-strong-2 w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agri-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* New Marketplace Section */}
          {/* <div className="bg-gradient-to-l from-agri-growth to-agri-secondary/20 rounded-3xl p-10 md:p-16 mt-24">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative">
                <div className="bg-agri-primary/30 rounded-2xl shadow-strong-2 w-full h-80 object-cover flex items-center justify-center">
                    <Store className="w-24 h-24 text-white/50"/>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-agri-primary/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="lg:order-first">
                <h3 className="text-4xl font-bold mb-6 text-foreground">
                  {t("services_page.marketplace_title")}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t("services_page.marketplace_description")}
                </p>

                <div className="grid sm:grid-cols-2 gap-5 mb-10">
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-agri-primary mr-3" />
                    <span className="text-base">{t("services_page.marketplace_feature1")}</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="w-6 h-6 text-agri-primary mr-3" />
                    <span className="text-base">{t("services_page.marketplace_feature2")}</span>
                  </div>
                  <div className="flex items-center">
                    <Truck className="w-6 h-6 text-agri-primary mr-3" />
                    <span className="text-base">{t("services_page.marketplace_feature3")}</span>
                  </div>
                  <div className="flex items-center">
                    <Lock className="w-6 h-6 text-agri-primary mr-3" />
                    <span className="text-base">{t("services_page.marketplace_feature4")}</span>
                  </div>
                </div>
                <Button size="lg" className="bg-gradient-primary hover:opacity-90" disabled>
                  {t("services_page.learn_more_marketplace")}
                </Button>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default Services;