import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './ThreeDAnimations.css';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  delay = 0,
  duration = 3,
  yOffset = 20
}) => {
  return (
    <motion.div
      className="floating-element"
      initial={{ y: 0 }}
      animate={{ 
        y: [-yOffset, yOffset, -yOffset],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

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
    <div ref={ref} className={`parallax-section ${className}`}>
      {children}
    </div>
  );
};

export const RotatingCard: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ""
}) => {
  return (
    <motion.div
      className={`rotating-card ${className}`}
      whileHover={{
        rotateY: 180,
        scale: 1.05,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut"
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="card-front">
        {children}
      </div>
      <div className="card-back">
        <div className="card-back-content">
          <div className="text-lg font-bold mb-4">Premium Quality</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Organic Certified</span>
              <span className="text-green-500">✓</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Fresh Daily</span>
              <span className="text-green-500">✓</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Sustainable</span>
              <span className="text-green-500">✓</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const MorphingBackground: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`morphing-background ${className}`}>
      <div className="morphing-shape shape-1"></div>
      <div className="morphing-shape shape-2"></div>
      <div className="morphing-shape shape-3"></div>
    </div>
  );
};

export const PulsingButton: React.FC<{ 
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
}> = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      className={`pulsing-button ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(76, 175, 80, 0.7)",
          "0 0 0 10px rgba(76, 175, 80, 0)",
          "0 0 0 0 rgba(76, 175, 80, 0.7)"
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.button>
  );
};

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export const GlowingOrb: React.FC<{ size?: number; color?: string; className?: string }> = ({
  size = 100,
  color = "#4caf50",
  className = ""
}) => {
  return (
    <motion.div
      className={`glowing-orb ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}40, transparent)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export const TypewriterEffect: React.FC<{ 
  text: string; 
  speed?: number; 
  className?: string;
  onComplete?: () => void;
}> = ({ text, speed = 100, className = "", onComplete }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span className={`typewriter-text ${className}`}>
      {displayText}
      <motion.span
        className="cursor"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        |
      </motion.span>
    </span>
  );
};

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  duration = 2,
  suffix = "",
  prefix = "",
  className = ""
}) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
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
  }, [target, duration, isInView]);

  return (
    <span ref={ref} className={`animated-counter ${className}`}>
      {prefix}{count}{suffix}
    </span>
  );
};

export const HolographicCard: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className = "" }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0.5, y: 0.5 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`holographic-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateY(${(mousePosition.x - 0.5) * 30}deg) rotateX(${(mousePosition.y - 0.5) * -30}deg)`,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="holographic-overlay"></div>
      {children}
    </motion.div>
  );
};