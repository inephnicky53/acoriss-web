# 📁 Structure du Projet Acoriss Web

## 🌳 Arborescence complète

```
acoriss-web/
│
├── 📄 Configuration
│   ├── package.json                    # Dépendances et scripts
│   ├── next.config.js                  # Configuration Next.js
│   ├── tsconfig.json                   # Configuration TypeScript
│   ├── tsconfig.app.json               # Config TypeScript App
│   ├── tailwind.config.js              # Configuration Tailwind CSS
│   ├── postcss.config.js               # Configuration PostCSS
│   ├── next-env.d.ts                   # Types Next.js
│   ├── .env.example                    # Variables d'environnement
│   ├── .gitignore                      # Fichiers ignorés par Git
│   └── eslint.config.js                # Configuration ESLint
│
├── 📚 Documentation
│   ├── README.md                       # Documentation principale
│   ├── QUICK_START.md                  # Guide de démarrage rapide
│   ├── SUMMARY.md                      # Résumé détaillé
│   ├── VERSION.md                      # Détails de version
│   ├── CHANGELOG.md                    # Historique des versions
│   ├── COMMIT_PROPOSAL.md              # Propositions de commits
│   ├── GIT_COMMITS.md                  # Stratégie Git
│   ├── FINAL_RECAP.md                  # Récapitulatif final
│   └── PROJECT_STRUCTURE.md            # Ce fichier
│
├── 📂 public/                          # Assets statiques
│   ├── images/                         # Images
│   ├── icons/                          # Icônes
│   └── fonts/                          # Fonts locales (si nécessaire)
│
└── 📂 src/                             # Code source
    │
    ├── 📂 app/                         # Pages Next.js (App Router)
    │   ├── layout.tsx                  # Layout principal
    │   ├── page.tsx                    # Page d'accueil (/)
    │   ├── globals.css                 # Styles globaux
    │   │
    │   ├── 📂 a-propos/                # Page À propos
    │   │   └── page.tsx                # Route /a-propos
    │   │
    │   ├── 📂 services/                # Page Services (à créer)
    │   │   └── page.tsx                # Route /services
    │   │
    │   ├── 📂 rdcard/                  # Page RdCard (à créer)
    │   │   └── page.tsx                # Route /rdcard
    │   │
    │   └── 📂 contact/                 # Page Contact (à créer)
    │       └── page.tsx                # Route /contact
    │
    ├── 📂 components/                  # Composants React
    │   │
    │   ├── 📂 ui/                      # Composants UI de base
    │   │   ├── Button.tsx              # Bouton (4 variants, 3 sizes)
    │   │   ├── Card.tsx                # Card avec header/content/footer
    │   │   ├── Section.tsx             # Section wrapper
    │   │   └── AnimatedSection.tsx     # Wrapper avec animations
    │   │
    │   ├── 📂 shared/                  # Composants partagés
    │   │   └── PageHeader.tsx          # En-tête de page
    │   │
    │   ├── 📂 home/                    # Composants page d'accueil
    │   │   ├── HeroSection.tsx         # Hero avec animations
    │   │   ├── ServicesSection.tsx     # Grille de services
    │   │   ├── RdCardSection.tsx       # Présentation RdCard
    │   │   ├── StatsSection.tsx        # Statistiques animées
    │   │   ├── TestimonialsSection.tsx # Témoignages clients
    │   │   └── CTASection.tsx          # Call-to-action final
    │   │
    │   ├── 📂 about/                   # Composants page À propos
    │   │   ├── MissionVisionSection.tsx # Mission/Vision/Valeurs
    │   │   ├── ValuesSection.tsx       # Valeurs détaillées
    │   │   ├── TeamSection.tsx         # Équipe
    │   │   └── TimelineSection.tsx     # Timeline entreprise
    │   │
    │   ├── 📂 services/                # Composants page Services (à créer)
    │   │   ├── ServicesHero.tsx
    │   │   ├── ServiceDetailSection.tsx
    │   │   └── AutoServicesSection.tsx
    │   │
    │   ├── 📂 rdcard/                  # Composants page RdCard (à créer)
    │   │   ├── RdCardHero.tsx
    │   │   ├── FeaturesSection.tsx
    │   │   ├── HowItWorksSection.tsx
    │   │   ├── FAQSection.tsx
    │   │   └── BenefitsSection.tsx
    │   │
    │   ├── 📂 contact/                 # Composants page Contact (à créer)
    │   │   ├── ContactForm.tsx
    │   │   ├── ContactInfo.tsx
    │   │   └── MapSection.tsx
    │   │
    │   ├── Navigation.tsx              # Navigation principale
    │   └── Footer.tsx                  # Footer
    │
    ├── 📂 lib/                         # Utilitaires et données
    │   ├── utils.ts                    # Fonctions utilitaires
    │   ├── constants.ts                # Constantes (contact, nav, SEO)
    │   └── data.ts                     # Données (services, témoignages)
    │
    └── 📂 types/                       # Types TypeScript
        ├── index.ts                    # Interfaces principales
        └── enums.ts                    # Énumérations
```

