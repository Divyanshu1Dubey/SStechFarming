import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: "Bokaro, Jharkhand, Bharat",
      description: "Innovation Hub & Research Center"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 79923 38119",
      description: "Business Hours Support"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@sstechfarmingindia.com",
      description: "Quick Response Guaranteed"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM",
      description: "Sunday: Emergency Support Only"
    }
  ];

  const services = [
    "Mushroom Cultivation Setup",
    "Precision Farming Consultation",
    "Equipment Rental Services",
    "Soil Health Monitoring",
    "Hydroponics Installation",
    "Weather Station Setup",
    "Bulk Product Orders",
    "Partnership Opportunities"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-agri-growth/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your agricultural venture? Contact our team of experts 
              for consultation, product inquiries, or partnership opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Contact Information
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
                  <CardTitle>Our Consultation Services</CardTitle>
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
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name *
                      </label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name *
                      </label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number
                      </label>
                      <Input placeholder="+91 XXX-XXX-XXXX" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Service Interest
                    </label>
                    <select className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Select a service</option>
                      <option value="mushroom-cultivation">Mushroom Cultivation Setup</option>
                      <option value="precision-farming">Precision Farming Consultation</option>
                      <option value="equipment-rental">Equipment Rental</option>
                      <option value="soil-monitoring">Soil Health Monitoring</option>
                      <option value="hydroponics">Hydroponics Installation</option>
                      <option value="products">Product Orders</option>
                      <option value="partnership">Partnership Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project, requirements, or questions..."
                      rows={5}
                    />
                  </div>

                  <Button className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
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