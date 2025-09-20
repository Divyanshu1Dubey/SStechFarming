import { Recycle, Wind, HeartHandshake, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const Sustainability = () => {
  const { t } = useTranslation();

  const sustainabilityInitiatives = [
    {
      icon: Recycle,
      title: t("sustainability_page.initiative1_title"),
      description: t("sustainability_page.initiative1_description")
    },
    {
      icon: Wind,
      title: t("sustainability_page.initiative2_title"),
      description: t("sustainability_page.initiative2_description")
    },
    {
      icon: HeartHandshake,
      title: t("sustainability_page.initiative3_title"),
      description: t("sustainability_page.initiative3_description")
    },
    {
      icon: TrendingUp,
      title: t("sustainability_page.initiative4_title"),
      description: t("sustainability_page.initiative4_description")
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-white dark:bg-gray-900 shadow-[inset_0_100px_200px_-100px_rgba(44,165,17,0.5)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('sustainability_page.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('sustainability_page.description')}
            </p>
          </div>

          {/* Sustainability Initiatives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {sustainabilityInitiatives.map((initiative, index) => (
              <Card key={index} className="text-left hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                      <initiative.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{initiative.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 dark:text-gray-300">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
