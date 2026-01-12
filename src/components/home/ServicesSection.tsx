'use client';

import React from 'react';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SERVICES } from '@/lib/data';
import { Wallet, CreditCard, Banknote, Building, TrendingUp, ArrowRight } from 'lucide-react';
import { AnimationType } from '@/types/enums';

const iconMap = {
  wallet: Wallet,
  'credit-card': CreditCard,
  banknote: Banknote,
  building: Building,
  'trending-up': TrendingUp,
};

export const ServicesSection: React.FC = () => {
  return (
    <Section id="services" background="white" padding="large">
      <SectionHeader
        subtitle="Nos Services"
        title="Des solutions adaptées à vos besoins"
        description="Découvrez notre gamme complète de services conçus pour simplifier votre quotidien et optimiser vos transactions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap] || Wallet;
          return (
            <AnimatedSection
              key={service.id}
              animation={AnimationType.SLIDE_UP}
              delay={index * 100}
            >
              <Card className="h-full group cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>

                <ul className="space-y-2 mt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:gap-3 transition-all duration-300"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Voir tous nos services
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </Section>
  );
};

