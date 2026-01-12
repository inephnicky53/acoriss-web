'use client';

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export const MapSection: React.FC = () => {
  // Adresse: Silikin Village, N° 63, Avenue Colonel Mondjiba, Commune de la Gombe, Kinshasa - RDC
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.4753878197216!2d15.2754746!3d-4.3214220999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a333195cfa37f%3A0xd115031d3fd488e9!2sSilikin%20Village!5e0!3m2!1sfr!2scd!4v1768223175841!5m2!1sfr!2scd`;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
            Localisation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              Venez nous rendre visite
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos bureaux sont situés au cœur de Kinshasa, dans le quartier de Gombe
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Map Placeholder with gradient overlay */}
          <div className="relative aspect-[16/9] bg-gradient-to-br from-primary-100 to-secondary-100">
            {/* Google Maps Embed */}
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>

            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Acoriss Sarl</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Silikin Village, N° 63<br />
                    Avenue Colonel Mondjiba<br />
                    Commune de la Gombe, Kinshasa - RDC
                  </p>
                  <a
                    href="https://maps.app.goo.gl/sdtiZ3DdTUvWU7HXA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-sky-700 font-medium transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Obtenir l'itinéraire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-md">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Facile d'accès</h3>
            <p className="text-gray-600 text-sm">
              Situé dans le quartier d'affaires de Gombe, facilement accessible en voiture ou en transport en commun
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-md">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <span className="text-2xl">🅿️</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Parking disponible</h3>
            <p className="text-gray-600 text-sm">
              Parking sécurisé gratuit pour nos visiteurs et clients
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-md">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <span className="text-2xl">♿</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Accessible PMR</h3>
            <p className="text-gray-600 text-sm">
              Nos locaux sont accessibles aux personnes à mobilité réduite
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

