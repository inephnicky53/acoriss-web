'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Globe, Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ButtonVariant, ButtonSize } from '@/types/enums';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-secondary-500 to-purple-600 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Rejoignez la révolution RdCard
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Découvrez tous les avantages de RdCard et téléchargez l'application pour commencer
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Site Web Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Site Officiel RdCard
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Découvrez toutes les informations sur RdCard, les types de cartes disponibles, 
                nos partenaires et bien plus encore.
              </p>
              <Button
                variant={ButtonVariant.PRIMARY}
                size={ButtonSize.LARGE}
                onClick={() => window.open('https://www.rdcard.net', '_blank')}
                className="w-full"
              >
                Visiter www.rdcard.net
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Application Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary-500 to-purple-500 rounded-2xl mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Application Mobile
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Gérez votre RdCard, rechargez votre solde, consultez vos transactions 
                et bien plus depuis votre smartphone.
              </p>
              <Button
                variant={ButtonVariant.SECONDARY}
                size={ButtonSize.LARGE}
                onClick={() => window.open('https://app.rdcard.net', '_blank')}
                className="w-full"
              >
                Télécharger l'application
                <Download className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎉</span>
              </div>
              <div className="text-left">
                <p className="font-bold text-white text-lg">Disponible maintenant</p>
                <p className="text-sm text-white/80">
                  Rejoignez des milliers d'utilisateurs satisfaits
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

