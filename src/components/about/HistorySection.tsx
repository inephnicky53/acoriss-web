'use client';

import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { AnimationType } from '@/types/enums';
import { Building2, Users, Briefcase, TrendingUp } from 'lucide-react';

export const HistorySection: React.FC = () => {
  const highlights = [
    {
      icon: Building2,
      title: 'Cabinet Multi-spécialisé',
      description: 'Expertise dans la plupart des secteurs d\'activités économiques',
    },
    {
      icon: Users,
      title: '+10 Collaborateurs',
      description: 'Une équipe de consultants hautement qualifiés',
    },
    {
      icon: Briefcase,
      title: 'Savoir-faire Transverse',
      description: 'Méthodologie efficace pour projets de toutes tailles',
    },
    {
      icon: TrendingUp,
      title: 'Croissance Continue',
      description: 'Politique de recrutement ambitieuse et carnet de commandes riche',
    },
  ];

  return (
    <Section id="history-section" background="white" padding="large">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Notre Histoire"
          title="Historique et À propos"
          description="Découvrez l'histoire d'Acoriss et ce qui fait notre force aujourd'hui"
        />
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Histoire principale avec image */}
        <AnimatedSection animation={AnimationType.SLIDE_UP}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full">
                <span className="text-yellow-700 font-semibold text-sm">Fondation d'Acoriss</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Une histoire de <span className="gradient-text">compétences unies</span>
              </h3>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Les Associés de <span className="font-bold text-primary-600">ACORISS</span> ont uni leurs compétences et leurs expériences dans le Conseil en Développement et Organisation des entreprises pour fonder le cabinet <span className="font-bold">ACORISS Conseil</span>.
                </p>
                <p>
                  Progressivement, les associés ont su s'entourer de nouveaux talents pour faire grandir la structure. Aujourd'hui, ACORISS Conseil est constituée d'un groupe de <span className="font-bold text-primary-600">plus de 10 collaborateurs très qualifiés</span>.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Équipe Acoriss en réunion"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-8 z-20">
                <p className="text-white font-semibold text-lg">Notre équipe de consultants experts</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Points clés - Pleine largeur */}
        <div className="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation={AnimationType.SCALE}
                  delay={index * 100}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-primary-100 hover:border-primary-300 h-full">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Compétences avec image inversée */}
        <AnimatedSection animation={AnimationType.SLIDE_UP} delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image à gauche */}
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Expertise multi-sectorielle Acoriss"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-8 z-20">
                <p className="text-white font-semibold text-lg">Expertise dans tous les secteurs</p>
              </div>
            </div>

            {/* Texte à droite */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-secondary-100 rounded-full">
                <span className="text-secondary-700 font-semibold text-sm">Cabinet Multi-spécialisé</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Notre <span className="gradient-text">Expertise</span>
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                ACORISS Conseil est un <span className="font-bold">cabinet de conseil multi-spécialisé</span>. Il réunit au sein d'une même structure :
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md border-l-4 border-primary-500">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Compétences Métier</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Expertise dans la plupart des secteurs d'activités économiques, organismes, associations, institutions…
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md border-l-4 border-secondary-500">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Savoir-faire Méthodologique</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Méthodologie transverse permettant de porter avec efficacité des projets de toutes tailles en environnements métier, digitaux ou systèmes d'information.
                    </p>
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

