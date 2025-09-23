import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import analytics from "@/lib/analytics";
import { 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  Globe, 
  Smartphone, 
  Monitor,
  Download,
  Activity,
  TrendingUp,
  Languages,
  ShoppingCart
} from "lucide-react";

const UserAnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState<any>(null);
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalyticsData();
  }, []);

  const loadAnalyticsData = () => {
    try {
      const summary = analytics.getAnalyticsSummary();
      const allEvents = JSON.parse(localStorage.getItem('ss_analytics_events') || '[]');
      
      setAnalyticsData(summary);
      setEvents(allEvents);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load analytics:', error);
      setLoading(false);
    }
  };

  const getDeviceStats = () => {
    const deviceEvents = events.filter(e => e.event === 'device_info');
    if (deviceEvents.length === 0) return { mobile: 0, desktop: 0, tablet: 0 };

    const devices = deviceEvents.map(e => {
      if (e.viewportWidth < 768) return 'mobile';
      if (e.viewportWidth < 1024) return 'tablet';
      return 'desktop';
    });

    return {
      mobile: devices.filter(d => d === 'mobile').length,
      tablet: devices.filter(d => d === 'tablet').length,
      desktop: devices.filter(d => d === 'desktop').length
    };
  };

  const getLanguageStats = () => {
    const langEvents = events.filter(e => e.event === 'language_change');
    const languages = langEvents.reduce((acc, event) => {
      acc[event.toLanguage] = (acc[event.toLanguage] || 0) + 1;
      return acc;
    }, {});
    return languages;
  };

  const getPageViews = () => {
    const pageEvents = events.filter(e => e.event === 'page_load');
    const pages = pageEvents.reduce((acc, event) => {
      acc[event.page] = (acc[event.page] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(pages).sort(([,a], [,b]) => (b as number) - (a as number));
  };

  const getProductViews = () => {
    const productEvents = events.filter(e => e.event === 'product_view');
    const products = productEvents.reduce((acc, event) => {
      acc[event.productName] = (acc[event.productName] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(products).sort(([,a], [,b]) => (b as number) - (a as number));
  };

  const getFormInteractions = () => {
    return events.filter(e => e.event === 'contact_form' || e.event === 'form_submit').length;
  };

  const getAverageTimeOnSite = () => {
    const timeEvents = events.filter(e => e.event === 'time_on_site');
    if (timeEvents.length === 0) return 0;
    
    const totalTime = timeEvents.reduce((sum, event) => sum + (event.totalTime || 0), 0);
    return Math.round(totalTime / timeEvents.length / 1000 / 60); // Convert to minutes
  };

  const exportAnalytics = () => {
    analytics.exportAnalytics();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Activity className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p>Loading Analytics...</p>
        </div>
      </div>
    );
  }

  const deviceStats = getDeviceStats();
  const languageStats = getLanguageStats();
  const pageViews = getPageViews();
  const productViews = getProductViews();
  const avgTimeOnSite = getAverageTimeOnSite();

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            User Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive insights into user behavior and website performance
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <Button onClick={loadAnalyticsData}>
              <Activity className="w-4 h-4 mr-2" />
              Refresh Data
            </Button>
            <Button onClick={exportAnalytics} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Analytics
            </Button>
          </div>
        </div>

        {analyticsData && (
          <>
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analyticsData.totalEvents}</div>
                  <p className="text-xs text-muted-foreground">
                    Since session start
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analyticsData.pageViews}</div>
                  <p className="text-xs text-muted-foreground">
                    Unique page loads
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">User Clicks</CardTitle>
                  <MousePointer className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analyticsData.clicks}</div>
                  <p className="text-xs text-muted-foreground">
                    Interactive elements
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Time</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{avgTimeOnSite}m</div>
                  <p className="text-xs text-muted-foreground">
                    Average session time
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Device & Language Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Monitor className="w-5 h-5 mr-2" />
                    Device Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Monitor className="w-4 h-4 mr-2" />
                        <span>Desktop</span>
                      </div>
                      <Badge variant="secondary">{deviceStats.desktop}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Smartphone className="w-4 h-4 mr-2" />
                        <span>Mobile</span>
                      </div>
                      <Badge variant="secondary">{deviceStats.mobile}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Monitor className="w-4 h-4 mr-2" />
                        <span>Tablet</span>
                      </div>
                      <Badge variant="secondary">{deviceStats.tablet}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Languages className="w-5 h-5 mr-2" />
                    Language Usage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(languageStats).map(([lang, count]) => (
                      <div key={lang} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Globe className="w-4 h-4 mr-2" />
                          <span>{lang === 'en' ? 'English' : lang === 'hi' ? 'Hindi' : 'Bengali'}</span>
                        </div>
                        <Badge variant="secondary">{count as number}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Page Views & Product Views */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Most Visited Pages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pageViews.slice(0, 5).map(([page, views]) => (
                      <div key={page} className="flex items-center justify-between">
                        <span className="text-sm">{page === '/' ? 'Home' : page}</span>
                        <Badge variant="outline">{views as number} views</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Popular Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {productViews.slice(0, 5).map(([product, views]) => (
                      <div key={product} className="flex items-center justify-between">
                        <span className="text-sm">{product}</span>
                        <Badge variant="outline">{views as number} views</Badge>
                      </div>
                    ))}
                    {productViews.length === 0 && (
                      <p className="text-sm text-muted-foreground">No product interactions yet</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Session Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Session Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Session ID</p>
                    <p className="font-mono text-sm">{analyticsData.sessionId}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Session Start</p>
                    <p className="text-sm">{analyticsData.sessionStart.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Last Activity</p>
                    <p className="text-sm">{analyticsData.lastActivity.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Events */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {events.slice(-20).reverse().map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex-1">
                        <span className="text-sm font-medium">{event.event}</span>
                        {event.page && <span className="text-xs text-muted-foreground ml-2">on {event.page}</span>}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {new Date(event.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </section>
  );
};

export default UserAnalyticsDashboard;