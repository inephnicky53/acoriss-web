'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { AnimationType } from '@/types/enums';
import { Target, Eye, Heart } from 'lucide-react';

export const MissionVisionSection: React.FC = () => {
  const items = [
    {
      icon: Target,
      title: 'Notre Mission',
      description:
        'Accompagner les entreprises, organismes et institutions dans leur développement et leur organisation. Nous offrons des solutions de conseil multi-spécialisées, des services de paiement innovants et des prestations automobiles de qualité pour simplifier la vie de nos clients en RDC.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Eye,
      title: 'Notre Vision',
      description:
        'Devenir le cabinet de conseil de référence en RDC et en Afrique centrale, reconnu pour son expertise multi-sectorielle, son savoir-faire méthodologique et sa capacité à porter des projets de toutes tailles avec efficacité et innovation.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Heart,
      title: 'Notre Engagement',
      description:
        'Proposer des solutions concrètes et adaptées au contexte de chaque client. Garantir une qualité optimale des livrables grâce à notre dispositif d\'Assurance Qualité et offrir un environnement de travail collaboratif qui permet à chacun de s\'épanouir.',
      color: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <Section id="mission-vision-section" background="white" padding="large">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <AnimatedSection
              key={index}
              animation={AnimationType.SLIDE_UP}
              delay={index * 150}
            >
              <Card className="h-full text-center">
                <div className="space-y-6">
                  <div className="inline-block">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 hover:rotate-6 transition-all duration-300`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          );
        })}
        </div>
      </div>
    </Section>
  );
};

