'use client';

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {Menu, X, CreditCard, Phone} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';
import {NAVIGATION} from '@/lib/constants';

const Header: React.FC = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fermer le menu mobile lors du changement de route
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname?.startsWith(href);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg'
                    : 'bg-white/80 backdrop-blur-md'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/logo.png"
                                alt="Acoriss Logo"
                                width={96}
                                height={96}
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {NAVIGATION.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                    isActive(item.href)
                                        ? 'text-primary-600 bg-primary-50'
                                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                                }`}
                            >
                                {item.label}
                                {isActive(item.href) && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                                        initial={false}
                                        transition={{type: 'spring', stiffness: 380, damping: 30}}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Buttons & Mobile Menu */}
                    <div className="flex items-center space-x-3">
                        {/* Contact Button - Hidden on mobile */}
                        <Link
                            href="/contact"
                            className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                        >
                            <Phone className="w-4 h-4"/>
                            <span>Contact</span>
                        </Link>

                        {/* RdCard CTA Button */}
                        <Link
                            href="/rdcard"
                            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                        >
                            <CreditCard className="w-4 h-4"/>
                            <span>Demander RdCard</span>
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.2}}
                        className="lg:hidden border-t border-gray-200 bg-white"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                            {NAVIGATION.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                                        isActive(item.href)
                                            ? 'text-primary-600 bg-primary-50'
                                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* Mobile CTA Buttons */}
                            <div className="pt-4 space-y-2 border-t border-gray-200">
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Phone className="w-4 h-4"/>
                                    <span>Nous contacter</span>
                                </Link>
                                <Link
                                    href="/rdcard"
                                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <CreditCard className="w-4 h-4"/>
                                    <span>Demander RdCard</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;