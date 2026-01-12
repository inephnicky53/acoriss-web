# 🔄 Propositions de Commits Git

## 📋 Stratégie de versioning

Voici les commits proposés pour versionner proprement tout le travail effectué.

---

## Commit 1️⃣ : Configuration Next.js

```bash
git add next.config.js tsconfig.app.json package.json next-env.d.ts tailwind.config.js
git commit -m "feat: configurer Next.js 14+ avec TypeScript et Tailwind CSS

- Ajouter next.config.js avec configuration i18n
- Mettre à jour tsconfig pour Next.js App Router
- Configurer package.json avec scripts Next.js
- Personnaliser tailwind.config.js avec thème Acoriss
- Ajouter next-env.d.ts pour les types Next.js

BREAKING CHANGE: Migration de Vite vers Next.js"
```

---

## Commit 2️⃣ : Types et énumérations

```bash
git add src/types/
git commit -m "feat: définir les types TypeScript et énumérations

- Créer enums.ts avec ServiceType, RdCardFeature, etc.
- Créer index.ts avec interfaces Service, Testimonial, etc.
- Définir les types pour toutes les entités métier
- Utiliser des enums pour les propriétés connues

Types créés:
- Service, AutoService, RdCardFeatureItem
- Testimonial, TeamMember, FAQItem
- ContactInfo, SocialLinks, SEOMetadata
- NavigationItem, Translation"
```

---

## Commit 3️⃣ : Utilitaires et données

```bash
git add src/lib/
git commit -m "feat: ajouter les utilitaires et données du projet

Utilitaires (utils.ts):
- cn() pour fusionner les classes Tailwind
- formatPhoneNumber(), isValidEmail()
- generateId(), delay(), truncateText()
- formatDate(), scrollToElement()

Constantes (constants.ts):
- CONTACT_INFO avec adresse et horaires
- SOCIAL_LINKS pour les réseaux sociaux
- NAVIGATION avec les routes principales
- DEFAULT_SEO avec métadonnées
- ANIMATION_CONFIG et BREAKPOINTS

Données (data.ts):
- SERVICES (4 services principaux)
- AUTO_SERVICES (4 services automobiles)
- RDCARD_FEATURES (4 fonctionnalités)
- TESTIMONIALS (3 témoignages)
- RDCARD_FAQ (6 questions)
- TEAM_MEMBERS (3 membres)"
```

---

## Commit 4️⃣ : Composants UI de base

```bash
git add src/components/ui/
git commit -m "feat: créer les composants UI réutilisables

Composants créés:
- Button.tsx avec 4 variants et 3 sizes
- Card.tsx avec CardHeader, CardTitle, CardDescription, etc.
- Section.tsx avec 4 backgrounds et 4 paddings
- AnimatedSection.tsx avec 6 types d'animations
- SectionHeader.tsx pour les en-têtes de sections

Fonctionnalités:
- Variants: PRIMARY, SECONDARY, OUTLINE, GHOST
- Animations: FADE_IN, SLIDE_UP, SLIDE_LEFT, etc.
- Responsive et accessible
- Hover effects et transitions"
```

---

## Commit 5️⃣ : Layout et styles globaux

```bash
git add src/app/layout.tsx src/app/globals.css
git commit -m "feat: implémenter le layout principal et styles globaux

Layout (layout.tsx):
- Configuration des métadonnées SEO
- Intégration des fonts Google (Inter, Poppins)
- Structure HTML avec Navigation et Footer
- Support Open Graph et Twitter Cards

Styles (globals.css):
- Configuration Tailwind avec @layer
- Variables CSS personnalisées
- Classes utilitaires (btn-primary, card-hover, etc.)
- Animations CSS (@keyframes)
- Scrollbar et selection personnalisées
- Responsive utilities"
```

---

## Commit 6️⃣ : Navigation et Footer

