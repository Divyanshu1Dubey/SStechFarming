import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnalyticsService } from "@/components/Analytics";
import { productDataService } from "@/data/enhancedProductData";
import { 
  TrendingUp, 
  Users, 
  MousePointer, 
  Download, 
  Search, 
  ShoppingCart, 
  Eye, 
  Clock,
  Globe,
  Smartphone,
  Monitor,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";

const AnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState<any>(null);
  const [timeframe, setTimeframe] = useState<'today' | 'week' | 'month'>('today');

  useEffect(() => {
    const analytics = AnalyticsService.getInstance();
    const summary = analytics.getAnalyticsSummary();
    
    // Mock real-time analytics data (in production, this would come from your analytics API)
    const mockAnalytics = {
      overview: {
        totalVisitors: 1247,
        uniqueVisitors: 892,
        pageViews: 3456,
        sessionDuration: '4m 32s',
        bounceRate: '32.5%',
        conversionRate: '12.8%'
      },
      realTime: {
        activeUsers: 23,
        currentPageViews: 156,
        topPages: [
          { page: '/products', users: 8 },
          { page: '/catalog', users: 6 },
          { page: '/request-quote', users: 4 },
          { page: '/', users: 3 },
          { page: '/services', users: 2 }
        ]
      },
      traffic: {
        sources: [
          { source: 'Direct', visitors: 425, percentage: 34.1 },
          { source: 'Google Search', visitors: 312, percentage: 25.0 },
          { source: 'Social Media', visitors: 186, percentage: 14.9 },
          { source: 'Referral', visitors: 156, percentage: 12.5 },
          { source: 'Email', visitors: 98, percentage: 7.9 },
          { source: 'Other', visitors: 70, percentage: 5.6 }
        ],
        devices: [
          { device: 'Mobile', users: 612, percentage: 49.1 },
          { device: 'Desktop', users: 487, percentage: 39.1 },
          { device: 'Tablet', users: 148, percentage: 11.8 }
        ]
      },
      userBehavior: {
        topSearchQueries: [
          { query: 'oyster mushrooms', count: 89 },
          { query: 'organic fertilizer', count: 67 },
          { query: 'mushroom powder', count: 45 },
          { query: 'bulk orders', count: 34 },
          { query: 'dried mushrooms', count: 28 }
        ],
        popularProducts: [
          { product: 'Premium Oyster Mushrooms', views: 234, quotes: 12 },
          { product: 'Spent Mushroom Substrate', views: 189, quotes: 8 },
          { product: 'Dried Mushroom Mix', views: 156, quotes: 15 },
          { product: 'Fresh Button Mushrooms', views: 134, quotes: 6 }
        ]
      },
      conversions: {
        quoteRequests: {
          total: 89,
          byType: [
            { type: 'Product Purchase', count: 34 },
            { type: 'Bulk Orders', count: 28 },
            { type: 'Services', count: 15 },
            { type: 'Custom Packaging', count: 12 }
          ]
        },
        downloads: {
          catalog: 45,
          brochures: 23,
          certifications: 12
        }
      },
      geography: {
        topRegions: [
          { region: 'Maharashtra', users: 287, percentage: 23.0 },
          { region: 'Delhi', users: 198, percentage: 15.9 },
          { region: 'Karnataka', users: 167, percentage: 13.4 },
          { region: 'Gujarat', users: 134, percentage: 10.7 },
          { region: 'Tamil Nadu', users: 123, percentage: 9.9 }
        ]
      }
    };

    setAnalyticsData({
      ...mockAnalytics,
      localSummary: summary,
      productData: productDataService.getSustainabilityReport()
    });
  }, [timeframe]);

  if (!analyticsData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Activity className="w-16 h-16 text-agri-primary mx-auto mb-4 animate-pulse" />
          <h2 className="text-xl font-semibold">Loading Analytics...</h2>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-agri-growth/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Analytics Dashboard
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time insights into website performance, user behavior, and business metrics
            </p>
          </div>

          {/* Time Frame Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex border border-input rounded-lg">
              {(['today', 'week', 'month'] as const).map((period) => (
                <Button
                  key={period}
                  variant={timeframe === period ? 'default' : 'ghost'}
                  onClick={() => setTimeframe(period)}
                  className="rounded-none first:rounded-l-lg last:rounded-r-lg"
                >
                  {period === 'today' ? 'Today' : period === 'week' ? 'This Week' : 'This Month'}
                </Button>
              ))}
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="traffic">Traffic</TabsTrigger>
              <TabsTrigger value="behavior">Behavior</TabsTrigger>
              <TabsTrigger value="conversions">Conversions</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-muted-foreground flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Total Visitors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{analyticsData.overview.totalVisitors.toLocaleString()}</div>
                    <Badge variant="secondary" className="mt-2">+12.5%</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-muted-foreground flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      Page Views
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{analyticsData.overview.pageViews.toLocaleString()}</div>
                    <Badge variant="secondary" className="mt-2">+8.3%</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Avg. Session
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{analyticsData.overview.sessionDuration}</div>
                    <Badge variant="default" className="mt-2">+15.2%</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-muted-foreground flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Bounce Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{analyticsData.overview.bounceRate}</div>
                    <Badge variant="outline" className="mt-2">-5.1%</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-muted-foreground flex items-center">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Conversion Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{analyticsData.overview.conversionRate}</div>
                    <Badge variant="default" className="mt-2">+3.7%</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-muted-foreground flex items-center">
                      <Activity className="w-4 h-4 mr-2" />
                      Live Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">{analyticsData.realTime.activeUsers}</div>
                    <Badge variant="secondary" className="mt-2">Real-time</Badge>
                  </CardContent>
                </Card>
              </div>

              {/* Real-time Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-green-600" />
                    Real-time Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Currently Active Pages</h4>
                      <div className="space-y-2">
                        {analyticsData.realTime.topPages.map((page: any, index: number) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm">{page.page}</span>
                            <Badge variant="outline">{page.users} users</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Traffic Tab */}
            <TabsContent value="traffic" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Traffic Sources */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="w-5 h-5 mr-2" />
                      Traffic Sources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analyticsData.traffic.sources.map((source: any, index: number) => (
                        <div key={index} className="flex justify-between items-center">
                          <div>
                            <span className="font-medium">{source.source}</span>
                            <div className="text-sm text-muted-foreground">{source.visitors} visitors</div>
                          </div>
                          <Badge variant="secondary">{source.percentage}%</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Device Types */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Monitor className="w-5 h-5 mr-2" />
                      Device Types
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analyticsData.traffic.devices.map((device: any, index: number) => (
                        <div key={index} className="flex justify-between items-center">
                          <div className="flex items-center">
                            {device.device === 'Mobile' ? <Smartphone className="w-4 h-4 mr-2" /> : 
                             device.device === 'Desktop' ? <Monitor className="w-4 h-4 mr-2" /> : 
                             <Monitor className="w-4 h-4 mr-2" />}
                            <span className="font-medium">{device.device}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">{device.users}</div>
                            <Badge variant="outline">{device.percentage}%</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Geographic Data */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Regions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {analyticsData.geography.topRegions.map((region: any, index: number) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold">{region.users}</div>
                        <div className="text-sm font-medium">{region.region}</div>
                        <Badge variant="outline" className="mt-1">{region.percentage}%</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Behavior Tab */}
            <TabsContent value="behavior" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Search Queries */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Search className="w-5 h-5 mr-2" />
                      Top Search Queries
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analyticsData.userBehavior.topSearchQueries.map((query: any, index: number) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm">{query.query}</span>
                          <Badge variant="secondary">{query.count}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Products */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Eye className="w-5 h-5 mr-2" />
                      Popular Products
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analyticsData.userBehavior.popularProducts.map((product: any, index: number) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">{product.product}</span>
                            <Badge variant="outline">{product.views} views</Badge>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {product.quotes} quote requests
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Conversions Tab */}
            <TabsContent value="conversions" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Quote Requests */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Quote Requests
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">{analyticsData.conversions.quoteRequests.total}</div>
                    <div className="space-y-2">
                      {analyticsData.conversions.quoteRequests.byType.map((type: any, index: number) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-sm">{type.type}</span>
                          <Badge variant="secondary">{type.count}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Downloads */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Download className="w-5 h-5 mr-2" />
                      Downloads
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Catalog PDF</span>
                        <Badge variant="default">{analyticsData.conversions.downloads.catalog}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Product Brochures</span>
                        <Badge variant="secondary">{analyticsData.conversions.downloads.brochures}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Certifications</span>
                        <Badge variant="outline">{analyticsData.conversions.downloads.certifications}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Products Tab */}
            <TabsContent value="products" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Product Performance & Sustainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-agri-primary">
                        {analyticsData.productData.totalProducts}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Products</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">
                        {analyticsData.productData.organicPercentage}%
                      </div>
                      <div className="text-sm text-muted-foreground">Organic Products</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-agri-secondary">
                        {analyticsData.productData.avgSustainabilityScore}/10
                      </div>
                      <div className="text-sm text-muted-foreground">Sustainability Score</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;