---

## 📊 Statistiques par dossier

### 📂 src/app/ (Pages)
```
✅ layout.tsx           - Layout principal avec SEO
✅ page.tsx             - Page d'accueil
✅ globals.css          - Styles globaux
✅ a-propos/page.tsx    - Page À propos
⏳ services/page.tsx    - À créer
⏳ rdcard/page.tsx      - À créer
⏳ contact/page.tsx     - À créer
```
**Total : 4 fichiers créés, 3 à créer**

### 📂 src/components/ui/ (Composants UI)
```
✅ Button.tsx           - 4 variants, 3 sizes
✅ Card.tsx             - Card avec sous-composants
✅ Section.tsx          - Section wrapper
✅ AnimatedSection.tsx  - Animations scroll
```
**Total : 4 composants**

### 📂 src/components/home/ (Page d'accueil)
```
✅ HeroSection.tsx
✅ ServicesSection.tsx
✅ RdCardSection.tsx
✅ StatsSection.tsx
✅ TestimonialsSection.tsx
✅ CTASection.tsx
```
**Total : 6 composants**

### 📂 src/components/about/ (Page À propos)
```
✅ MissionVisionSection.tsx
✅ ValuesSection.tsx
✅ TeamSection.tsx
✅ TimelineSection.tsx
```
**Total : 4 composants**

### 📂 src/components/shared/ (Partagés)
```
✅ PageHeader.tsx
```
**Total : 1 composant**

### 📂 src/components/ (Layout)
```
✅ Navigation.tsx       - Navigation responsive
✅ Footer.tsx           - Footer complet
```
**Total : 2 composants**

### 📂 src/lib/ (Utilitaires)
```
✅ utils.ts             - 10+ fonctions utilitaires
✅ constants.ts         - Constantes du projet
✅ data.ts              - Données structurées
```
**Total : 3 fichiers**

### 📂 src/types/ (Types)
```
✅ index.ts             - 15+ interfaces
✅ enums.ts             - 8+ énumérations
```
**Total : 2 fichiers**

---

## 📈 Progression par catégorie

### Pages
- ✅ Complètes : 2/5 (40%)
- ⏳ À créer : 3/5 (60%)

### Composants
- ✅ UI de base : 5/5 (100%)
- ✅ Layout : 2/2 (100%)
- ✅ Home : 6/6 (100%)
- ✅ About : 4/4 (100%)
- ⏳ Services : 0/3 (0%)
- ⏳ RdCard : 0/5 (0%)
- ⏳ Contact : 0/3 (0%)

### Infrastructure
- ✅ Configuration : 100%
- ✅ Types : 100%
- ✅ Utilitaires : 100%
- ✅ Documentation : 100%

**TOTAL PROJET : 60% COMPLÉTÉ** 🎯

