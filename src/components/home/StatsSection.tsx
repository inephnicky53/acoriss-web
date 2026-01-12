'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { AnimationType } from '@/types/enums';
import { Users, TrendingUp, Award, Clock } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Clients satisfaits',
      color: 'from-primary-400 to-primary-600',
    },
    {
      icon: TrendingUp,
      value: '10K+',
      label: 'Transactions mensuelles',
      color: 'from-secondary-400 to-secondary-600',
    },
    {
      icon: Award,
      value: '5+',
      label: 'Années d\'expérience',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support disponible',
      color: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <Section background="dark" padding="large">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <AnimatedSection
              key={index}
              animation={AnimationType.SCALE}
              delay={index * 100}
            >
              <div className="text-center group">
                <div className="relative inline-block mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-lg">{stat.label}</p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </Section>
  );
};

