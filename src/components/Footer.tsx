import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      "Mushroom Spawn Labs",
      "Indoor Composting",
      "Precision Farming",
      "Equipment Rental",
      "Soil Monitoring",
      "Consulting Services"
    ],
    products: [
      "Fresh Mushrooms",
      "Canned Products",
      "Organic Fertilizer",
      "Value-Added Items",
      "Bulk Orders",
      "Custom Packaging"
    ],
    company: [
      "About Us",
      "Our Vision",
      "Career Opportunities",
      "Research & Development",
      "Quality Standards",
      "Sustainability"
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
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
                  <h1 className="text-xl font-bold">SS TechFarming India</h1>
                  <p className="text-sm text-white/70">Farm Smarter</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                Revolutionizing Indian agriculture through innovative mushroom cultivation, 
                precision farming technologies, and sustainable agricultural solutions. 
                Building a nationwide network of produce centers for the future of farming.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-agri-secondary flex-shrink-0" />
                  <span className="text-sm">Bokaro, Jharkhand, Bharat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-agri-secondary flex-shrink-0" />
                  <span className="text-sm">+91 79923 38119</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-agri-secondary flex-shrink-0" />
                  <span className="text-sm">info@sstechfarmingindia.com</span>
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
              <h3 className="text-lg font-semibold mb-6">Services</h3>
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
              <h3 className="text-lg font-semibold mb-6">Products</h3>
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
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/70 hover:text-agri-secondary transition-colors duration-200 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/70">
              © 2024 SS TechFarming India Private Limited. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/70 hover:text-agri-secondary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-agri-secondary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-agri-secondary transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;