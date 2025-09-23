import { Gauge, Droplets, Thermometer, Zap, Leaf, TrendingUp, MapPin, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const SoilMonitoring = () => {
  const { t } = useTranslation();

  const monitoringParameters = [
    {
      icon: Gauge,
      parameter: t('soil_monitoring.soil_ph'),
      description: t('soil_monitoring.soil_ph_desc'),
      optimalRange: "6.0 - 7.0",
      importance: "Critical for nutrient availability and plant growth"
    },
    {
      icon: Droplets,
      parameter: t('soil_monitoring.soil_moisture'),
      description: t('soil_monitoring.soil_moisture_desc'),
      optimalRange: "60% - 80%",
      importance: "Essential for plant hydration and nutrient transport"
    },
    {
      icon: Thermometer,
      parameter: t('soil_monitoring.soil_temperature'),
      description: t('soil_monitoring.soil_temp_desc'),
      optimalRange: "15°C - 25°C",
      importance: "Affects biological activity and nutrient cycling"
    },
    {
      icon: Zap,
      parameter: t('soil_monitoring.electrical_conductivity'),
      description: t('soil_monitoring.ec_desc'),
      optimalRange: "0.8 - 2.0 dS/m",
      importance: "Indicates soil fertility and salt stress levels"
    },
    {
      icon: Leaf,
      parameter: t('soil_monitoring.npk_levels'),
      description: t('soil_monitoring.npk_desc'),
      optimalRange: "Variable by crop",
      importance: "Primary macronutrients for plant development"
    },
    {
      icon: TrendingUp,
      parameter: t('soil_monitoring.organic_matter'),
      description: t('soil_monitoring.organic_matter_desc'),
      optimalRange: "3% - 6%",
      importance: "Improves soil structure and water retention"
    }
  ];

  const systemFeatures = [
    {
      icon: Smartphone,
      title: t('soil_monitoring.mobile_app_title'),
      description: t('soil_monitoring.mobile_app_desc'),
      benefits: ["Live data updates", "Historical trends", "Alerts & notifications", "Offline capability"]
    },
    {
      icon: MapPin,
      title: t('soil_monitoring.gps_mapping_title'),
      description: t('soil_monitoring.gps_mapping_desc'),
      benefits: ["GPS coordinates", "Field boundaries", "Sensor locations", "Crop zone mapping"]
    },
    {
      icon: TrendingUp,
      title: t('soil_monitoring.ai_analytics_title'),
      description: t('soil_monitoring.ai_analytics_desc'),
      benefits: ["Predictive analytics", "Trend analysis", "Recommendation engine", "Yield forecasting"]
    },
    {
      icon: Zap,
      title: t('soil_monitoring.automated_alerts_title'),
      description: t('soil_monitoring.automated_alerts_desc'),
      benefits: ["SMS alerts", "Email notifications", "Mobile push", "Custom thresholds"]
    }
  ];

  const packageOptions = [
    {
      name: t('soil_monitoring.basic_monitoring'),
      price: "₹15,000",
      duration: t('soil_monitoring.per_year'),
      sensors: `3 ${t('soil_monitoring.sensors')}`,
      parameters: ["pH", "Moisture", "Temperature"],
      features: [
        "Mobile app access",
        "Monthly reports",
        "Basic alerts",
        "Technical support"
      ]
    },
    {
      name: t('soil_monitoring.advanced_monitoring'),
      price: "₹25,000", 
      duration: t('soil_monitoring.per_year'),
      sensors: `6 ${t('soil_monitoring.sensors')}`,
      parameters: ["pH", "Moisture", "Temperature", "EC", "NPK"],
      features: [
        "Real-time dashboard",
        "Weekly reports",
        "Smart alerts",
        "On-site training",
        "Fertilizer recommendations"
      ],
      popular: true
    },
    {
      name: t('soil_monitoring.premium_monitoring'),
      price: "₹40,000",
      duration: t('soil_monitoring.per_year'), 
      sensors: `10 ${t('soil_monitoring.sensors')}`,
      parameters: ["All parameters", "Micronutrients", "Heavy metals"],
      features: [
        "AI-powered insights",
        "Daily reports",
        "Predictive analytics",
        "Agronomist consultation",
        "Custom recommendations",
        "Weather integration"
      ]
    }
  ];

  return (
    <section id="soil-monitoring" className="py-20 bg-gradient-to-b from-background to-agri-growth/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {t('soil_monitoring.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('soil_monitoring.subtitle')}
            </p>
          </div>

          {/* Demo Dashboard */}
          <div className="bg-gradient-primary rounded-2xl p-8 mb-16 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {t('soil_monitoring.dashboard_title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 border-white/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-sm">Soil pH</CardTitle>
                    <Gauge className="w-4 h-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white mb-2">6.8</div>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-white/80 mt-2">Optimal range</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-sm">Moisture</CardTitle>
                    <Droplets className="w-4 h-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white mb-2">72%</div>
                  <Progress value={72} className="h-2" />
                  <p className="text-xs text-white/80 mt-2">Good level</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-sm">Temperature</CardTitle>
                    <Thermometer className="w-4 h-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white mb-2">22°C</div>
                  <Progress value={60} className="h-2" />
                  <p className="text-xs text-white/80 mt-2">Ideal for growth</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Monitoring Parameters */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              {t('soil_monitoring.what_we_monitor')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {monitoringParameters.map((param, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                        <param.icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-lg">{param.parameter}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {param.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold">Optimal Range:</span>
                        <Badge variant="secondary">{param.optimalRange}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground italic">
                        {param.importance}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* System Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              {t('soil_monitoring.advanced_features')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {systemFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-agri-primary rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pricing Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
              {t('soil_monitoring.monitoring_packages')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {packageOptions.map((pkg, index) => (
                <Card key={index} className={`relative hover:shadow-lg transition-shadow duration-300 ${pkg.popular ? 'border-agri-primary shadow-lg' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-agri-primary">{t('soil_monitoring.most_popular')}</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-agri-primary">
                      {pkg.price}
                      <span className="text-sm font-normal text-muted-foreground">/{pkg.duration}</span>
                    </div>
                    <Badge variant="outline">{pkg.sensors}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2">{t('soil_monitoring.monitored_parameters')}:</h5>
                      <div className="flex flex-wrap gap-1">
                        {pkg.parameters.map((param, paramIndex) => (
                          <Badge key={paramIndex} variant="secondary" className="text-xs">
                            {param}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-semibold">{t('soil_monitoring.included_features')}:</h5>
                      <ul className="space-y-1">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-agri-primary rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className={`w-full mt-6 ${pkg.popular ? 'bg-gradient-primary' : ''}`}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      {t('soil_monitoring.get_started_btn')}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-agri-growth/10 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
              {t('soil_monitoring.success_stories')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-2">Kumar Farm, Ranchi</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  "Soil monitoring helped us increase mushroom yield by 35% while reducing water usage by 25%."
                </p>
                <div className="flex gap-4 text-xs">
                  <span className="text-agri-primary font-semibold">+35% Yield</span>
                  <span className="text-agri-primary font-semibold">-25% Water Usage</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2">Green Valley Agriculture, Dhanbad</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  "Real-time pH monitoring prevented crop loss and improved our vegetable quality significantly."
                </p>
                <div className="flex gap-4 text-xs">
                  <span className="text-agri-primary font-semibold">Zero Crop Loss</span>
                  <span className="text-agri-primary font-semibold">Better Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {t('soil_monitoring.cta_title')}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('soil_monitoring.cta_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  {t('soil_monitoring.free_consultation_btn')}
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                {t('soil_monitoring.download_brochure_btn')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoilMonitoring;