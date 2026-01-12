'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ButtonVariant, ButtonSize } from '@/types/enums';
import { Sparkles, ArrowRight } from 'lucide-react';

export const RdCardHero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10 h-full flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start flex-1">
          {/* Left Content */}
          <div className="text-white mt-40">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6 animate-fadeIn">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">
                Innovation Acoriss
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slideUp">
              RdCard
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-6 animate-slideUp animation-delay-200">
              Votre solution de paiement intelligente
            </p>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-slideUp animation-delay-400">
              Une carte rechargeable pour tous vos paiements quotidiens.
              Simple, sécurisée et acceptée chez nos partenaires agréés.
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-8 animate-slideUp animation-delay-600">
              {[
                'Paiements sécurisés chez nos partenaires',
                'Rechargeable instantanément',
                'Transactions traçables en temps réel',
                'Acceptée en restauration, transport, commerce...',
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-slideUp animation-delay-800">
              <Button
                variant={ButtonVariant.SECONDARY}
                size={ButtonSize.LARGE}
                onClick={() => {
                  const element = document.getElementById('rdcard-features');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Découvrir RdCard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant={ButtonVariant.OUTLINE}
                size={ButtonSize.LARGE}
                onClick={() => (window.location.href = '/contact')}
                className="!text-white !border-white hover:!bg-white/10"
              >
                Commander maintenant
              </Button>
            </div>
          </div>

          {/* Right - Card Visual */}
          <div className="relative flex items-end justify-center animate-fadeIn animation-delay-1000 h-full w-full">
            <div className="relative w-full flex items-end justify-center">
              {/* Cercles animés en arrière-plan */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 pointer-events-none z-0">
                {/* Cercle rose pale 70px */}
                <div
                  className="absolute w-[80px] h-[80px] bg-pink-500 rounded-full animate-bounce"
                  style={{
                    bottom: '300px',
                    left: '-30px',
                    animationDuration: '3s'
                  }}
                ></div>

                {/* Cercle mauve pale 100px */}
                <div
                  className="absolute w-[100px] h-[100px] bg-purple-500 rounded-full animate-bounce"
                  style={{
                    bottom: '370px',
                    right: '-10px',
                    animationDuration: '4s',
                    animationDelay: '0.5s'
                  }}
                ></div>
              </div>

              {/* Image RdCard */}
              <div className="relative group z-10 w-full max-w-xs sm:max-w-sm md:max-w-md">
                <Image
                  src="/images/FilleRdCard.png"
                  alt="RdCard - Solution de paiement prépayé"
                  width={450}
                  height={500}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

