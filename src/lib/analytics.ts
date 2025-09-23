// Advanced Analytics Service for User Tracking
class AnalyticsService {
  private sessionId: string;
  private userId: string | null;
  private events: any[] = [];
  private startTime: number;
  private lastActivity: number;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.userId = this.getUserId();
    this.startTime = Date.now();
    this.lastActivity = Date.now();
    this.initializeTracking();
  }

  // Generate unique session ID
  private generateSessionId(): string {
    return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Get or generate user ID
  private getUserId(): string | null {
    let userId = localStorage.getItem('ss_user_id');
    if (!userId) {
      userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('ss_user_id', userId);
    }
    return userId;
  }

  // Initialize comprehensive tracking
  private initializeTracking() {
    this.trackPageLoad();
    this.trackUserInteractions();
    this.trackScrollBehavior();
    this.trackMouseMovement();
    this.trackDeviceInfo();
    this.trackTimeOnSite();
    this.trackExitIntent();
  }

  // Track page loads and navigation
  trackPageLoad() {
    const pageData = {
      event: 'page_load',
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userId: this.userId,
      page: window.location.pathname,
      url: window.location.href,
      title: document.title,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      screenResolution: `${screen.width}x${screen.height}`,
      viewportSize: `${window.innerWidth}x${window.innerHeight}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
    
    this.logEvent(pageData);
  }

  // Track user interactions (clicks, form submissions, etc.)
  trackUserInteractions() {
    // Click tracking
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const clickData = {
        event: 'click',
        timestamp: Date.now(),
        sessionId: this.sessionId,
        userId: this.userId,
        element: target.tagName.toLowerCase(),
        className: target.className,
        id: target.id,
        text: target.textContent?.trim().substring(0, 100),
        x: event.clientX,
        y: event.clientY,
        page: window.location.pathname
      };
      this.logEvent(clickData);
    });

    // Form interactions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const formData = {
        event: 'form_submit',
        timestamp: Date.now(),
        sessionId: this.sessionId,
        userId: this.userId,
        formId: form.id,
        formClass: form.className,
        action: form.action,
        method: form.method,
        page: window.location.pathname
      };
      this.logEvent(formData);
    });

    // Input focus tracking
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        const inputData = {
          event: 'input_focus',
          timestamp: Date.now(),
          sessionId: this.sessionId,
          userId: this.userId,
          inputType: (target as HTMLInputElement).type || 'textarea',
          inputId: target.id,
          inputName: (target as HTMLInputElement).name,
          page: window.location.pathname
        };
        this.logEvent(inputData);
      }
    });
  }

  // Track scroll behavior
  trackScrollBehavior() {
    let maxScroll = 0;
    let scrollEvents = 0;

    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
      }
      scrollEvents++;

      // Log significant scroll milestones
      if ([25, 50, 75, 90].includes(scrollPercent)) {
        const scrollData = {
          event: 'scroll_milestone',
          timestamp: Date.now(),
          sessionId: this.sessionId,
          userId: this.userId,
          scrollPercent: scrollPercent,
          page: window.location.pathname
        };
        this.logEvent(scrollData);
      }
    });

    // Track final scroll data on page unload
    window.addEventListener('beforeunload', () => {
      const scrollData = {
        event: 'scroll_summary',
        timestamp: Date.now(),
        sessionId: this.sessionId,
        userId: this.userId,
        maxScrollPercent: maxScroll,
        totalScrollEvents: scrollEvents,
        page: window.location.pathname
      };
      this.logEvent(scrollData);
    });
  }

  // Track mouse movement patterns (heatmap data)
  trackMouseMovement() {
    let mouseEvents = 0;
    let lastMouseTime = 0;

    document.addEventListener('mousemove', (event) => {
      mouseEvents++;
      const now = Date.now();
      
      // Sample mouse movement (every 100 events to avoid spam)
      if (mouseEvents % 100 === 0) {
        const mouseData = {
          event: 'mouse_movement_sample',
          timestamp: now,
          sessionId: this.sessionId,
          userId: this.userId,
          x: event.clientX,
          y: event.clientY,
          page: window.location.pathname,
          totalMoves: mouseEvents
        };
        this.logEvent(mouseData);
      }

      lastMouseTime = now;
      this.lastActivity = now;
    });
  }

  // Track device and browser information
  trackDeviceInfo() {
    const deviceData = {
      event: 'device_info',
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userId: this.userId,
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      cookieEnabled: navigator.cookieEnabled,
      language: navigator.language,
      languages: navigator.languages,
      onLine: navigator.onLine,
      screenWidth: screen.width,
      screenHeight: screen.height,
      screenColorDepth: screen.colorDepth,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      connection: (navigator as any).connection?.effectiveType || 'unknown'
    };
    this.logEvent(deviceData);
  }

  // Track time spent on site
  trackTimeOnSite() {
    setInterval(() => {
      const now = Date.now();
      const timeData = {
        event: 'time_on_site',
        timestamp: now,
        sessionId: this.sessionId,
        userId: this.userId,
        totalTime: now - this.startTime,
        lastActivity: this.lastActivity,
        isActive: (now - this.lastActivity) < 30000, // Active if activity in last 30 seconds
        page: window.location.pathname
      };
      this.logEvent(timeData);
    }, 60000); // Every minute
  }

  // Track exit intent
  trackExitIntent() {
    document.addEventListener('mouseleave', (event) => {
      if (event.clientY <= 0) {
        const exitData = {
          event: 'exit_intent',
          timestamp: Date.now(),
          sessionId: this.sessionId,
          userId: this.userId,
          timeOnPage: Date.now() - this.startTime,
          page: window.location.pathname
        };
        this.logEvent(exitData);
      }
    });

    window.addEventListener('beforeunload', () => {
      const exitData = {
        event: 'page_exit',
        timestamp: Date.now(),
        sessionId: this.sessionId,
        userId: this.userId,
        totalSessionTime: Date.now() - this.startTime,
        page: window.location.pathname
      };
      this.logEvent(exitData);
    });
  }

  // Track custom events
  trackCustomEvent(eventName: string, data: any = {}) {
    const customEvent = {
      event: eventName,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      userId: this.userId,
      page: window.location.pathname,
      ...data
    };
    this.logEvent(customEvent);
  }

  // Track product interactions
  trackProductView(productName: string, productType: string, price?: string) {
    this.trackCustomEvent('product_view', {
      productName,
      productType,
      price
    });
  }

  // Track language changes
  trackLanguageChange(fromLang: string, toLang: string) {
    this.trackCustomEvent('language_change', {
      fromLanguage: fromLang,
      toLanguage: toLang
    });
  }

  // Track contact form interactions
  trackContactForm(action: string, formData?: any) {
    this.trackCustomEvent('contact_form', {
      action,
      formData
    });
  }

  // Track navigation menu usage
  trackMenuUsage(menuItem: string, menuType: string) {
    this.trackCustomEvent('menu_usage', {
      menuItem,
      menuType
    });
  }

  // Log events (store locally and optionally send to server)
  private logEvent(event: any) {
    // Store in memory
    this.events.push(event);

    // Store in localStorage (limited storage)
    const localEvents = JSON.parse(localStorage.getItem('ss_analytics_events') || '[]');
    localEvents.push(event);
    
    // Keep only last 1000 events in localStorage
    if (localEvents.length > 1000) {
      localEvents.splice(0, localEvents.length - 1000);
    }
    localStorage.setItem('ss_analytics_events', JSON.stringify(localEvents));

    // Send to console for development
    console.log('Analytics Event:', event);

    // TODO: Send to analytics server
    // this.sendToServer(event);
  }

  // Send events to analytics server (placeholder)
  private async sendToServer(event: any) {
    try {
      // Replace with your analytics endpoint
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event)
      });
    } catch (error) {
      console.error('Failed to send analytics:', error);
    }
  }

  // Get analytics summary
  getAnalyticsSummary() {
    const events = JSON.parse(localStorage.getItem('ss_analytics_events') || '[]');
    const pageViews = events.filter(e => e.event === 'page_load').length;
    const clicks = events.filter(e => e.event === 'click').length;
    const formSubmissions = events.filter(e => e.event === 'form_submit').length;
    const totalTime = events
      .filter(e => e.event === 'time_on_site')
      .reduce((total, e) => Math.max(total, e.totalTime || 0), 0);

    return {
      sessionId: this.sessionId,
      userId: this.userId,
      totalEvents: events.length,
      pageViews,
      clicks,
      formSubmissions,
      totalTimeOnSite: totalTime,
      lastActivity: new Date(this.lastActivity),
      sessionStart: new Date(this.startTime)
    };
  }

  // Export analytics data
  exportAnalytics() {
    const events = JSON.parse(localStorage.getItem('ss_analytics_events') || '[]');
    const summary = this.getAnalyticsSummary();
    
    const exportData = {
      summary,
      events,
      exportTime: new Date().toISOString()
    };

    // Create downloadable file
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ss-analytics-${this.sessionId}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

// Initialize analytics
const analytics = new AnalyticsService();

export default analytics;
export { AnalyticsService };