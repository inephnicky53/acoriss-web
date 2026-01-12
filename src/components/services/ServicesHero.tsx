'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ButtonVariant, ButtonSize } from '@/types/enums';
import { ArrowRight, Sparkles } from 'lucide-react';

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-sky-200 mb-6 animate-fadeIn">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-gray-700">
              Solutions complètes pour votre entreprise
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slideUp">
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Nos Services
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-slideUp animation-delay-200">
            Des solutions innovantes pour simplifier vos paiements, encaissements,
            et services automobiles en RDC.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideUp animation-delay-400">
            <Button
              variant={ButtonVariant.PRIMARY}
              size={ButtonSize.LARGE}
              onClick={() => {
                const element = document.getElementById('services-list');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Découvrir nos services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant={ButtonVariant.OUTLINE}
              size={ButtonSize.LARGE}
              onClick={() => (window.location.href = '/contact')}
            >
              Nous contacter
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fadeIn animation-delay-600">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">5</div>
              <div className="text-sm text-gray-600">Services principaux</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support disponible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Sécurisé</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">5000+</div>
              <div className="text-sm text-gray-600">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

