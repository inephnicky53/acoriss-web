'use client';

import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { AnimationType } from '@/types/enums';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {subtitle && (
            <AnimatedSection animation={AnimationType.FADE_IN}>
              <p className="text-primary-500 font-semibold text-sm md:text-base uppercase tracking-wider">
                {subtitle}
              </p>
            </AnimatedSection>
          )}

          <AnimatedSection animation={AnimationType.SLIDE_UP} delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              {title}
            </h1>
          </AnimatedSection>

          {description && (
            <AnimatedSection animation={AnimationType.SLIDE_UP} delay={200}>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                {description}
              </p>
            </AnimatedSection>
          )}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

