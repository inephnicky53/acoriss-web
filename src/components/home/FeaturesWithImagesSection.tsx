'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, Users, TrendingUp, Shield, Zap } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Solutions de Paiement Innovantes',
    description: 'Simplifiez vos transactions avec nos solutions de paiement modernes et sécurisées adaptées au marché congolais.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    icon: Zap,
    benefits: [
      'Paiements instantanés',
      'Frais réduits',
      'Support 24/7'
    ]
  },
  {
    id: 2,
    title: 'Accompagnement Professionnel',
    description: 'Notre équipe d\'experts vous accompagne dans la transformation digitale et l\'optimisation de vos processus.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
    icon: Users,
    benefits: [
      'Consultants expérimentés',
      'Solutions personnalisées',
      'Suivi continu'
    ]
  },
  {
    id: 3,
    title: 'Sécurité Garantie',
    description: 'Vos données et transactions sont protégées par les technologies de sécurité les plus avancées.',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop',
    icon: Shield,
    benefits: [
      'Cryptage de bout en bout',
      'Conformité internationale',
      'Authentification multi-facteurs'
    ]
  }
];

export const FeaturesWithImagesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
          >
            Pourquoi choisir Acoriss
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              Des solutions qui font la différence
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Découvrez comment Acoriss transforme les entreprises congolaises avec des solutions innovantes et un accompagnement de qualité
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="space-y-24">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={600}
                        height={400}
                        className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                      
                      {/* Floating Icon */}
                      <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 w-full space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

