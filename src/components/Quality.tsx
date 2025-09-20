import { ShieldCheck, Tractor, Package, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const Quality = () => {
  const { t } = useTranslation();

  const qualityStandards = [
    {
      icon: Tractor,
      title: t("quality_page.standard1_title"),
      description: t("quality_page.standard1_description")
    },
    {
      icon: Package,
      title: t("quality_page.standard2_title"),
      description: t("quality_page.standard2_description")
    },
    {
      icon: ShieldCheck,
      title: t("quality_page.standard3_title"),
      description: t("quality_page.standard3_description")
    },
    {
      icon: Award,
      title: t("quality_page.standard4_title"),
      description: t("quality_page.standard4_description")
    }
  ];

  return (
    <section id="quality" className="py-20 bg-gray-50 dark:bg-gray-900 shadow-[inset_0_100px_200px_-100px_rgba(44,165,17,0.5)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('quality_page.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('quality_page.description')}
            </p>
          </div>

          {/* Quality Standards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="text-left hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                      <standard.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{standard.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 dark:text-gray-300">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
