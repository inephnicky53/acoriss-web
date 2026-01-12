'use client';

import React from 'react';
import Image from 'next/image';
import { SERVICES } from '@/lib/data';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ButtonVariant, ButtonSize } from '@/types/enums';

// Mapping des images pour chaque service (liens externes)
const serviceImages: Record<string, string> = {
  encaissement: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
  paiement: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
  change: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&h=600&fit=crop',
  organisation: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
  developpement: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  rdcard: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
  numerique: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  fintech: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop',
};

export const ServiceDetailSection: React.FC = () => {
  return (
    <section id="services-list" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              Services Principaux
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos solutions complètes pour répondre à tous vos besoins
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            const imageUrl = serviceImages[service.id] || '/images/services/default.jpg';

            return (
              <div
                key={service.id}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl overflow-hidden shadow-2xl">
                      <div className="relative w-full h-[400px]">
                        <Image
                          src={imageUrl}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 w-full">
                  <div className="max-w-xl">
                    {/* Badge */}
                    <div className="inline-block px-4 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
                      Service #{index + 1}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant={ButtonVariant.PRIMARY}
                      size={ButtonSize.MEDIUM}
                      onClick={() => (window.location.href = '/contact')}
                    >
                      En savoir plus
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

