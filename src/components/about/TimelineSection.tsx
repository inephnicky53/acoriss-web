'use client';

import React from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { AnimationType } from '@/types/enums';
import { Calendar } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const timeline = [
    {
      year: '2021',
      title: 'Création d\'Acoriss',
      description:
        'Lancement d\'Acoriss Sarl avec une vision claire : révolutionner les services de conseil et de paiement en RDC.',
    },
    {
      year: '2022',
      title: 'Expansion des services',
      description:
        'Ajout des services de change, retraits bancaires et développement de notre expertise multi-sectorielle.',
    },
    {
      year: '2023',
      title: 'Services automobiles',
      description:
        'Diversification avec le lancement de nos services automobiles : lavage, transport, location et garage.',
    },
    {
      year: '2024',
      title: 'Innovation RdCard',
      description:
        'Développement et lancement de la RdCard, notre carte prépayée multifonction innovante.',
    },
    {
      year: '2025',
      title: 'Leader du marché',
      description:
        'Acoriss devient le leader des solutions de conseil et de paiement modernes en RDC avec plus de 10 collaborateurs qualifiés.',
    },
  ];

  return (
    <Section id="timeline-section" background="gray" padding="large">
      <SectionHeader
        subtitle="Notre Parcours"
        title="Une histoire de croissance et d'innovation"
        description="Découvrez les étapes clés qui ont marqué notre évolution."
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 to-pink-500 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <AnimatedSection
                key={index}
                animation={AnimationType.SLIDE_RIGHT}
                delay={index * 100}
              >
                <div className="relative flex items-start gap-8">
                  {/* Year Badge */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg relative z-10">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl font-bold text-pink-500">
                        {item.year}
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-pink-200 to-transparent" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

