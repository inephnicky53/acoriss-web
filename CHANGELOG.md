# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

---

## [1.0.0] - 2025-11-07

### 🎉 Version initiale

Première version du site web Acoriss avec Next.js 14+.

### ✨ Ajouté

#### Infrastructure
- Configuration Next.js 14+ avec App Router
- Configuration TypeScript stricte
- Configuration Tailwind CSS avec thème personnalisé
- Structure de dossiers modulaire (app, components, lib, types)

#### Types et données
- Énumérations TypeScript (ServiceType, RdCardFeature, etc.)
- Interfaces TypeScript complètes
- Données structurées (services, témoignages, FAQ, équipe)
- Constantes (contact, navigation, SEO)
- Fonctions utilitaires (formatage, validation, etc.)

#### Composants UI
- Button avec 4 variants et 3 sizes
- Card avec header, content, footer
- Section avec 4 backgrounds et 4 paddings
- AnimatedSection avec 6 types d'animations
- PageHeader pour les en-têtes de pages

#### Layout
- Layout principal avec métadonnées SEO
- Navigation responsive avec menu mobile
- Footer complet avec liens et contact
- Styles globaux avec animations CSS
- Fonts Google (Inter, Poppins)

#### Page d'accueil (/)
- Hero Section avec animations et CTA
- Services Section avec 4 services
- RdCard Section avec présentation produit
- Stats Section avec compteurs animés
- Testimonials Section avec 3 témoignages
- CTA Section finale

#### Page À propos (/a-propos)
- Mission/Vision Section
- Values Section avec 4 valeurs
- Team Section avec 3 profils
- Timeline Section avec 6 étapes

#### Page Services (/services) ✅ NOUVEAU
- ServicesHero avec stats animées
- ServiceDetailSection avec 4 services détaillés
- AutoServicesSection avec 4 services auto et prix
- Design alterné gauche/droite
- CTA pour devis personnalisé

#### Page RdCard (/rdcard) ✅ NOUVEAU
- RdCardHero avec carte 3D interactive
- FeaturesSection avec 3 fonctionnalités principales
- HowItWorksSection avec processus en 4 étapes
- BenefitsSection avec 6 avantages
- FAQSection avec accordion animé
- Section intégration ERP
- Stats en chiffres (10K+ cartes, 500+ points)

#### Page Contact (/contact) ✅ NOUVEAU
- ContactHero avec quick contact cards
- ContactForm avec validation complète
- ContactInfo avec réseaux sociaux
- MapSection avec Google Maps intégré
- Infos pratiques (parking, accessibilité, horaires)
- 5 sujets de contact disponibles
- Animation de succès après envoi

#### Documentation
- README.md avec instructions complètes
- QUICK_START.md pour démarrage rapide
- SUMMARY.md avec résumé détaillé
- COMMIT_PROPOSAL.md avec propositions de commits
- GIT_COMMITS.md avec stratégie de versioning
- VERSION.md avec détails de la version
- CHANGELOG.md pour suivre les versions
- .env.example pour les variables d'environnement
- LANCEMENT_REUSSI.md avec guide de lancement
- SITE_COMPLET.md avec récapitulatif final

### 🎨 Design
- Palette de couleurs Acoriss (Vert #1c9292, Bleu #46a1c5)
- Typographies (Poppins pour titres, Inter pour texte)
- Animations scroll reveal
- Hover effects et micro-interactions
- Design mobile-first responsive

### ⚡ Performance
- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- Code splitting automatique
- Optimisation des fonts

### 🔍 SEO
- Métadonnées complètes par page
- Open Graph et Twitter Cards
- Structure HTML sémantique
- URLs propres et descriptives

### 📊 Statistiques
- 60+ fichiers créés
- 47+ composants React
- 5000+ lignes de code
- 5 pages complètes (100%)
- 22 sections au total
- 15 documents de documentation

---

## [À venir]

### [1.1.0] - Prévue pour décembre 2025

#### Planifié
- Optimisation des images avec next/image
- Ajout des vraies photos
- Backend pour formulaire de contact
- Validation côté serveur
- Envoi d'emails automatiques
- Tests unitaires avec Jest
- Tests E2E avec Playwright

### [1.2.0] - Prévue pour janvier 2026

#### Planifié
- Sitemap.xml automatique
- Robots.txt
- Tests de performance Lighthouse
- Amélioration du score SEO
- Google Analytics
- Optimisation des performances

### [2.0.0] - Prévue pour mars 2026

#### Planifié
- Version anglaise complète
- Système i18n Next.js
- Sélecteur de langue
- Traduction de tout le contenu
- URLs multilingues

### [2.1.0] - Prévue pour avril 2026

#### Planifié
- Système de blog/actualités
- CMS headless (Sanity ou Contentful)
- Pages dynamiques pour articles
- Catégories et tags
- Recherche d'articles

---

## Types de changements

- `✨ Ajouté` : Nouvelles fonctionnalités
- `🔄 Modifié` : Changements dans les fonctionnalités existantes
- `🗑️ Déprécié` : Fonctionnalités bientôt supprimées
- `🔥 Supprimé` : Fonctionnalités supprimées
- `🐛 Corrigé` : Corrections de bugs
- `🔒 Sécurité` : Corrections de vulnérabilités

---

## Liens

- [Site web](https://www.acoriss.com)
- [Documentation](./README.md)
- [Guide de démarrage](./QUICK_START.md)

---

**Maintenu par l'équipe Acoriss Dev**

