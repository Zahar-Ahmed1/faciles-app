# Facilyx — Angular 18 + TailwindCSS

Projet Angular 18 (standalone, routing) inspiré du site vitrine Facilyx.

## Stack
- Angular 18, `@angular/animations`
- TailwindCSS (via `tailwind.config.js` + `@tailwind` dans `src/styles.css`)
- GSAP pour animations
- Playwright (squelette e2e)

## Démarrage
- Installer dépendances: `npm install`
- Dev server: `npm run dev` puis `http://localhost:4200/`
- Build: `npm run build`
- Tests unitaires: `npm run test`
- E2E: `npm run e2e`

## Pages & Routes
- `"/"` Accueil (Hero, aperçu services)
- `"/services"` Services (cards)
- `"/about"` À propos
- `"/testimonials"` Témoignages (slider basique)
- `"/contact"` Contact (Reactive Forms)

## Style
- Fonts Google: Montserrat, Open Sans, Pacifico
- Couleurs: primary `#1E3D59`, secondary `#FFC13B`
- Icônes: Remix Icon (CDN)

## Données Mock
- JSON sous `src/assets/mock/` et service `DataService` (BehaviorSubject)

## SEO
- `index.html`: meta description, langue `fr`, favicon.

## Déploiement
- Construire et servir (`dist/`), ou héberger via Netlify/Vercel/Pages.
