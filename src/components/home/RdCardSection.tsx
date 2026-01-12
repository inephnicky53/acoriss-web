'use client';

import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ButtonVariant, ButtonSize, AnimationType } from '@/types/enums';
import { CreditCard, Shield, Zap, Check, ArrowRight } from 'lucide-react';

export const RdCardSection: React.FC = () => {
  const features = [
    'Paiement prépayé sécurisé',
    'Pièce d\'identité numérique',
  ];

  return (
    <Section background="gradient" padding="large" id="rdcard">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <AnimatedSection animation={AnimationType.SLIDE_RIGHT}>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
              <CreditCard className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-semibold text-gray-700">
                Nouveau Produit
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Découvrez la{' '}
              <span className="gradient-text">RdCard</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              La carte tout-en-un qui révolutionne vos paiements, votre identité
              numérique et la gestion de présence. Une innovation 100% congolaise.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary-500" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/rdcard">
                <Button
                  variant={ButtonVariant.PRIMARY}
                  size={ButtonSize.LARGE}
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  En savoir plus
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant={ButtonVariant.OUTLINE} size={ButtonSize.LARGE}>
                  Commander maintenant
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">100% Sécurisé</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-secondary-400" />
                <span className="text-sm text-gray-600">Activation rapide</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Right Content - Card Visual */}
        <AnimatedSection animation={AnimationType.SLIDE_LEFT}>
          <div className="relative">
            {/* Main Card */}
            <div className="relative z-10 max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-3xl blur-3xl opacity-40 animate-pulse" />
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-8">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-white/60 text-xs uppercase tracking-wider">
                        RdCard Premium
                      </p>
                      <p className="text-white font-bold text-xl">Acoriss</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Chip */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-10 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2 bg-white/20 rounded w-full" />
                      <div className="h-2 bg-white/10 rounded w-2/3" />
                    </div>
                  </div>

                  {/* Card Number */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="h-3 bg-white/30 rounded w-16" />
                      <div className="h-3 bg-white/30 rounded w-16" />
                      <div className="h-3 bg-white/30 rounded w-16" />
                      <div className="h-3 bg-white/30 rounded w-16" />
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-end justify-between pt-4">
                    <div>
                      <p className="text-white/50 text-xs mb-1">Titulaire</p>
                      <p className="text-white font-semibold">JEAN MUKENDI</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/50 text-xs mb-1">Expire</p>
                      <p className="text-white font-semibold">12/25</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Phone Mockup */}
            <div className="absolute -bottom-12 -right-8 w-48 h-96 bg-white rounded-3xl shadow-2xl p-4 hidden lg:block transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-4 flex flex-col">
                <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
                <div className="flex-1 space-y-3">
                  <div className="h-20 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl" />
                  <div className="space-y-2">
                    <div className="h-12 bg-white rounded-lg shadow-sm" />
                    <div className="h-12 bg-white rounded-lg shadow-sm" />
                    <div className="h-12 bg-white rounded-lg shadow-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
};

