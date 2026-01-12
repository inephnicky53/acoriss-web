'use client';

import React from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export const ContactHero: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6 animate-fadeIn">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">
              Nous sommes là pour vous
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slideUp">
            Contactez-nous
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed animate-slideUp animation-delay-200">
            Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner
          </p>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slideUp animation-delay-400">
            <a
              href="tel:+243828280000"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20"
            >
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Téléphone</div>
              <div className="text-sm text-white/80">+243 828 280 000</div>
            </a>

            <a
              href="mailto:contact@acoriss.com"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/20"
            >
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Email</div>
              <div className="text-sm text-white/80">contact@acoriss.com</div>
            </a>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <MapPin className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Adresse</div>
              <div className="text-sm text-white/80">35, Av. Kalemie, Gombe, Kinshasa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

