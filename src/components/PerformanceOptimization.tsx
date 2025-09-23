import React, { lazy, Suspense, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

// Lazy load components for better performance
export const LazyAnalyticsDashboard = lazy(() => import('./AnalyticsDashboard'));
export const LazyCatalog = lazy(() => import('./Catalog'));
export const LazyRequestQuote = lazy(() => import('./RequestQuote'));
export const LazyHydroponicsInstallation = lazy(() => import('./HydroponicsInstallation'));
export const LazyBulkOrders = lazy(() => import('./BulkOrders'));
export const LazyCustomPackaging = lazy(() => import('./CustomPackaging'));

// Loading component
const LoadingSpinner = ({ message = "Loading..." }: { message?: string }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-agri-growth/10">
    <div className="text-center">
      <Loader2 className="w-16 h-16 text-agri-primary mx-auto mb-4 animate-spin" />
      <h2 className="text-xl font-semibold mb-2">{message}</h2>
      <p className="text-muted-foreground">Please wait while we prepare the content</p>
    </div>
  </div>
);

// Performance optimization utilities
export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private imageCache = new Map<string, string>();
  private observers = new Map<string, IntersectionObserver>();

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  // Lazy load images with intersection observer
  lazyLoadImage(img: HTMLImageElement, src: string) {
    if (!('IntersectionObserver' in window)) {
      img.src = src;
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement;
          target.src = src;
          target.classList.add('fade-in');
          observer.unobserve(target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    observer.observe(img);
    this.observers.set(src, observer);
  }

  // Preload critical resources
  preloadCriticalResources() {
    const criticalImages = [
      '/src/assets/hero-mushroom-farm.jpg',
      '/src/assets/mushroom-products.jpg',
      '/lovable-uploads/8dedc6fe-2fb9-4f3a-9de6-ae8978d311d3.png'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }

  // Optimize images with WebP format support
  getOptimizedImageSrc(src: string, quality: number = 80): string {
    if (this.imageCache.has(src)) {
      return this.imageCache.get(src)!;
    }

    // Check WebP support
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const supportsWebP = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;

    let optimizedSrc = src;
    if (supportsWebP && !src.includes('.webp')) {
      // In a real implementation, you would have WebP versions of images
      // For now, we'll just use the original src
      optimizedSrc = src;
    }

    this.imageCache.set(src, optimizedSrc);
    return optimizedSrc;
  }

  // Debounce function for search inputs
  debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Throttle function for scroll events
  throttle<T extends (...args: any[]) => void>(func: T, limit: number): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Memory cleanup
  cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    this.imageCache.clear();
  }

  // Performance monitoring
  measurePerformance(name: string, fn: () => void) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    
    // Send performance data to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'timing_complete', {
        name: name,
        value: Math.round(end - start)
      });
    }
  }

  // Bundle size analysis (development only)
  analyzeBundleSize() {
    if (process.env.NODE_ENV === 'development') {
      // Log bundle information
      const scripts = Array.from(document.querySelectorAll('script[src]'));
      const totalSize = scripts.reduce((size, script) => {
        // This is a simplified calculation
        return size + (script as HTMLScriptElement).src.length;
      }, 0);
      
      console.log('Estimated bundle size:', totalSize, 'bytes');
      console.log('Number of script files:', scripts.length);
    }
  }
}

// React component wrapper for lazy loading with suspense
export const LazyComponentWrapper: React.FC<{
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  fallback?: React.ReactNode;
  [key: string]: any;
}> = ({ component: Component, fallback = <LoadingSpinner />, ...props }) => {
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  const optimizer = PerformanceOptimizer.getInstance();

  const measureRender = (componentName: string) => {
    useEffect(() => {
      const start = performance.now();
      return () => {
        const end = performance.now();
        optimizer.measurePerformance(`${componentName}_render`, () => {});
        console.log(`${componentName} render time: ${end - start}ms`);
      };
    });
  };

  return { measureRender };
};

// Image optimization component
export const OptimizedImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  quality?: number;
  [key: string]: any;
}> = ({ src, alt, className = '', lazy = true, quality = 80, ...props }) => {
  const optimizer = PerformanceOptimizer.getInstance();
  const optimizedSrc = optimizer.getOptimizedImageSrc(src, quality);

  useEffect(() => {
    if (lazy) {
      const img = document.querySelector(`img[alt="${alt}"]`) as HTMLImageElement;
      if (img) {
        optimizer.lazyLoadImage(img, optimizedSrc);
      }
    }
  }, [src, alt, lazy, optimizedSrc]);

  return (
    <img
      src={lazy ? undefined : optimizedSrc}
      data-src={lazy ? optimizedSrc : undefined}
      alt={alt}
      className={`${className} ${lazy ? 'lazy-image' : ''}`}
      loading={lazy ? 'lazy' : 'eager'}
      {...props}
    />
  );
};

export default {
  LazyAnalyticsDashboard,
  LazyCatalog,
  LazyRequestQuote,
  LazyHydroponicsInstallation,
  LazyBulkOrders,
  LazyCustomPackaging,
  LoadingSpinner,
  LazyComponentWrapper,
  OptimizedImage,
  PerformanceOptimizer
};