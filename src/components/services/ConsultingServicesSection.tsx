'use client';

import React, { useState } from 'react';
import { CONSULTING_SERVICES } from '@/lib/data';
import {
  Search, Compass, FileText, RefreshCw, Users, Settings,
  Clipboard, ArrowRightCircle, Star, BookOpen, GitBranch,
  BarChart, Target, Shield, Award, MessageCircle, DollarSign,
  Server, Wrench, CheckCircle, Briefcase, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ButtonVariant, ButtonSize } from '@/types/enums';

const iconMap = {
  search: Search,
  compass: Compass,
  'file-text': FileText,
  'refresh-cw': RefreshCw,
  users: Users,
  settings: Settings,
  clipboard: Clipboard,
  'arrow-right-circle': ArrowRightCircle,
  star: Star,
  'book-open': BookOpen,
  'git-branch': GitBranch,
  'bar-chart': BarChart,
  target: Target,
  shield: Shield,
  award: Award,
  'message-circle': MessageCircle,
  'dollar-sign': DollarSign,
  server: Server,
  wrench: Wrench,
  'check-circle': CheckCircle,
  briefcase: Briefcase,
  zap: Zap,
};

export const ConsultingServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'organisation' | 'developpement' | 'all'>('all');

  const filteredServices = activeCategory === 'all' 
    ? CONSULTING_SERVICES 
    : CONSULTING_SERVICES.filter(service => service.category === activeCategory);

  const organisationServices = CONSULTING_SERVICES.filter(s => s.category === 'organisation');
  const developpementServices = CONSULTING_SERVICES.filter(s => s.category === 'developpement');

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Services de Conseil
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Expertise & Accompagnement
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solutions complètes pour l'organisation et le développement de votre entreprise
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-primary-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Tous les services ({CONSULTING_SERVICES.length})
          </button>
          <button
            onClick={() => setActiveCategory('organisation')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === 'organisation'
                ? 'bg-primary-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Organisation ({organisationServices.length})
          </button>
          <button
            onClick={() => setActiveCategory('developpement')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === 'developpement'
                ? 'bg-secondary-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Développement ({developpementServices.length})
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Settings;
            const isOrganisation = service.category === 'organisation';

            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-t-4"
                style={{
                  borderTopColor: isOrganisation ? '#1c9292' : '#46a1c5'
                }}
              >
                {/* Icon & Category Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="relative">
                    <div 
                      className="absolute inset-0 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"
                      style={{
                        background: isOrganisation 
                          ? 'linear-gradient(135deg, #1c9292, #46a1c5)' 
                          : 'linear-gradient(135deg, #46a1c5, #1c9292)'
                      }}
                    ></div>
                    <div 
                      className="relative rounded-xl p-3 flex items-center justify-center"
                      style={{
                        background: isOrganisation 
                          ? 'linear-gradient(135deg, rgba(28, 146, 146, 0.1), rgba(70, 161, 197, 0.1))' 
                          : 'linear-gradient(135deg, rgba(70, 161, 197, 0.1), rgba(28, 146, 146, 0.1))'
                      }}
                    >
                      <Icon 
                        className="w-8 h-8" 
                        style={{ color: isOrganisation ? '#1c9292' : '#46a1c5' }}
                      />
                    </div>
                  </div>
                  <span 
                    className="text-xs font-medium px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: isOrganisation ? 'rgba(28, 146, 146, 0.1)' : 'rgba(70, 161, 197, 0.1)',
                      color: isOrganisation ? '#1c9292' : '#46a1c5'
                    }}
                  >
                    {isOrganisation ? 'Organisation' : 'Développement'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* CTA Link */}
                <button
                  onClick={() => (window.location.href = '/contact')}
                  className="mt-4 text-sm font-medium hover:gap-2 transition-all inline-flex items-center gap-1 group/link"
                  style={{ color: isOrganisation ? '#1c9292' : '#46a1c5' }}
                >
                  En savoir plus
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl max-w-4xl mx-auto border-t-4 border-primary-500">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Besoin d'un accompagnement personnalisé ?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Nos experts sont à votre disposition pour analyser vos besoins et vous proposer des solutions sur mesure
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant={ButtonVariant.PRIMARY}
                size={ButtonSize.LARGE}
                onClick={() => (window.location.href = '/contact')}
              >
                Demander un diagnostic
              </Button>
              <Button
                variant={ButtonVariant.OUTLINE}
                size={ButtonSize.LARGE}
                onClick={() => (window.location.href = 'tel:+243828280000')}
              >
                Appeler maintenant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

