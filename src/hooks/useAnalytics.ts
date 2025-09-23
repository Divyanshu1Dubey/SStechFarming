import { useCallback } from 'react';
import { AnalyticsService } from '@/components/Analytics';

export const useAnalytics = () => {
  const analytics = AnalyticsService.getInstance();

  const trackEvent = useCallback((eventName: string, eventData?: Record<string, any>) => {
    analytics.trackEvent(eventName, eventData);
  }, [analytics]);

  const trackPageView = useCallback((path: string, title: string) => {
    analytics.trackPageView(path, title);
  }, [analytics]);

  const trackFormSubmission = useCallback((formName: string, formData: Record<string, any>) => {
    analytics.trackFormSubmission(formName, formData);
  }, [analytics]);

  const trackButtonClick = useCallback((buttonName: string, context: string) => {
    analytics.trackButtonClick(buttonName, context);
  }, [analytics]);

  const trackDownload = useCallback((fileName: string, fileType: string) => {
    analytics.trackDownload(fileName, fileType);
  }, [analytics]);

  const trackSearch = useCallback((query: string, resultsCount: number) => {
    analytics.trackSearch(query, resultsCount);
  }, [analytics]);

  const trackQuoteRequest = useCallback((quoteType: string, estimatedValue: string) => {
    analytics.trackQuoteRequest(quoteType, estimatedValue);
  }, [analytics]);

  return {
    trackEvent,
    trackPageView,
    trackFormSubmission,
    trackButtonClick,
    trackDownload,
    trackSearch,
    trackQuoteRequest
  };
};