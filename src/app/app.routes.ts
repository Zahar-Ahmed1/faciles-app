import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Accueil — Facilyx',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'services',
    title: 'Services — Facilyx',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'about',
    title: 'À propos — Facilyx',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'testimonials',
    title: 'Témoignages — Facilyx',
    loadComponent: () => import('./pages/testimonials/testimonials.component').then(m => m.TestimonialsComponent)
  },
  {
    path: 'contact',
    title: 'Contact — Facilyx',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  }
];
