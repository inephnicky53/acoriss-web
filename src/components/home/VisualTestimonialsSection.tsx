'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marie Kalala',
    role: 'Directrice Générale',
    company: 'TechCongo Solutions',
    image: 'https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?w=400&h=400&fit=crop',
    quote: 'Acoriss a transformé notre façon de gérer les paiements. La RdCard est devenue indispensable pour notre entreprise.',
    rating: 5
  },
  {
    id: 2,
    name: 'Jean-Pierre Mbala',
    role: 'Entrepreneur',
    company: 'Mbala Commerce',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    quote: 'Un service exceptionnel et une équipe toujours à l\'écoute. Je recommande vivement leurs solutions de conseil.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sarah Nkulu',
    role: 'Responsable Financière',
    company: 'Kinshasa Trading',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    quote: 'La sécurité et la rapidité des transactions nous ont convaincus. Acoriss est un partenaire de confiance.',
    rating: 5
  }
];

export const VisualTestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-white rounded-full shadow-md text-sm font-medium mb-4"
          >
            <span className="text-primary-600">⭐ Témoignages clients</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              Ils nous font confiance
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Découvrez ce que nos clients disent de nos services
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center opacity-50">
                  <Quote className="w-6 h-6 text-primary-500" />
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full blur-md opacity-50"></div>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-primary-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed flex-1 italic">
                  "{testimonial.quote}"
                </p>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-white rounded-2xl shadow-lg">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary-600">500+</p>
              <p className="text-sm text-gray-600">Clients satisfaits</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-secondary-500">4.9/5</p>
              <p className="text-sm text-gray-600">Note moyenne</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600">98%</p>
              <p className="text-sm text-gray-600">Recommandations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