```bash
git add src/components/Navigation.tsx src/components/Footer.tsx
git commit -m "feat: créer la navigation responsive et le footer

Navigation:
- Top bar avec contact et adresse
- Navigation principale sticky
- Menu mobile avec overlay
- Active state sur la page courante
- Logo animé avec hover effect
- CTA 'Demander une démo'

Footer:
- 4 colonnes (About, Liens, Services, Contact)
- Logo et description
- Liens réseaux sociaux
- Informations de contact complètes
- Copyright et mentions légales
- Responsive grid layout"
```

---

## Commit 7️⃣ : Composants partagés

```bash
git add src/components/shared/
git commit -m "feat: ajouter les composants partagés

- PageHeader.tsx pour les en-têtes de pages
- Background avec pattern animé
- Wave divider SVG
- Support subtitle et description
- Animations d'apparition"
```

---

## Commit 8️⃣ : Page d'accueil - Hero et Services

```bash
git add src/app/page.tsx src/components/home/HeroSection.tsx src/components/home/ServicesSection.tsx
git commit -m "feat: créer la page d'accueil avec Hero et Services

HeroSection:
- Hero dynamique avec animations blob
- Slogan principal avec gradient text
- 2 CTA (Découvrir RdCard, Demander une démo)
- Trust indicators (500+ clients, 10K+ transactions)
- Card mockup animée avec floating elements
- Wave divider SVG

ServicesSection:
- Grille responsive de 4 services
- Cards avec hover effects
- Icônes Lucide React
- Liste des features par service
- CTA 'Voir tous nos services'
- Animations staggered"
```

---

## Commit 9️⃣ : Page d'accueil - RdCard et Stats

```bash
git add src/components/home/RdCardSection.tsx src/components/home/StatsSection.tsx
git commit -m "feat: ajouter les sections RdCard et Stats

RdCardSection:
- Présentation produit RdCard
- Liste des 4 fonctionnalités principales
- Card mockup 3D avec animations
- Phone mockup en floating
- 2 CTA (En savoir plus, Commander)
- Trust badges (Sécurisé, Activation rapide)

StatsSection:
- 4 statistiques clés avec icônes
- Animations scale au scroll
- Hover effects avec rotation
- Background dark pour contraste
- Compteurs: 500+ clients, 10K+ transactions, etc."
```

---

## Commit 🔟 : Page d'accueil - Témoignages et CTA

```bash
git add src/components/home/TestimonialsSection.tsx src/components/home/CTASection.tsx
git commit -m "feat: compléter la page d'accueil avec témoignages et CTA

TestimonialsSection:
- Grille de 3 témoignages clients
- Cards avec quote icon
- Rating avec étoiles
- Avatar avec initiales
- Animations slide-up staggered

CTASection:
- Section finale avec gradient background
- Pattern animé en background
- 2 CTA (Démo gratuite, Appeler)
- Trust indicators (Support 24/7, etc.)
- Responsive et impactant"
```

---

## Commit 1️⃣1️⃣ : Page À propos - Structure

```bash
git add src/app/a-propos/page.tsx
git commit -m "feat: créer la structure de la page À propos

- Créer la route /a-propos
- Configurer les métadonnées SEO
- Intégrer PageHeader
- Importer les sections (Mission, Valeurs, Équipe, Timeline)"
```

---

## Commit 1️⃣2️⃣ : Page À propos - Mission et Valeurs

```bash
git add src/components/about/MissionVisionSection.tsx src/components/about/ValuesSection.tsx
git commit -m "feat: ajouter les sections Mission/Vision et Valeurs

MissionVisionSection:
- 3 cards (Mission, Vision, Valeurs)
- Icônes colorées (Target, Eye, Heart)
- Animations slide-up staggered
- Hover effects avec rotation

ValuesSection:
- 4 valeurs principales
- Cards avec icônes
- Grid responsive
- Animations scale
- Background gradient"
```

---

## Commit 1️⃣3️⃣ : Page À propos - Équipe et Timeline

```bash
git add src/components/about/TeamSection.tsx src/components/about/TimelineSection.tsx
git commit -m "feat: compléter la page À propos avec équipe et timeline

TeamSection:
- 3 profils d'équipe
- Avatars avec initiales
- Liens sociaux (LinkedIn, Email)
- Cards avec hover effects
- Grid responsive

TimelineSection:
- 6 étapes de l'histoire Acoriss
- Timeline verticale avec ligne
- Badges année avec icône Calendar
- Cards avec hover shadow
- Animations slide-right staggered"
```

