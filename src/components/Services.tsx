import { 
  Microscope, 
  Factory, 
  Droplets, 
  Thermometer, 
  Settings, 
  BarChart3,
  Leaf,
  Building
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import precisionFarmingImage from "@/assets/precision-farming.jpg";
import { useTranslation } from "react-i18next";

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

  return (
    <section id="services" className="py-20 bg-background shadow-[inset_0_100px_200px_-100px_rgba(44,165,17,0.5)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t("services_page.header")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("services_page.subheader")}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow duration-300 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Leaf className="w-4 h-4 text-agri-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Service Section */}
          <div className="bg-gradient-to-r from-agri-growth to-agri-secondary/20 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  {t("services_page.consulting_title")}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t("services_page.consulting_description")}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <Thermometer className="w-5 h-5 text-agri-primary mr-3" />
                    <span className="text-sm">{t("services_page.consulting_feature1")}</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="w-5 h-5 text-agri-primary mr-3" />
                    <span className="text-sm">{t("services_page.consulting_feature2")}</span>
                  </div>
                  <div className="flex items-center">
                    <Droplets className="w-5 h-5 text-agri-primary mr-3" />
                    <span className="text-sm">{t("services_page.consulting_feature3")}</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 text-agri-primary mr-3" />
                    <span className="text-sm">{t("services_page.consulting_feature4")}</span>
                  </div>
                </div>

                <Button className="bg-gradient-primary hover:opacity-90">
                  {t("services_page.schedule_consultation")}
                </Button>
              </div>

              <div className="relative">
                <img 
                  src={precisionFarmingImage} 
                  alt="Precision Farming Technology" 
                  className="rounded-xl shadow-strong w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agri-primary/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