---

## 🎨 Conventions de nommage

### Fichiers
- **Pages** : `page.tsx` (Next.js App Router)
- **Composants** : `PascalCase.tsx` (ex: `HeroSection.tsx`)
- **Utilitaires** : `camelCase.ts` (ex: `utils.ts`)
- **Types** : `camelCase.ts` (ex: `enums.ts`)
- **Styles** : `kebab-case.css` ou `globals.css`

### Composants
- **Sections** : `*Section.tsx` (ex: `HeroSection.tsx`)
- **UI** : Nom descriptif (ex: `Button.tsx`, `Card.tsx`)
- **Layout** : Nom simple (ex: `Navigation.tsx`, `Footer.tsx`)

### Dossiers
- **Pages** : Route name (ex: `a-propos/`, `services/`)
- **Composants** : Catégorie (ex: `ui/`, `home/`, `about/`)
- **Utilitaires** : `lib/`
- **Types** : `types/`

---

## 🔗 Imports et chemins

### Alias configuré
```typescript
import { Button } from '@/components/ui/Button';
import { CONTACT_INFO } from '@/lib/constants';
import { ServiceType } from '@/types/enums';
```

### Structure d'import recommandée
```typescript
// 1. Imports externes
import React from 'react';
import Link from 'next/link';

// 2. Imports de types
import type { Service } from '@/types';
import { ServiceType } from '@/types/enums';

// 3. Imports de composants
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

// 4. Imports de données/utils
import { SERVICES } from '@/lib/data';
import { cn } from '@/lib/utils';

// 5. Imports de styles (si nécessaire)
import styles from './styles.module.css';
```

---

## 📦 Dépendances principales

### Production
```json
{
  "next": "^16.0.1",              // Framework
  "react": "^18.3.1",             // UI Library
  "react-dom": "^18.3.1",         // React DOM
  "lucide-react": "^0.344.0",     // Icônes
  "clsx": "^2.1.1",               // Classes conditionnelles
  "tailwind-merge": "^3.3.1",     // Fusion classes Tailwind
  "framer-motion": "^12.23.24",   // Animations
  "@radix-ui/*": "^1.x.x"         // Composants accessibles
}
```

### Développement
```json
{
  "@types/node": "^20.11.0",
  "@types/react": "^18.3.5",
  "typescript": "^5.5.3",
  "tailwindcss": "^3.4.1",
  "eslint-config-next": "^14.2.0"
}
```

---

## 🎯 Prochains fichiers à créer

### Priorité 1 - Page Services
```
src/app/services/page.tsx
src/components/services/ServicesHero.tsx
src/components/services/ServiceDetailSection.tsx
src/components/services/AutoServicesSection.tsx
```

### Priorité 2 - Page RdCard
```
src/app/rdcard/page.tsx
src/components/rdcard/RdCardHero.tsx
src/components/rdcard/FeaturesSection.tsx
src/components/rdcard/HowItWorksSection.tsx
src/components/rdcard/FAQSection.tsx
src/components/rdcard/BenefitsSection.tsx
```

### Priorité 3 - Page Contact
```
src/app/contact/page.tsx
src/components/contact/ContactForm.tsx
src/components/contact/ContactInfo.tsx
src/components/contact/MapSection.tsx
```

---

## 📝 Notes importantes

### Fichiers à ne pas modifier
- `next-env.d.ts` - Généré automatiquement par Next.js
- `node_modules/` - Dépendances (géré par npm)
- `.next/` - Build Next.js (généré automatiquement)

### Fichiers à configurer
- `.env.local` - Variables d'environnement locales (créer depuis .env.example)
- `public/` - Ajouter les images et assets

### Fichiers à versionner
- Tous les fichiers `src/`
- Tous les fichiers de configuration
- Toute la documentation
- `.env.example` (mais pas `.env.local`)

---

**Structure maintenue et organisée pour faciliter le développement ! 🚀**

