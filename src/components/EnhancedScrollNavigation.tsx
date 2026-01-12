'use client';

import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
    Coffee,
    GraduationCap,
    TrendingUp,
    Star,
    Award,
    Heart,
    Users,
    Clock,
    LucideIcon
} from 'lucide-react';

interface NavigationSection {
    id: string;
    icon: string; // Nom de l'icône au lieu du composant
    label: string;
    color: string;
}

interface EnhancedScrollNavigationProps {
    sections?: NavigationSection[];
}

const EnhancedScrollNavigation: React.FC<EnhancedScrollNavigationProps> = ({sections: propSections}) => {
    const [isNavVisible, setIsNavVisible] = useState(true);

    // Map des icônes disponibles
    const iconMap: Record<string, LucideIcon> = {
        Coffee,
        GraduationCap,
        TrendingUp,
        Star,
        Award,
        Heart,
        Users,
        Clock,
    };

    // Détecter la proximité du footer pour cacher la navigation
    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer');
            if (footer) {
                const footerTop = footer.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                // Cacher la navigation quand le footer est visible (à 200px près)
                setIsNavVisible(footerTop > windowHeight - 200);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Vérifier au chargement initial
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Sections par défaut si aucune n'est fournie
    const defaultSections: NavigationSection[] = [
        {
            id: 'next-section',
            icon: 'Coffee',
            label: 'Club',
            color: 'from-yellow-400 to-yellow-500'
        },
        {
            id: 'services-section',
            icon: 'GraduationCap',
            label: 'Services',
            color: 'from-purple-400 to-purple-500'
        },
        {
            id: 'impact-section',
            icon: 'TrendingUp',
            label: 'Impact',
            color: 'from-green-400 to-green-500'
        },
        {
            id: 'testimonials-section',
            icon: 'Star',
            label: 'Témoignages',
            color: 'from-blue-400 to-blue-500'
        },
        {
            id: 'stats-section',
            icon: 'Award',
            label: 'Statistiques',
            color: 'from-pink-400 to-pink-500'
        }
    ];

    const sections = propSections || defaultSections;

    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(`#${sectionId}`) as HTMLElement;
        if (element) {
            const headerHeight = 64;
            const elementPosition = element.offsetTop - headerHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <AnimatePresence>
            {isNavVisible && (
                <motion.div
                    className="fixed bottom-8 left-0 right-0 z-50 flex justify-center"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 50}}
                    transition={{duration: 0.3}}
                >
                    {/* Horizontal Navigation Menu */}
                    <motion.div
                        className="flex items-center space-x-4 bg-white/90 backdrop-blur-md rounded-full shadow-xl px-3 py-3 border border-purple-100"
                        initial={{scale: 0.8, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{duration: 0.1, ease: "easeOut"}}
                    >
                        {sections.map((section, index) => {
                            const Icon = iconMap[section.icon] || Coffee; // Fallback vers Coffee si l'icône n'existe pas
                            return (
                                <motion.button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="group relative"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: index * 0.1}}
                                    whileHover={{scale: 1.1, y: -5}}
                                    whileTap={{scale: 0.95}}
                                >
                                    {/* Tooltip */}
                                    <div
                                        className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                        {section.label}
                                        <div
                                            className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                                    </div>

                                    {/* Icon Button */}
                                    <div
                                        className={`w-10 h-10 bg-gradient-to-r ${section.color} rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:shadow-xl transition-shadow duration-200`}>
                                        <Icon className="w-4 h-4 text-white"/>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default EnhancedScrollNavigation;

