'use client';

import React, { useState } from 'react';
import { RDCARD_FAQ } from '@/lib/data';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="rdcard-faq" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-primary-600 bg-clip-text text-transparent">
              Questions Fréquentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur la RdCard
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {RDCARD_FAQ.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
                >
                  <div className="flex-1 pr-4">
                    {/* Category Badge */}
                    <div className="inline-block px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium mb-2">
                      {faq.category}
                    </div>
                    {/* Question */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  {/* Icon */}
                  <div
                    className={cn(
                      'flex-shrink-0 w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center transition-transform duration-300',
                      isOpen && 'rotate-180'
                    )}
                  >
                    <ChevronDown className="w-5 h-5 text-primary-600" />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Vous avez d'autres questions ?
          </p>
          <button
            onClick={() => (window.location.href = '/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Contactez-nous
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

