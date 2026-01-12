'use client';

import React from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
};

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Contact Details Card */}
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Informations de contact</h3>

        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">Adresse</div>
              <div className="text-gray-600">{CONTACT_INFO.address}</div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-secondary-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">Téléphone</div>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">Email</div>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-1">Horaires</div>
              <div className="text-gray-600">
                <div>Lundi - Vendredi : 8h00 - 17h00</div>
                <div>Samedi : 9h00 - 13h00</div>
                <div>Dimanche : Fermé</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Card */}
      <div className="bg-gradient-to-br from-purple-50 to-primary-50 rounded-3xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Suivez-nous</h3>
        <p className="text-gray-600 mb-6">
          Restez connectés avec nous sur les réseaux sociaux pour les dernières actualités et offres
        </p>

        <div className="flex flex-wrap gap-4">
          {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
            const Icon = socialIcons[platform as keyof typeof socialIcons];
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <Icon className="w-6 h-6 text-gray-600 group-hover:text-primary-600 transition-colors" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Quick Actions Card */}
      <div className="bg-gradient-to-br from-primary-600 to-secondary-500 rounded-3xl p-8 shadow-lg text-white">
        <h3 className="text-2xl font-bold mb-4">Besoin d'aide immédiate ?</h3>
        <p className="text-white/90 mb-6">
          Notre équipe de support est disponible 24/7 pour répondre à vos questions
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-xl px-6 py-3 text-center font-semibold border border-white/30"
          >
            Appeler maintenant
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-xl px-6 py-3 text-center font-semibold border border-white/30"
          >
            Envoyer un email
          </a>
        </div>
      </div>
    </div>
  );
};

