'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ButtonVariant, ButtonSize } from '@/types/enums';
import { ArrowRight, Sparkles, CreditCard, Zap, Shield, Building, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

// Définition des slides
const slides = [
  {
    id: 1,
    badge: 'Innovation Made in Congo 🇨🇩',
    title: 'Simplifiez vos',
    highlightedWords: ['paiements', 'services'],
    subtitle: 'Avec Acoriss & RdCard — la carte tout-en-un qui révolutionne vos transactions en RDC.',
    features: [
      { icon: CreditCard, text: 'Paiement sécurisé', color: 'text-primary-500' },
      { icon: Zap, text: 'Transactions rapides', color: 'text-secondary-400' }
    ],
    cta: { primary: 'Découvrir RdCard', secondary: 'Demander une démo' },
    stats: [
      { value: '500+', label: 'Clients satisfaits' },
      { value: '10K+', label: 'Transactions/mois' },
      { value: '24/7', label: 'Support client' }
    ],
    bgGradient: 'from-primary-50 via-white to-secondary-50',
    cardGradient: 'from-primary-500 to-secondary-400',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    badge: 'Sécurité Maximale 🔒',
    title: 'Vos transactions en',
    highlightedWords: ['toute sécurité'],
    subtitle: 'RdCard utilise les dernières technologies de cryptage pour protéger vos données et vos paiements.',
    features: [
      { icon: Shield, text: 'Cryptage 256-bit', color: 'text-green-500' },
      { icon: CreditCard, text: 'Conformité PCI-DSS', color: 'text-blue-500' }
    ],
    cta: { primary: 'En savoir plus', secondary: 'Contactez-nous' },
    stats: [
      { value: '100%', label: 'Sécurisé' },
      { value: '0', label: 'Fraude détectée' },
      { value: '99.9%', label: 'Disponibilité' }
    ],
    bgGradient: 'from-green-50 via-white to-blue-50',
    cardGradient: 'from-green-500 to-blue-500',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    badge: 'Conseil & Expertise 💼',
    title: 'Développez votre',
    highlightedWords: ['entreprise', 'efficacement'],
    subtitle: 'Acoriss vous accompagne dans l\'organisation et le développement de votre entreprise avec des solutions sur mesure.',
    features: [
      { icon: Building, text: 'Organisation entreprise', color: 'text-primary-500' },
      { icon: TrendingUp, text: 'Transformation digitale', color: 'text-secondary-500' }
    ],
    cta: { primary: 'Nos services conseil', secondary: 'Demander un diagnostic' },
    stats: [
      { value: '100+', label: 'Entreprises accompagnées' },
      { value: '20+', label: 'Services conseil' },
      { value: '95%', label: 'Satisfaction client' }
    ],
    bgGradient: 'from-purple-50 via-white to-primary-50',
    cardGradient: 'from-purple-500 to-primary-500',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop'
  }
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className={`relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br ${slide.bgGradient} transition-colors duration-1000`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container-custom relative z-10">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md"
              >
                <Sparkles className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-semibold text-gray-700">
                  {slide.badge}
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                {slide.title}{' '}
                {slide.highlightedWords.map((word, index) => (
                  <React.Fragment key={index}>
                    <span className="gradient-text">{word}</span>
                    {index < slide.highlightedWords.length - 1 && ' et vos '}
                  </React.Fragment>
                ))}
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 leading-relaxed"
              >
                {slide.subtitle}
              </motion.p>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                {slide.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-sm font-medium text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href={currentSlide === 2 ? "/services" : "/rdcard"}>
                  <Button
                    variant={ButtonVariant.PRIMARY}
                    size={ButtonSize.LARGE}
                    icon={<ArrowRight className="w-5 h-5" />}
                    iconPosition="right"
                  >
                    {slide.cta.primary}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant={ButtonVariant.OUTLINE} size={ButtonSize.LARGE}>
                    {slide.cta.secondary}
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-8 justify-center lg:justify-start pt-4"
              >
                {slide.stats.map((stat, index) => (
                  <React.Fragment key={index}>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                    {index < slide.stats.length - 1 && <div className="w-px h-12 bg-gray-300" />}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Hero Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10">
                {/* Card Mockup */}
                <div className="relative mx-auto max-w-md">
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.cardGradient} rounded-3xl blur-2xl opacity-30 animate-pulse`} />
                  <div className={`relative bg-gradient-to-br ${slide.cardGradient} rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          {currentSlide === 2 ? (
                            <Building className="w-6 h-6 text-white" />
                          ) : currentSlide === 1 ? (
                            <Shield className="w-6 h-6 text-white" />
                          ) : (
                            <CreditCard className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <span className="text-white font-bold text-xl">
                          {currentSlide === 2 ? 'Acoriss Conseil' : 'RdCard'}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-10 bg-white/20 backdrop-blur-sm rounded-lg" />
                        <div className="h-6 bg-white/10 backdrop-blur-sm rounded w-2/3" />
                      </div>
                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <p className="text-white/70 text-xs">Titulaire</p>
                          <p className="text-white font-semibold">Jean Mukendi</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/70 text-xs">Expire</p>
                          <p className="text-white font-semibold">12/25</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-white rounded-2xl shadow-xl p-4 animate-bounce">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-500">✓</p>
                    <p className="text-xs text-gray-600 mt-1">
                      {currentSlide === 1 ? 'Sécurisé' : currentSlide === 2 ? 'Fiable' : 'Sécurisé'}
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white rounded-2xl shadow-xl p-4 animate-bounce animation-delay-2000">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-secondary-400">⚡</p>
                    <p className="text-xs text-gray-600 mt-1">Rapide</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-32 left-0 right-0 z-20">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors duration-200"
              aria-label="Slide précédent"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 bg-primary-500'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Aller au slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors duration-200"
              aria-label="Slide suivant"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

