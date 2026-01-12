'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RDCARD_FEATURES } from '@/lib/data';
import { CreditCard, BadgeCheck, Clock, Zap } from 'lucide-react';

const iconMap = {
  'credit-card': CreditCard,
  'id-card': BadgeCheck,
  clock: Clock,
  zap: Zap,
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="rdcard-features" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
            Fonctionnalités
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              Tout ce dont vous avez besoin
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RdCard simplifie vos paiements quotidiens avec des fonctionnalités innovantes
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {RDCARD_FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-lg">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-6 inline-flex">
                    <Icon className="w-12 h-12 text-primary-600" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Feature - Sécurité et Fiabilité */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Sécurité et Fiabilité Maximales
            </h3>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              RdCard utilise les technologies de sécurité les plus avancées pour protéger vos données
              et vos transactions. Cryptage de niveau bancaire, authentification biométrique et
              surveillance 24/7 pour votre tranquillité d'esprit.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {['Cryptage SSL', 'Biométrie', 'Surveillance 24/7', 'Conformité PCI DSS', 'Backup automatique'].map((feature) => (
                <div
                  key={feature}
                  className="px-6 py-3 bg-white rounded-full shadow-md text-gray-700 font-medium"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