---

## Commit 1️⃣4️⃣ : Documentation

```bash
git add README.md QUICK_START.md SUMMARY.md COMMIT_PROPOSAL.md GIT_COMMITS.md
git commit -m "docs: ajouter la documentation complète du projet

Fichiers créés:
- README.md: Documentation principale
- QUICK_START.md: Guide de démarrage rapide
- SUMMARY.md: Résumé détaillé du projet
- COMMIT_PROPOSAL.md: Proposition de commits
- GIT_COMMITS.md: Stratégie de versioning

Contenu:
- Instructions d'installation
- Structure du projet
- Guide d'utilisation des composants
- Exemples de code
- Prochaines étapes
- Statistiques du projet"
```

---

## 🎯 Résumé des commits

**Total : 14 commits** organisés logiquement

1. Configuration Next.js
2. Types et énumérations
3. Utilitaires et données
4. Composants UI de base
5. Layout et styles globaux
6. Navigation et Footer
7. Composants partagés
8. Page d'accueil - Hero et Services
9. Page d'accueil - RdCard et Stats
10. Page d'accueil - Témoignages et CTA
11. Page À propos - Structure
12. Page À propos - Mission et Valeurs
13. Page À propos - Équipe et Timeline
14. Documentation

---

## 📝 Convention de commits

Format utilisé : **Conventional Commits**

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types utilisés
- `feat`: Nouvelle fonctionnalité
- `docs`: Documentation
- `style`: Formatage, style
- `refactor`: Refactoring
- `fix`: Correction de bug
- `test`: Tests

---

## 🚀 Commandes pour exécuter tous les commits

```bash
# Copier-coller ces commandes une par une

# Commit 1
git add next.config.js tsconfig.app.json package.json next-env.d.ts tailwind.config.js
git commit -m "feat: configurer Next.js 14+ avec TypeScript et Tailwind CSS"

# Commit 2
git add src/types/
git commit -m "feat: définir les types TypeScript et énumérations"

# Commit 3
git add src/lib/
git commit -m "feat: ajouter les utilitaires et données du projet"

# Commit 4
git add src/components/ui/
git commit -m "feat: créer les composants UI réutilisables"

# Commit 5
git add src/app/layout.tsx src/app/globals.css
git commit -m "feat: implémenter le layout principal et styles globaux"

# Commit 6
git add src/components/Navigation.tsx src/components/Footer.tsx
git commit -m "feat: créer la navigation responsive et le footer"

# Commit 7
git add src/components/shared/
git commit -m "feat: ajouter les composants partagés"

# Commit 8
git add src/app/page.tsx src/components/home/HeroSection.tsx src/components/home/ServicesSection.tsx
git commit -m "feat: créer la page d'accueil avec Hero et Services"

# Commit 9
git add src/components/home/RdCardSection.tsx src/components/home/StatsSection.tsx
git commit -m "feat: ajouter les sections RdCard et Stats"

# Commit 10
git add src/components/home/TestimonialsSection.tsx src/components/home/CTASection.tsx
git commit -m "feat: compléter la page d'accueil avec témoignages et CTA"

# Commit 11
git add src/app/a-propos/page.tsx
git commit -m "feat: créer la structure de la page À propos"

# Commit 12
git add src/components/about/MissionVisionSection.tsx src/components/about/ValuesSection.tsx
git commit -m "feat: ajouter les sections Mission/Vision et Valeurs"

# Commit 13
git add src/components/about/TeamSection.tsx src/components/about/TimelineSection.tsx
git commit -m "feat: compléter la page À propos avec équipe et timeline"

# Commit 14
git add README.md QUICK_START.md SUMMARY.md COMMIT_PROPOSAL.md GIT_COMMITS.md
git commit -m "docs: ajouter la documentation complète du projet"
```

---

**✅ Prêt à être commité !**

