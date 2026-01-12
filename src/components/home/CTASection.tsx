'use client';

import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ButtonVariant, ButtonSize } from '@/types/enums';
import { ArrowRight, Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export const CTASection: React.FC = () => {
  return (
    <Section background="white" padding="large">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 p-12 md:p-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Prêt à révolutionner vos paiements ?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Rejoignez des centaines d'entreprises et particuliers qui font confiance
            à Acoriss pour leurs transactions quotidiennes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button
                variant={ButtonVariant.SECONDARY}
                size={ButtonSize.LARGE}
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl"
              >
                Demander une démo gratuite
              </Button>
            </Link>
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
              <Button
                variant={ButtonVariant.OUTLINE}
                size={ButtonSize.LARGE}
                icon={<Phone className="w-5 h-5" />}
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Appelez-nous maintenant
              </Button>
            </a>
          </div>

          <div className="pt-8 flex items-center justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Support 24/7</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Activation rapide</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Sans engagement</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

