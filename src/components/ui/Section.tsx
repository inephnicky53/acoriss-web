'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient' | 'dark';
  padding?: 'none' | 'small' | 'medium' | 'large';
  id?: string;
}

const backgroundStyles = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  gradient: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50',
  dark: 'bg-gray-900 text-white',
};

const paddingStyles = {
  none: '',
  small: 'py-12 md:py-16',
  medium: 'py-16 md:py-24',
  large: 'py-24 md:py-32 lg:py-40',
};

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  background = 'white',
  padding = 'medium',
  id,
}) => {
  return (
    <section
      id={id}
      className={cn(
        backgroundStyles[background],
        paddingStyles[padding],
        className
      )}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  centered = true,
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        centered && 'text-center max-w-3xl mx-auto',
        className
      )}
    >
      {subtitle && (
        <p className="text-primary-500 font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

