'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, CreditCard, CheckCircle, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ButtonVariant, ButtonSize } from '@/types/enums';

const steps = [
  {
    id: 1,
    icon: UserPlus,
    title: 'Inscription',
    description: 'Remplissez le formulaire en ligne ou rendez-vous dans nos bureaux à Kinshasa',
    color: 'from-primary-500 to-primary-600',
  },
  {
    id: 2,
    icon: CreditCard,
    title: 'Recevez votre carte',
    description: 'Votre RdCard personnalisée vous est livrée sous 48h',
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    id: 3,
    icon: CheckCircle,
    title: 'Activez et rechargez',
    description: 'Activez votre carte et effectuez votre premier rechargement',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Profitez !',
    description: 'Utilisez votre RdCard partout où elle est acceptée',
    color: 'from-purple-500 to-purple-600',
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            Comment ça marche
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent">
              Obtenez votre RdCard en 4 étapes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus simple et rapide pour commencer à utiliser RdCard
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-secondary-200 to-green-200 -translate-y-1/2 z-0"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{step.id}</span>
                    </div>

                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-20`}></div>
                      <div className={`relative bg-gradient-to-br ${step.color} rounded-2xl p-6 inline-flex`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Découvrez tout sur RdCard
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Visitez notre site officiel pour plus d'informations et téléchargez l'application
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant={ButtonVariant.SECONDARY}
                size={ButtonSize.LARGE}
                onClick={() => window.open('https://www.rdcard.net', '_blank')}
              >
                Visiter www.rdcard.net
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant={ButtonVariant.OUTLINE}
                size={ButtonSize.LARGE}
                onClick={() => window.open('https://app.rdcard.net', '_blank')}
                className="!text-white !border-white hover:!bg-white/10"
              >
                Télécharger l'app
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

