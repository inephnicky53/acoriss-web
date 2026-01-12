'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimationType } from '@/types/enums';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

const animationClasses: Record<AnimationType, string> = {
  [AnimationType.FADE_IN]: 'fade-in',
  [AnimationType.SLIDE_UP]: 'slide-up',
  [AnimationType.SLIDE_LEFT]: 'animate-[slideLeft_0.6s_ease-out]',
  [AnimationType.SLIDE_RIGHT]: 'animate-[slideRight_0.6s_ease-out]',
  [AnimationType.SCALE]: 'animate-[scale_0.6s_ease-out]',
  [AnimationType.BOUNCE]: 'animate-[bounce_1s_ease-in-out_infinite]',
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = AnimationType.FADE_IN,
  delay = 0,
  className,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-600',
        !isVisible && 'opacity-0 translate-y-8',
        isVisible && animationClasses[animation],
        className
      )}
    >
      {children}
    </div>
  );
};

