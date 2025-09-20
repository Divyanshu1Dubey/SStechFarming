import { Briefcase, MapPin, BrainCircuit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const Career = () => {
  const { t } = useTranslation();

  const jobOpenings = [
    {
      icon: BrainCircuit,
      title: t("career_page.job1_title"),
      location: t("career_page.job1_location"),
      description: t("career_page.job1_description")
    },
    {
      icon: Briefcase,
      title: t("career_page.job2_title"),
      location: t("career_page.job2_location"),
      description: t("career_page.job2_description")
    },
    {
      icon: MapPin,
      title: t("career_page.job3_title"),
      location: t("career_page.job3_location"),
      description: t("career_page.job3_description")
    },
     {
      icon: BrainCircuit,
      title: t("career_page.job4_title"),
      location: t("career_page.job4_location"),
      description: t("career_page.job4_description")
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gray-50 dark:bg-gray-900 shadow-[inset_0_100px_200px_-100px_rgba(44,165,17,0.5)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('career_page.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('career_page.description')}
            </p>
          </div>

          {/* Job Openings Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="text-left hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                      <job.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="inline-block w-4 h-4 mr-1" /> {job.location}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
                  <Button variant="default" className="w-full bg-gradient-primary ">
                    {t('career_page.apply_button')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
