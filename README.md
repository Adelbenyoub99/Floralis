# 🌸 Floralis — E-Commerce Floral & Configurateur de Bouquets Sur-Mesure

<p align="center">
  <img src="https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

**Floralis** est une application web e-commerce moderne conçue pour une boutique florale artisanale.
Elle met en avant l'expérience utilisateur et la fluidité d'une **Single Page Application (SPA)** sans dépendance backend externe grâce à une architecture client-side avancée, un gestionnaire d'état réactif (**Zustand**) avec persistance automatique dans le stockage local (**LocalStorage**), et un configurateur interactif de bouquets en temps réel.

---

## 🎯 Fonctionnalités Clés & Expérience Utilisateur

### 💐 1. Configurateur de Bouquets Sur-Mesure (Custom Bouquet Builder)
- Sélection interactive des variétés florales avec ajustement dynamique des quantités.
- Choix de l'occasion (Mariage, Anniversaire, Déclaration, Remerciement) et du style d'emballage (Rustique, Élégant, Minimaliste).
- Calcul instantané du prix en temps réel selon les composants sélectionnés.
- Ajout direct du bouquet personnalisé au panier.

### 🌿 2. Catalogue Floral & Filtrage Saisonnier
- Fiches produits botaniques détaillées (nom usuel, appellation latine, saisonnalité, conseils d'entretien et prix unitaire).
- Moteur de recherche réactif et filtrage multicritères par saison (Printemps, Été, Automne, Toute l'année).

### 🛒 3. Panier d'Achat Interactif & Persistance (Zustand Persist)
- Gestion complète du panier : incrémentation/décrémentation des quantités et suppression.
- Sauvegarde automatique de l'état du panier dans le `localStorage` du navigateur : les articles restent conservés même après fermeture ou rafraîchissement de la page.
- Récapitulatif dynamique des sous-totaux, frais de livraison et montant total.

### 📱 4. Design Ergonomique & Mobile-First
- Interface épurée et élégante adaptée à la charte graphique florale (palette Rose / Émeraude).
- 100% responsive sur smartphones, tablettes et écrans desktop.

---

## 🛠️ Stack Technique & Architecture

- **Bibliothèque UI** : React 18 (Hooks, Composants fonctionnels modulaires)
- **Langage** : TypeScript 5 (Typage strict des entités `Flower`, `Bouquet`, `CartItem`)
- **Gestion d'État Global** : [Zustand](https://github.com/pmndrs/zustand) avec middleware `persist`
- **Styling** : Tailwind CSS 3 (Architecture utilitaire réactive)
- **Icônes** : Lucide React
- **Routage** : React Router v6
- **Tooling & Build** : Vite 5 (Hot Module Replacement instantané)

---

## 🚀 Installation & Lancement Local

### Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- npm ou yarn

### Commandes

```bash
# 1. Cloner le dépôt
git clone https://github.com/Adelbenyoub99/Floralis.git
cd Floralis

# 2. Installer les dépendances
npm install

# 3. Démarrer le serveur de développement local
npm run dev
```

L'application sera immédiatement accessible sur `http://localhost:5173/`.

### Construction pour la production

```bash
npm run build
```

Les fichiers optimisés et minifiés seront générés dans le dossier `dist/`, prêts à être déployés sur Netlify, Vercel ou GitHub Pages.

---

## 👨‍💻 Auteur

**Adel BENYOUB**  
*Ingénieur d'État en Informatique • Master Génie Logiciel*  
- **Portfolio** : [benyoubadel-portfolio.netlify.app](https://benyoubadel-portfolio.netlify.app/)  
- **LinkedIn** : [linkedin.com/in/adel-benyoub](https://www.linkedin.com/in/adel-benyoub)  
- **GitHub** : [github.com/Adelbenyoub99](https://github.com/Adelbenyoub99)
