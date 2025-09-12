import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.headquarters"),
      details: t("contact.headquarters_location"),
      description: t("contact.headquarters_description")
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      details: t("contact.phone_number"),
      description: t("contact.phone_description")
    },
    {
      icon: Mail,
      title: t("contact.email_title"),
      details: t("contact.email_address"),
      description: t("contact.email_description")
    },
    {
      icon: Clock,
      title: t("contact.business_hours"),
      details: t("contact.business_hours_details"),
      description: t("contact.business_hours_description")
    }
  ];

  const services = [
    t("contact.service1"),
    t("contact.service2"),
    t("contact.service3"),
    t("contact.service4"),
    t("contact.service5"),
    t("contact.service6"),
    t("contact.service7"),
    t("contact.service8")
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-agri-growth/10 shadow-[inset_0_100px_200px_-100px_rgba(44,165,17,0.5)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t("contact.get_in_touch")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("contact.form_description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {t("contact.contact_information")}
              </h3>

              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-medium transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-agri-primary font-medium mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Services List */}
              <Card className="bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle>{t("contact.consultation_services_title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle className="text-2xl">{t("contact.form_title")}</CardTitle>
                  <p className="text-muted-foreground">
                    {t("contact.form_subtitle")}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form action="https://formspree.io/f/mpwjnpgp" method="POST" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          {t("contact.first_name")}
                        </label>
                        <Input name="firstName" placeholder={t("contact.first_name_placeholder")} required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          {t("contact.last_name")}
                        </label>
                        <Input name="lastName" placeholder={t("contact.last_name_placeholder")} required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          {t("contact.email_address_label")}
                        </label>
                        <Input type="email" name="email" placeholder={t("contact.email_placeholder")} required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          {t("contact.phone_number_label")}
                        </label>
                        <Input name="phone" placeholder={t("contact.phone_placeholder")} />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t("contact.service_interest")}
                      </label>
                      <select name="service" className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                        <option value="">{t("contact.select_service")}</option>
                        <option value="mushroom-cultivation">{t("contact.service_option1")}</option>
                        <option value="precision-farming">{t("contact.service_option2")}</option>
                        <option value="equipment-rental">{t("contact.service_option3")}</option>
                        <option value="soil-monitoring">{t("contact.service_option4")}</option>
                        <option value="hydroponics">{t("contact.service_option5")}</option>
                        <option value="products">{t("contact.service_option6")}</option>
                        <option value="partnership">{t("contact.service_option7")}</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t("contact.message_label")}
                      </label>
                      <Textarea name="message" placeholder={t("contact.message_placeholder")} rows={5} required />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                      <Send className="w-5 h-5 mr-2" />
                      {t("contact.send_button")}
                    </Button>
                  </form>


                  <p className="text-xs text-muted-foreground text-center">
                    {t("contact.form_footer")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
