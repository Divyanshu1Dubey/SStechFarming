import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: t("about_page.value1_title"),
      description: t("about_page.value1_description")
    },
    {
      icon: Eye,
      title: t("about_page.value2_title"), 
      description: t("about_page.value2_description")
    },
    {
      icon: Award,
      title: t("about_page.value3_title"),
      description: t("about_page.value3_description")
    },
    {
      icon: Users,
      title: t("about_page.value4_title"),
      description: t("about_page.value4_description")
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-agri-growth/20 shadow-[inset_0_100px_200px_-100px_rgba(44,165,17,0.5)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('about_page.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about_page.description')}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">{t('about_page.vision_title')}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('about_page.vision_description')}
              </p>
              
              <h4 className="text-xl font-semibold mb-4 text-foreground">{t('about_page.core_services_title')}</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-agri-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {t('about_page.core_service1')}
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-agri-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {t('about_page.core_service2')}
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-agri-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {t('about_page.core_service3')}
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-agri-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {t('about_page.core_service4')}
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-agri-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {t('about_page.core_service5')}
                </li>
              </ul>
            </div>

            {/* Right Content - Stats */}
            <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-strong">
              <h3 className="text-2xl font-bold mb-6">{t('about_page.impact_title')}</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span>{t('about_page.impact_stat1')}</span>
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{t('about_page.impact_stat2')}</span>
                  <span className="text-2xl font-bold">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{t('about_page.impact_stat3')}</span>
                  <span className="text-2xl font-bold">5+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{t('about_page.impact_stat4')}</span>
                  <span className="text-2xl font-bold">28</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
