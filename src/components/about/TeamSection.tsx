'use client';

import React from 'react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TEAM_MEMBERS } from '@/lib/data';
import { AnimationType } from '@/types/enums';
import { Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export const TeamSection: React.FC = () => {
  return (
    <Section id="team-section" background="white" padding="large">
      <SectionHeader
        subtitle="Notre Équipe"
        title="Les experts derrière Acoriss"
        description="Une équipe passionnée et expérimentée, dédiée à votre succès."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((member, index) => (
          <AnimatedSection
            key={member.id}
            animation={AnimationType.SLIDE_UP}
            delay={index * 150}
          >
            <Card className="text-center group overflow-hidden">
              {/* Avatar */}
              <div className="relative mb-6 -mx-6 -mt-6">
                <div className="relative w-full h-80 bg-gradient-to-br from-blue-400 to-blue-500 overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.avatar ?? '/images/team/default.png'}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-primary-500 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>

              {/* Social Links */}
              {member.social && (
                <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-100">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-500 flex items-center justify-center transition-colors duration-300 group/icon"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 group-hover/icon:text-white" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-secondary-400 flex items-center justify-center transition-colors duration-300 group/icon"
                    >
                      <Mail className="w-5 h-5 text-gray-600 group-hover/icon:text-white" />
                    </a>
                  )}
                </div>
              )}
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};

