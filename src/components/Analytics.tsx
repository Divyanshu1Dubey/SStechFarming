import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics tracking function
const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag(...args);
  }
};

// Analytics service for tracking user interactions
export class AnalyticsService {
  private static instance: AnalyticsService;
  private sessionId: string;
  private userId: string;
  private startTime: number;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.userId = this.getUserId();
    this.startTime = Date.now();
    this.initializeTracking();
  }

  static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getUserId(): string {
    let userId = localStorage.getItem('user_id');
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('user_id', userId);
    }
    return userId;
  }

  private initializeTracking() {
    // Track session start
    this.trackEvent('session_start', {
      session_id: this.sessionId,
      user_id: this.userId,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.trackEvent('page_hidden', {
          session_id: this.sessionId,
          timestamp: new Date().toISOString()
        });
      } else {
        this.trackEvent('page_visible', {
          session_id: this.sessionId,
          timestamp: new Date().toISOString()
        });
      }
    });

    // Track page unload
    window.addEventListener('beforeunload', () => {
      const sessionDuration = Date.now() - this.startTime;
      this.trackEvent('session_end', {
        session_id: this.sessionId,
        duration: sessionDuration,
        timestamp: new Date().toISOString()
      });
    });

    // Track scroll depth
    this.trackScrollDepth();
  }

  private trackScrollDepth() {
    const scrollThresholds = [25, 50, 75, 100];
    const trackedThresholds = new Set<number>();

    const handleScroll = () => {
      const scrollPercent = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );

      scrollThresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          this.trackEvent('scroll_depth', {
            session_id: this.sessionId,
            depth_percent: threshold,
            page: window.location.pathname,
            timestamp: new Date().toISOString()
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // Public method to track events
  trackEvent(eventName: string, eventData: Record<string, any> = {}) {
    const event = {
      event_name: eventName,
      session_id: this.sessionId,
      user_id: this.userId,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_path: window.location.pathname,
      referrer: document.referrer,
      ...eventData
    };

    // Send to Google Analytics if available
    gtag('event', eventName, eventData);

    // Store locally for analysis
    this.storeEventLocally(event);

    // Send to server (if endpoint exists)
    this.sendToServer(event);

    console.log('Analytics Event:', event);
  }

  // Track page views
  trackPageView(path: string, title: string) {
    this.trackEvent('page_view', {
      page_path: path,
      page_title: title,
      timestamp: new Date().toISOString()
    });

    // Google Analytics page view
    gtag('config', 'GA_TRACKING_ID', {
      page_path: path,
      page_title: title
    });
  }

  // Track form submissions
  trackFormSubmission(formName: string, formData: Record<string, any>) {
    this.trackEvent('form_submission', {
      form_name: formName,
      form_data: formData,
      timestamp: new Date().toISOString()
    });
  }

  // Track button clicks
  trackButtonClick(buttonName: string, context: string) {
    this.trackEvent('button_click', {
      button_name: buttonName,
      context: context,
      timestamp: new Date().toISOString()
    });
  }

  // Track file downloads
  trackDownload(fileName: string, fileType: string) {
    this.trackEvent('file_download', {
      file_name: fileName,
      file_type: fileType,
      timestamp: new Date().toISOString()
    });
  }

  // Track search queries
  trackSearch(query: string, resultsCount: number) {
    this.trackEvent('search', {
      search_query: query,
      results_count: resultsCount,
      timestamp: new Date().toISOString()
    });
  }

  // Track quote requests
  trackQuoteRequest(quoteType: string, estimatedValue: string) {
    this.trackEvent('quote_request', {
      quote_type: quoteType,
      estimated_value: estimatedValue,
      timestamp: new Date().toISOString()
    });
  }

  private storeEventLocally(event: any) {
    try {
      const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
      events.push(event);
      
      // Keep only last 100 events to avoid storage overflow
      if (events.length > 100) {
        events.splice(0, events.length - 100);
      }
      
      localStorage.setItem('analytics_events', JSON.stringify(events));
    } catch (error) {
      console.warn('Failed to store analytics event locally:', error);
    }
  }

  private async sendToServer(event: any) {
    try {
      // Replace with your analytics endpoint
      const analyticsEndpoint = '/api/analytics';
      
      await fetch(analyticsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      });
    } catch (error) {
      // Silently fail - don't log to avoid console spam
    }
  }

  // Get analytics summary
  getAnalyticsSummary() {
    try {
      const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
      const summary = {
        total_events: events.length,
        session_id: this.sessionId,
        user_id: this.userId,
        session_duration: Date.now() - this.startTime,
        page_views: events.filter((e: any) => e.event_name === 'page_view').length,
        form_submissions: events.filter((e: any) => e.event_name === 'form_submission').length,
        button_clicks: events.filter((e: any) => e.event_name === 'button_click').length
      };
      return summary;
    } catch (error) {
      return null;
    }
  }
}

// React component for analytics tracking
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const analytics = AnalyticsService.getInstance();
    
    // Track page view on route change
    analytics.trackPageView(location.pathname, document.title);
  }, [location]);

  useEffect(() => {
    // Initialize Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_TRACKING_ID', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AnalyticsTracker;