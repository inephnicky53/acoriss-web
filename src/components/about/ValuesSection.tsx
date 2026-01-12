'use client';

import React from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { AnimationType } from '@/types/enums';
import { Target, CheckCircle, Heart, TrendingUp } from 'lucide-react';

export const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Le Pragmatisme',
      description:
        'Nos consultants s\'adaptent au contexte de la mission qui leur est confiée. Ils s\'appuient sur leurs propres expériences mais savent aussi solliciter leurs collaborateurs. L\'objectif visé est alors de proposer des solutions concrètes, adaptées au contexte du client.',
    },
    {
      icon: CheckCircle,
      title: 'La Rigueur',
      description:
        'Notre équipe de consultants garantit à nos clients une qualité optimale des livrables rendus. Notre dispositif interne d\'Assurance Qualité est une illustration concrète de notre engagement : nos consultants en mission peuvent à tout moment solliciter leurs pairs pour obtenir des conseils sur les sujets traités.',
    },
    {
      icon: Heart,
      title: 'La Responsabilité',
      description:
        'Nos collaborateurs s\'engagent auprès de nos clients à délivrer une prestation de qualité en adéquation avec leurs attentes. Notre Direction s\'engage à offrir à ses équipes un environnement de travail de qualité et un management collaboratif pour permettre à chacun de s\'épanouir humainement et professionnellement.',
    },
    {
      icon: TrendingUp,
      title: 'Notre Force de Développement',
      description:
        'Nous menons une politique de recrutement ambitieuse pour honorer un carnet de commandes de plus en plus riche. De nouveaux référencements de premier ordre obtenus, s\'ajoutant à ceux que nous comptons déjà, sont venus récompenser notre implication durable auprès de nos clients.',
    },
  ];

  return (
    <Section id="values-section" background="gradient" padding="large">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Nos Valeurs et Nos Ambitions"
          title="Ce qui nous guide au quotidien"
          description="Des principes forts qui définissent notre identité et notre engagement envers nos clients."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <AnimatedSection
              key={index}
              animation={AnimationType.SCALE}
              delay={index * 100}
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border-t-4 border-green-400">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 pt-2">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-left">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          );
        })}
        </div>
      </div>
    </Section>
  );
};

