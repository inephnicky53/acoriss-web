'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RDCARD_TYPES } from '@/lib/data';
import { Star, Award, Building, Users, Briefcase, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  star: Star,
  award: Award,
  building: Building,
  users: Users,
  briefcase: Briefcase,
};

export const CardTypesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
          >
            Choisissez votre carte
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              Types de cartes RdCard
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Chaque carte RdCard est conçue pour répondre à des besoins spécifiques avec des plafonds adaptés
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RDCARD_TYPES.map((cardType, index) => {
            const Icon = iconMap[cardType.icon as keyof typeof iconMap] || Star;
            
            return (
              <motion.div
                key={cardType.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col ${
                  cardType.recommended ? 'ring-2 ring-primary-500' : ''
                }`}>
                  {/* Recommended Badge */}
                  {cardType.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        ⭐ Recommandée
                      </div>
                    </div>
                  )}

                  {/* Card Header */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${cardType.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{cardType.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cardType.description}</p>
                  </div>

                  {/* Daily Limit */}
                  <div className="mb-6 p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl">
                    <p className="text-sm text-gray-600 mb-1">Plafond journalier</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {cardType.dailyLimit === 0 ? 'Illimité' : `${cardType.dailyLimit} USD`}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {cardType.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                      cardType.recommended
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg hover:scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Demander cette carte
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Security Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🔒</span>
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">Plafond de sécurité minimum</p>
              <p className="text-sm text-gray-600">
                Toutes les cartes ont un plafond de base de 50 USD pour garantir la sécurité
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

