# weeb_prenom_nom
Projet Weeb - Blog frontend développé avec React et Tailwind CSS

## Installation

Pour lancer le projet en local :

1. Cloner le repository
2. Installer les dépendances : `npm install`
3. Lancer le serveur de développement : `npm run dev`
4. Le site est accessible à l'adresse indiquée dans le terminal (généralement `http://localhost:5173`)

Autres commandes utiles :
- `npm run build` : génère une version optimisée du site pour la production
- `npm run lint` : vérifie la qualité du code avec ESLint

## Architecture des dossiers

Le projet est organisé autour de deux dossiers à l'intérieur de `src/` : `pages/` et `components/`.

Le dossier `pages/` contient les fichiers directement liés à une route du site. Autrement dit, chaque fichier présent dans ce dossier correspond à une page qu'on peut visiter (Home, Contact, Login).

Le dossier `components/` contient les éléments visuels utilisés sur plusieurs pages (comme la Navbar ou le Footer), mais aussi les sections qui composent une page volumineuse comme Home.

Ainsi, Home se compose de quatre sections (**Hero**, **Clients**, **Resources**, **News**), toutes rangées dans `components/home/`.

Enfin, deux fichiers structurent l'ensemble de l'application : **Layout.jsx**, qui affiche la **Navbar** et le **Footer** autour du contenu de chaque page ; et **main.jsx**, qui contient la configuration des routes du site avec **React Router DOM**.

Le dossier `assets/` regroupe les fichiers statiques du projet, comme les images SVG exportées depuis Figma.

## Bibliothèques installées

Le projet repose sur **React** avec **React Router DOM** pour la navigation entre les pages. Le style est entièrement géré avec **Tailwind CSS**. Les icônes (menu, réseaux sociaux, logos clients) proviennent de la bibliothèque **React Icons**. Le projet est construit avec **Vite**, et la qualité du code est vérifiée avec **ESLint**.

## Fonctionnement global

L'application est construite avec React et fonctionne comme une **Single Page Application (SPA)** grâce à React Router DOM : la navigation entre les pages se fait sans rechargement du navigateur.

Toutes les pages partagent une structure commune définie dans `Layout.jsx` : une Navbar en haut, un Footer en bas, et le contenu de la page affiché entre eux grâce au composant **Outlet** de React Router.

Les pages elles-mêmes (Home, Contact, Login) sont composées en assemblant des composants plus petits, situés dans `components/`. La page Home, par exemple, importe et affiche quatre sections les unes après les autres.

Le site est **responsive** : chaque page et chaque composant s'adapte à la taille de l'écran (mobile, tablette, desktop) grâce aux classes conditionnelles de Tailwind CSS. Sur mobile, la Navbar affiche un **menu burger** dont l'ouverture et la fermeture sont gérées par un **state** React (`useState`), qui bascule entre ces deux états à chaque clic.

Les formulaires (Contact, Login) ne sont pas fonctionnels à ce stade du projet : aucune donnée n'est envoyée ni traitée, en l'absence de backend.

## Écarts par rapport à la maquette

- **Couleurs légèrement éclaircies** par rapport à la maquette, pour améliorer la lisibilité.
- **"Se connecter"** sur la page Contact remplacé par **Login / Join Now** dans la Navbar (imprécision de la maquette).
- **About us** : lien mort pour l'instant, la page n'étant pas prévue pour cette première semaine développement.
- **Logos clients** (section "Ils nous font confiance") : icônes choisies arbitrairement dans React Icons, la maquette utilisant des icônes fictives impossibles à reproduire à l'identique.
- **Images** (Hero, Resources, News) : exportées directement depuis Figma en SVG.
- **Formulaires** (Contact, Login) : utilisent uniquement des `placeholder` comme repère visuel, sans `<label>` associé — accessibilité perfectible.