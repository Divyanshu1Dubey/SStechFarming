import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    services: [
      t('footer.services_link1'),
      t('footer.services_link2'),
      t('footer.services_link3'),
      t('footer.services_link4'),
      t('footer.services_link5'),
      t('footer.services_link6')
    ],
    products: [
      t('footer.products_link1'),
      t('footer.products_link2'),
      t('footer.products_link3'),
      t('footer.products_link4'),
      t('footer.products_link5'),
      t('footer.products_link6')
    ]
  };

  const company =[
    {href:"/about", label: t('footer.company_link1')},
    {href:"#", label: t('footer.company_link2')},
    {href:"/career", label: t('footer.company_link3')},
    {href:"/research", label: t('footer.company_link4')},
    {href:"/quality", label: t('footer.company_link5')},
    {href:"/sustainability", label: t('footer.company_link6')}
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: t('footer.social_label_facebook') },
    { icon: Twitter, href: "#", label: t('footer.social_label_twitter') },
    { icon: Linkedin, href: "#", label: t('footer.social_label_linkedin') },
    { icon: Instagram, href: "#", label: t('footer.social_label_instagram') }
  ];

  return (
    <footer className="bg-agri-soil text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/8dedc6fe-2fb9-4f3a-9de6-ae8978d311d3.png" 
                  alt="SS TechFarming Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h1 className="text-xl font-bold">{t('footer.company_name')}</h1>
                  <p className="text-sm text-white/70">{t('footer.company_subtitle')}</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                {t('footer.company_description')}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-agri-secondary flex-shrink-0" />
                  <span className="text-sm">{t('footer.location')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-agri-secondary flex-shrink-0" />
                  <span className="text-sm">{t('footer.phone')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-agri-secondary flex-shrink-0" />
                  <span className="text-sm">{t('footer.email')}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-agri-primary transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.services_title')}</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/70 hover:text-agri-secondary transition-colors duration-200 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.products_title')}</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/70 hover:text-agri-secondary transition-colors duration-200 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.company_title')}</h3>
              <div className="flex flex-col space-y-4">
                {company.map((company, index) => (
                  <a
                    key={index}
                    href={company.href}
                    className="text-white/70 hover:text-agri-secondary transition-colors duration-200 text-sm"
                  >
                    {company.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/70">
              {t('footer.copyright')}
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/70 hover:text-agri-secondary transition-colors duration-200">
                {t('footer.privacy_policy')}
              </a>
              <a href="#" className="text-white/70 hover:text-agri-secondary transition-colors duration-200">
                {t('footer.terms_of_service')}
              </a>
              <a href="#" className="text-white/70 hover:text-agri-secondary transition-colors duration-200">
                {t('footer.cookie_policy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
