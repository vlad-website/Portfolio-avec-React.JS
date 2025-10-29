# Portfolio - Vladyslav Kharkovskyi

Ce projet a été réalisé dans le cadre de la formation de Développeur Web au Centre Européen de Formation (CEF).  
Il s’agit d’un portfolio personnel développé avec React.js et Bootstrap, permettant à John Doe de présenter son profil, ses compétences, ses services, ses réalisations et ses coordonnées professionnelles.

---

## Objectifs du projet

- Créer un site web professionnel présentant le profil d’un futur développeur web.  
- Appliquer les connaissances acquises sur React.js et Bootstrap 5.  
- Mettre en place un routage dynamique via React Router.  
- Assurer la responsivité du site sur tous les supports (mobile, tablette, desktop).  
- Utiliser des composants réutilisables et un code conforme aux normes du W3C.  
- Intégrer une modale GitHub connectée à l’API publique de GitHub.  

---

## Structure du site

Le site est composé de 5 pages principales, accessibles depuis la barre de navigation :

| Page | Description |
|------|--------------|
| Accueil | Présentation générale et compétences (avec barres de progression Bootstrap). |
| Services | Liste des prestations sous forme de cartes avec effets au survol. |
| Portfolio | Présentation de 6 réalisations sous forme de cartes responsives. |
| Contact | Formulaire complet + coordonnées et carte Google Maps intégrée. |
| Mentions légales | Informations légales sous forme d’accordéon Bootstrap. |

Le site contient également :
- un Header (logo et menu de navigation),
- un Footer présent sur toutes les pages (coordonnées, liens utiles, réalisations récentes),
- une Modale GitHub accessible depuis la page d’accueil.

---

## Prérequis

Avant de lancer le projet, vous devez avoir installé :

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)  
- [npm](https://www.npmjs.com/) (fourni avec Node)

---

## Installation du projet

1. Cloner le dépôt GitHub :

   git clone https://github.com/votre-nom-utilisateur/portfolio-react.git
Accéder au dossier du projet :
cd portfolio-react

Installer les dépendances :
npm install

Lancer le projet en mode développement :
npm start

Ouvrez http://localhost:3000 dans votre navigateur pour voir le site.

Technologies utilisées
React.js — bibliothèque JavaScript pour construire des interfaces dynamiques.

React Router DOM — gestion du routage entre les pages.

Bootstrap 5 — framework CSS pour la mise en page et les composants.

CSS personnalisé — ajustements graphiques et effets de transition.

API GitHub — récupération des informations du profil GitHub de John Doe via fetch().

Structure du code

portfolio-react/
│
├── public/
│   ├── images/            # Images du site (portfolio, hero, etc.)
│   ├── favicon.ico        # Favicon du site
│   └── index.html         # Page HTML principale
│
├── src/
│   ├── components/        # Composants réutilisables (Header, Footer, ModalGithub)
│   ├── pages/             # Pages du site (Home, Services, Portfolio, Contact, Mentions)
│   ├── App.js             # Composant principal avec le router
│   ├── App.css            # Feuille de style principale
│   └── index.js           # Point d'entrée du projet React
│
└── package.json           # Configuration du projet et dépendances

 Fonctionnalités principales:
 Navigation fluide entre les pages via React Router.
 Sections responsives basées sur la grille Bootstrap.
 Effets au survol sur les cartes et les boutons.
 Modale GitHub avec animation et fond semi-transparent.
 Formulaire de contact complet avec validation de champs.
 Page Mentions légales non indexée par les moteurs de recherche.
 Footer cohérent sur toutes les pages.

Validation du code:
Le code HTML et CSS a été vérifié via les validateurs W3C :

W3C HTML Validator

W3C CSS Validator

Le projet respecte les bonnes pratiques de structure et de sémantique.

Auteur
Vladyslav Kharkovskyi
Étudiant Développeur Web – Centre Européen de Formation
 vlad.website33@gmail.com
 Lyon, France
 Profil GitHub