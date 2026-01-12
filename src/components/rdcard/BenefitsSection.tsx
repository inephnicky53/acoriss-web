'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, HeadphonesIcon, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    id: 1,
    icon: Shield,
    title: 'Sécurité maximale',
    description: 'Vos données sont protégées par un cryptage de niveau bancaire',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Transactions instantanées',
    description: 'Payez en quelques secondes, où que vous soyez',
  },
  {
    id: 3,
    icon: Globe,
    title: 'Acceptée partout',
    description: 'Utilisez votre RdCard chez tous nos partenaires en RDC',
  },
  {
    id: 4,
    icon: HeadphonesIcon,
    title: 'Support 24/7',
    description: 'Notre équipe est disponible à tout moment pour vous aider',
  },
  {
    id: 5,
    icon: TrendingUp,
    title: 'Contrôle des dépenses',
    description: 'Suivez vos transactions en temps réel via l\'application',
  },
  {
    id: 6,
    icon: Users,
    title: 'Solution entreprise',
    description: 'Gérez les cartes de vos employés facilement',
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Avantages
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-primary-600 bg-clip-text text-transparent">
              Pourquoi choisir RdCard ?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez tous les avantages de la carte la plus innovante de RDC
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-primary-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-purple-100 to-primary-100 rounded-2xl p-6 inline-flex">
                    <Icon className="w-10 h-10 text-purple-600" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              RdCard en chiffres
            </h3>
            <p className="text-xl text-white/90">
              La confiance de milliers d'utilisateurs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-white/80">Cartes actives</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-white/80">Points d'acceptation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-white/80">Disponibilité</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support client</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

