'use client';

import React from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TESTIMONIALS } from '@/lib/data';
import { AnimationType } from '@/types/enums';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <Section background="gray" padding="large" id="testimonials">
      <SectionHeader
        subtitle="Témoignages"
        title="Ce que disent nos clients"
        description="Découvrez les expériences de nos clients satisfaits qui ont transformé leur gestion de paiements avec Acoriss."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <AnimatedSection
            key={testimonial.id}
            animation={AnimationType.SLIDE_UP}
            delay={index * 150}
          >
            <Card className="h-full relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center opacity-50">
                <Quote className="w-6 h-6 text-primary-500" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary-400 text-secondary-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};

