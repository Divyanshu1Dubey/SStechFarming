import React, { useEffect, useRef, useState } from 'react';
import './SimpleAnimations.css';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  delay = 0,
  className = ""
}) => {
  return (
    <div 
      className={`simple-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'visible' : ''} from-${direction} ${className}`}
    >
      {children}
    </div>
  );
};

export const GlowCard: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  glowColor?: string;
}> = ({ children, className = "", glowColor = "#4caf50" }) => {
  return (
    <div 
      className={`glow-card ${className}`}
      style={{ '--glow-color': glowColor } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export const PulseButton: React.FC<{ 
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}> = ({ children, onClick, className = "", variant = 'primary' }) => {
  return (
    <button
      className={`pulse-button pulse-${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const RotatingIcon: React.FC<{ 
  children: React.ReactNode; 
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'clockwise' | 'counterclockwise';
  className?: string;
}> = ({ children, speed = 'normal', direction = 'clockwise', className = "" }) => {
  return (
    <div className={`rotating-icon speed-${speed} ${direction} ${className}`}>
      {children}
    </div>
  );
};

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  startDelay?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  className = "",
  startDelay = 0
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!isStarted || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, isStarted]);

  return (
    <span className={`typewriter ${className}`}>
      {displayText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<CounterProps> = ({
  target,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = ""
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration, isVisible]);

  return (
    <span ref={ref} className={`animated-counter ${className}`}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export const GradientText: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  colors?: string[];
}> = ({ children, className = "", colors = ['#2e7d32', '#4caf50', '#81c784'] }) => {
  return (
    <span 
      className={`gradient-text ${className}`}
      style={{ 
        '--gradient-colors': colors.join(', ') 
      } as React.CSSProperties}
    >
      {children}
    </span>
  );
};

export const ShimmerCard: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={`shimmer-card ${className}`}>
      <div className="shimmer-overlay"></div>
      {children}
    </div>
  );
};

export const ParallaxElement: React.FC<{ 
  children: React.ReactNode; 
  speed?: number;
  className?: string;
}> = ({ children, speed = 0.5, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      element.style.transform = `translateY(${parallax}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`parallax-element ${className}`}>
      {children}
    </div>
  );
};

export const MorphingShape: React.FC<{ 
  size?: number;
  color?: string;
  className?: string;
}> = ({ size = 100, color = '#4caf50', className = "" }) => {
  return (
    <div 
      className={`morphing-shape ${className}`}
      style={{
        width: size,
        height: size,
        '--morph-color': color
      } as React.CSSProperties}
    />
  );
};

export const ParticleField: React.FC<{ 
  particleCount?: number;
  color?: string;
  className?: string;
}> = ({ particleCount = 20, color = '#4caf50', className = "" }) => {
  const particles = Array.from({ length: particleCount }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        backgroundColor: color,
        animationDuration: `${6 + Math.random() * 4}s`
      }}
    />
  ));

  return (
    <div className={`particle-field ${className}`}>
      {particles}
    </div>
  );
};

export const NeonBorder: React.FC<{ 
  children: React.ReactNode; 
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}> = ({ children, color = '#4caf50', intensity = 'medium', className = "" }) => {
  return (
    <div 
      className={`neon-border intensity-${intensity} ${className}`}
      style={{ '--neon-color': color } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export const LoadingSpinner: React.FC<{ 
  size?: number;
  color?: string;
  className?: string;
}> = ({ size = 40, color = '#4caf50', className = "" }) => {
  return (
    <div 
      className={`loading-spinner ${className}`}
      style={{
        width: size,
        height: size,
        '--spinner-color': color
      } as React.CSSProperties}
    />
  );
};

export const WaveBackground: React.FC<{ 
  waveColor?: string;
  className?: string;
}> = ({ waveColor = '#4caf50', className = "" }) => {
  return (
    <div className={`wave-background ${className}`}>
      <svg
        className="wave-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={waveColor}
          opacity="0.2"
        />
        <path
          d="M1200,120H0V0s100,20,300,0S700,80,1200,40Z"
          fill={waveColor}
          opacity="0.1"
        />
      </svg>
    </div>
  );
};