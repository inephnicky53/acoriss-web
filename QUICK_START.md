# 🚀 Guide de Démarrage Rapide - Acoriss Web

## ⚡ Lancement en 3 étapes

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

### 3. Ouvrir dans le navigateur

```
http://localhost:3000
```

---

## 📱 Pages disponibles

### ✅ Complètes et fonctionnelles

| Page | URL | Statut |
|------|-----|--------|
| **Accueil** | `/` | ✅ Complète |
| **À propos** | `/a-propos` | ✅ Complète |

### 🔜 À créer

| Page | URL | Statut |
|------|-----|--------|
| **Services** | `/services` | ⏳ À créer |
| **RdCard** | `/rdcard` | ⏳ À créer |
| **Contact** | `/contact` | ⏳ À créer |

---

## 🎨 Composants disponibles

### Composants UI de base

```tsx
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
```

### Exemple d'utilisation

```tsx
// Bouton
<Button variant={ButtonVariant.PRIMARY} size={ButtonSize.LARGE}>
  Cliquez ici
</Button>

// Card
<Card hover>
  <CardHeader>
    <CardTitle>Titre</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Contenu</CardContent>
</Card>

// Section avec animation
<Section background="gradient" padding="large">
  <AnimatedSection animation={AnimationType.SLIDE_UP}>
    <h2>Contenu animé</h2>
  </AnimatedSection>
</Section>
```

---

## 🎯 Structure des dossiers

```
src/
├── app/                    # Pages Next.js
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Styles globaux
│   └── a-propos/           # Page À propos
│       └── page.tsx
├── components/             # Composants React
│   ├── ui/                 # Composants UI réutilisables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── AnimatedSection.tsx
│   ├── home/               # Composants page d'accueil
│   ├── about/              # Composants page À propos
│   ├── shared/             # Composants partagés
│   ├── Navigation.tsx      # Navigation
│   └── Footer.tsx          # Footer
├── lib/                    # Utilitaires
│   ├── utils.ts            # Fonctions utilitaires
│   ├── constants.ts        # Constantes
│   └── data.ts             # Données
└── types/                  # Types TypeScript
    ├── index.ts
    └── enums.ts
```

---

## 🎨 Thème et couleurs

### Couleurs principales

```tsx
// Dans Tailwind CSS
className="bg-sky-500"      // Bleu principal
className="bg-orange-400"   // Orange accent
className="bg-green-500"    // Vert accent

// Classes personnalisées
className="gradient-text"           // Texte dégradé
className="bg-gradient-primary"     // Fond dégradé bleu
className="bg-gradient-secondary"   // Fond dégradé orange
```

### Typographies

```tsx
// Titres (Poppins)
className="font-heading font-bold"

// Texte (Inter)
className="font-sans"
```

---

## 🔧 Commandes utiles

```bash
# Développement
npm run dev              # Lancer le serveur de dev

# Production
npm run build            # Compiler pour production
npm run start            # Lancer le serveur de production

# Qualité du code
npm run lint             # Vérifier le code
npm run typecheck        # Vérifier les types TypeScript
```

---

## 📝 Créer une nouvelle page

### 1. Créer le fichier de page

```tsx
// src/app/ma-page/page.tsx
import type { Metadata } from 'next';
import { PageHeader } from '@/components/shared/PageHeader';

export const metadata: Metadata = {
  title: 'Ma Page - Acoriss',
  description: 'Description de ma page',
};

export default function MaPage() {
  return (
    <>
      <PageHeader
        title="Ma Page"
        subtitle="Sous-titre"
        description="Description"
      />
      {/* Contenu de la page */}
    </>
  );
}
```

### 2. Ajouter la route dans la navigation

```tsx
// src/lib/constants.ts
export const NAVIGATION: NavigationItem[] = [
  // ... autres items
  {
    label: 'Ma Page',
    href: '/ma-page',
  },
];
```

---

## 🎭 Animations

### Utiliser AnimatedSection

```tsx
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { AnimationType } from '@/types/enums';

<AnimatedSection 
  animation={AnimationType.SLIDE_UP}
  delay={100}
>
  <div>Contenu animé</div>
</AnimatedSection>
```

### Types d'animations disponibles

- `FADE_IN` - Apparition en fondu
- `SLIDE_UP` - Glissement vers le haut
- `SLIDE_LEFT` - Glissement vers la gauche
- `SLIDE_RIGHT` - Glissement vers la droite
- `SCALE` - Zoom
- `BOUNCE` - Rebond

---

## 🐛 Dépannage

### Le serveur ne démarre pas

```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules
npm install
npm run dev
```

### Erreurs TypeScript

```bash
# Vérifier les types
npm run typecheck
```

### Problèmes de style

```bash
# Vérifier que Tailwind est bien configuré
# Vérifier que globals.css est importé dans layout.tsx
```

---

## 📞 Besoin d'aide ?

- 📧 Email : contact@acoriss.com
- 📞 Téléphone : +243 828 280 000
- 🌐 Site : www.acoriss.com

---

**Bon développement ! 🚀**

