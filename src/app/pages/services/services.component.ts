import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/data.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  standalone: true,
  selector: 'app-services',
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section id="services-hero" class="relative pt-24 pb-16 min-h-[500px] flex items-center w-full bg-fixed" style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'); background-size: cover; background-position: center;">
      <div class="absolute inset-0 bg-primary bg-opacity-75"></div>
      <div class="container mx-auto px-4 relative z-10 w-full">
        <div class="max-w-3xl">
          <h1 class="services-hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">Nos Services Complets</h1>
          <p class="services-hero-text text-xl text-gray-100 mb-8">Des solutions intégrées de gestion d'installations pour optimiser votre espace de travail.</p>
        </div>
      </div>
    </section>

    <!-- Services Grid Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="section-title text-3xl md:text-4xl font-bold text-primary mb-4">Nos Services Principaux</h2>
          <p class="section-subtitle text-gray-600 max-w-2xl mx-auto">Des solutions professionnelles adaptées à vos besoins spécifiques.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of services; track service.title; let i = $index) {
            <div class="service-card bg-white p-8 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="w-20 h-20 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-6 service-icon">
                <i [class]="service.icon + ' ri-2x text-secondary'"></i>
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">{{ service.title }}</h3>
              <p class="text-gray-600 mb-6">{{ service.description }}</p>
              <ul class="space-y-2 text-sm text-gray-500">
                <li class="flex items-center">
                  <i class="ri-check-line text-secondary mr-2"></i>
                  <span>Service professionnel certifié</span>
                </li>
                <li class="flex items-center">
                  <i class="ri-check-line text-secondary mr-2"></i>
                  <span>Disponibilité 24/7</span>
                </li>
                <li class="flex items-center">
                  <i class="ri-check-line text-secondary mr-2"></i>
                  <span>Équipe qualifiée</span>
                </li>
              </ul>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="section-title text-3xl md:text-4xl font-bold text-primary mb-4">Pourquoi Nous Choisir</h2>
          <p class="section-subtitle text-gray-600 max-w-2xl mx-auto">Des avantages qui font la différence.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="feature-item text-center p-6 bg-gray-50 rounded-xl">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mx-auto mb-4 feature-icon">
              <i class="ri-time-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Réactivité</h3>
            <p class="text-gray-600">Intervention rapide et efficace pour tous vos besoins.</p>
          </div>
          <div class="feature-item text-center p-6 bg-gray-50 rounded-xl">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mx-auto mb-4 feature-icon">
              <i class="ri-award-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Qualité</h3>
            <p class="text-gray-600">Standards élevés et certifications professionnelles.</p>
          </div>
          <div class="feature-item text-center p-6 bg-gray-50 rounded-xl">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mx-auto mb-4 feature-icon">
              <i class="ri-customer-service-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Support</h3>
            <p class="text-gray-600">Accompagnement personnalisé à chaque étape.</p>
          </div>
          <div class="feature-item text-center p-6 bg-gray-50 rounded-xl">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mx-auto mb-4 feature-icon">
              <i class="ri-money-dollar-circle-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Tarifs</h3>
            <p class="text-gray-600">Solutions compétitives et transparentes.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="section-title text-3xl md:text-4xl font-bold text-primary mb-4">Notre Processus</h2>
          <p class="section-subtitle text-gray-600 max-w-2xl mx-auto">Un processus simple et efficace en 4 étapes.</p>
        </div>
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="process-step text-center p-6 bg-white rounded-xl shadow-card">
              <div class="w-16 h-16 flex items-center justify-center bg-secondary text-white rounded-full mx-auto mb-4 text-2xl font-bold process-number">1</div>
              <h3 class="text-lg font-bold text-primary mb-2">Consultation</h3>
              <p class="text-gray-600 text-sm">Analyse de vos besoins et de vos objectifs.</p>
            </div>
            <div class="process-step text-center p-6 bg-white rounded-xl shadow-card">
              <div class="w-16 h-16 flex items-center justify-center bg-secondary text-white rounded-full mx-auto mb-4 text-2xl font-bold process-number">2</div>
              <h3 class="text-lg font-bold text-primary mb-2">Proposition</h3>
              <p class="text-gray-600 text-sm">Devis détaillé et plan d'action personnalisé.</p>
            </div>
            <div class="process-step text-center p-6 bg-white rounded-xl shadow-card">
              <div class="w-16 h-16 flex items-center justify-center bg-secondary text-white rounded-full mx-auto mb-4 text-2xl font-bold process-number">3</div>
              <h3 class="text-lg font-bold text-primary mb-2">Mise en Œuvre</h3>
              <p class="text-gray-600 text-sm">Déploiement rapide et professionnel.</p>
            </div>
            <div class="process-step text-center p-6 bg-white rounded-xl shadow-card">
              <div class="w-16 h-16 flex items-center justify-center bg-secondary text-white rounded-full mx-auto mb-4 text-2xl font-bold process-number">4</div>
              <h3 class="text-lg font-bold text-primary mb-2">Suivi</h3>
              <p class="text-gray-600 text-sm">Monitoring continu et amélioration continue.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="benefits-content">
            <h2 class="section-title text-3xl md:text-4xl font-bold text-primary mb-6">Les Avantages de Nos Services</h2>
            <div class="space-y-6">
              <div class="benefit-item flex items-start">
                <div class="w-12 h-12 flex items-center justify-center bg-secondary bg-opacity-20 rounded-lg mr-4 flex-shrink-0">
                  <i class="ri-checkbox-circle-line ri-xl text-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-primary mb-2">Économie de Temps</h3>
                  <p class="text-gray-600">Concentrez-vous sur votre cœur de métier pendant que nous gérons vos installations.</p>
                </div>
              </div>
              <div class="benefit-item flex items-start">
                <div class="w-12 h-12 flex items-center justify-center bg-secondary bg-opacity-20 rounded-lg mr-4 flex-shrink-0">
                  <i class="ri-checkbox-circle-line ri-xl text-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-primary mb-2">Réduction des Coûts</h3>
                  <p class="text-gray-600">Optimisation des ressources et prévention des pannes coûteuses.</p>
                </div>
              </div>
              <div class="benefit-item flex items-start">
                <div class="w-12 h-12 flex items-center justify-center bg-secondary bg-opacity-20 rounded-lg mr-4 flex-shrink-0">
                  <i class="ri-checkbox-circle-line ri-xl text-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-primary mb-2">Conformité Réglementaire</h3>
                  <p class="text-gray-600">Respect de toutes les normes et réglementations en vigueur.</p>
                </div>
              </div>
              <div class="benefit-item flex items-start">
                <div class="w-12 h-12 flex items-center justify-center bg-secondary bg-opacity-20 rounded-lg mr-4 flex-shrink-0">
                  <i class="ri-checkbox-circle-line ri-xl text-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-primary mb-2">Amélioration de la Productivité</h3>
                  <p class="text-gray-600">Un environnement de travail optimal pour vos équipes.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="benefits-image">
            <div class="bg-gray-100 rounded-2xl p-8 h-full flex items-center justify-center">
              <div class="text-center">
                <i class="ri-building-line text-8xl text-secondary opacity-50"></i>
                <p class="text-gray-500 mt-4">Solutions sur mesure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="cta-title text-3xl md:text-4xl font-bold mb-4">Prêt à Améliorer Vos Installations ?</h2>
          <p class="cta-text text-gray-100 mb-8 text-lg">Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons transformer votre espace de travail.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <a routerLink="/contact" class="cta-button bg-secondary text-primary px-8 py-4 font-semibold rounded-button shadow-md hover:shadow-lg transition-all inline-block transform hover:scale-105">Demander un Devis</a>
            <a routerLink="/about" class="cta-button bg-transparent border-2 border-white text-white px-8 py-4 font-semibold rounded-button hover:bg-white hover:bg-opacity-10 transition-all inline-block">En Savoir Plus</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent implements OnInit, AfterViewInit {
  services: any[] = [
    { title: "Office Cleaning", description: "Daily maintenance, deep cleaning, sanitization.", icon: "ri-brush-line" },
    { title: "Security Solutions", description: "Guards, CCTV, access control.", icon: "ri-shield-check-line" },
    { title: "Procurement & Supply", description: "Equipment and consumables sourcing.", icon: "ri-shopping-cart-line" },
    { title: "Maintenance Services", description: "HVAC, electrical, plumbing, preventive.", icon: "ri-tools-line" }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Charger les services depuis le service
    this.dataService.services$.subscribe(services => {
      if (services && services.length > 0) {
        this.services = services;
      }
    });
  }

  ngAfterViewInit() {
    // Attendre un peu pour s'assurer que le DOM est complètement rendu
    setTimeout(() => {
      this.initAnimations();
    }, 100);
  }

  private initAnimations() {
    try {
      gsap.registerPlugin(ScrollTrigger);

      // Hero animations - partir de l'état visible
      gsap.fromTo('.services-hero-title', 
        { y: 0, opacity: 1 },
        { 
          y: 30, 
          opacity: 0, 
          duration: 0,
          immediateRender: false
        }
      );
      gsap.to('.services-hero-title', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.fromTo('.services-hero-text',
        { y: 0, opacity: 1 },
        {
          y: 20,
          opacity: 0,
          duration: 0,
          immediateRender: false
        }
      );
      gsap.to('.services-hero-text', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out'
      });

      // Parallax effect on hero
      const hero = document.getElementById('services-hero');
      if (hero) {
        gsap.to(hero, {
          backgroundPosition: '50% 100px',
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      // Section titles - animation au scroll seulement
      gsap.utils.toArray('.section-title').forEach((title: any) => {
        gsap.fromTo(title, 
          { x: 0, opacity: 1 },
          {
            x: -50,
            opacity: 0,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: title,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(title, {
                  x: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: 'power2.out'
                });
              }
            }
          }
        );
      });

      gsap.utils.toArray('.section-subtitle').forEach((subtitle: any) => {
        gsap.fromTo(subtitle,
          { x: 0, opacity: 1 },
          {
            x: 50,
            opacity: 0,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: subtitle,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(subtitle, {
                  x: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: 'power2.out'
                });
              }
            }
          }
        );
      });

      // Service cards - animation au scroll
      gsap.utils.toArray('.service-card').forEach((card: any, index: number) => {
        gsap.fromTo(card,
          { y: 0, opacity: 1 },
          {
            y: 60,
            opacity: 0,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(card, {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: 'power2.out'
                });
              }
            }
          }
        );
      });

      // Service icons - animation au scroll
      gsap.utils.toArray('.service-icon').forEach((icon: any) => {
        gsap.fromTo(icon,
          { rotation: 0, scale: 1 },
          {
            rotation: -180,
            scale: 0,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: icon,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(icon, {
                  rotation: 0,
                  scale: 1,
                  duration: 0.8,
                  ease: 'back.out(1.7)'
                });
              }
            }
          }
        );
      });

      // Feature items - animation au scroll
      gsap.utils.toArray('.feature-item').forEach((item: any, index: number) => {
        const direction = index % 2 === 0 ? -1 : 1;
        gsap.fromTo(item,
          { x: 0, opacity: 1 },
          {
            x: direction * 50,
            opacity: 0,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(item, {
                  x: 0,
                  opacity: 1,
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: 'power2.out'
                });
              }
            }
          }
        );
      });

      // Feature icons - animation au scroll
      gsap.utils.toArray('.feature-icon').forEach((icon: any) => {
        gsap.fromTo(icon,
          { scale: 1, rotation: 0 },
          {
            scale: 0,
            rotation: 360,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: icon,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(icon, {
                  scale: 1,
                  rotation: 0,
                  duration: 0.8,
                  ease: 'elastic.out(1, 0.5)'
                });
              }
            }
          }
        );
      });

      // Process steps - animation au scroll
      gsap.utils.toArray('.process-step').forEach((step: any, index: number) => {
        gsap.fromTo(step,
          { y: 0, opacity: 1, scale: 1 },
          {
            y: 40,
            opacity: 0,
            scale: 0.8,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(step, {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: 'power2.out'
                });
              }
            }
          }
        );
      });

      // Process numbers - animation au scroll
      gsap.utils.toArray('.process-number').forEach((number: any) => {
        gsap.fromTo(number,
          { scale: 1, rotation: 0 },
          {
            scale: 0,
            rotation: 180,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: number,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(number, {
                  scale: 1,
                  rotation: 0,
                  duration: 0.6,
                  ease: 'back.out(1.7)'
                });
              }
            }
          }
        );
      });

      // Benefits content - animation au scroll
      gsap.fromTo('.benefits-content',
        { x: 0, opacity: 1 },
        {
          x: -80,
          opacity: 0,
          duration: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: '.benefits-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to('.benefits-content', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
              });
            }
          }
        }
      );

      gsap.fromTo('.benefits-image',
        { x: 0, opacity: 1 },
        {
          x: 80,
          opacity: 0,
          duration: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: '.benefits-image',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to('.benefits-image', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
              });
            }
          }
        }
      );

      // Benefit items - animation au scroll
      gsap.utils.toArray('.benefit-item').forEach((item: any, index: number) => {
        gsap.fromTo(item,
          { x: 0, opacity: 1 },
          {
            x: -30,
            opacity: 0,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(item, {
                  x: 0,
                  opacity: 1,
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: 'power2.out'
                });
              }
            }
          }
        );
      });

      // CTA section - animation au scroll
      gsap.fromTo('.cta-title',
        { y: 0, opacity: 1 },
        {
          y: 30,
          opacity: 0,
          duration: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: '.cta-title',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to('.cta-title', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
              });
            }
          }
        }
      );

      gsap.fromTo('.cta-text',
        { y: 0, opacity: 1 },
        {
          y: 20,
          opacity: 0,
          duration: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: '.cta-text',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to('.cta-text', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 0.2,
                ease: 'power2.out'
              });
            }
          }
        }
      );

      gsap.utils.toArray('.cta-button').forEach((button: any) => {
        gsap.fromTo(button,
          { y: 0, opacity: 1 },
          {
            y: 20,
            opacity: 0,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: button,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(button, {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  delay: 0.4,
                  ease: 'power2.out'
                });
              }
            }
          }
        );
      });

      // Hover animations pour les cartes de service
      gsap.utils.toArray('.service-card').forEach((card: any) => {
        const icon = card.querySelector('.service-icon');
        if (icon) {
          card.addEventListener('mouseenter', () => {
            gsap.to(icon, {
              rotation: 360,
              duration: 0.6,
              ease: 'power2.out'
            });
          });
        }
      });

      // Animation flottante continue pour les numéros de processus
      gsap.utils.toArray('.process-number').forEach((number: any) => {
        gsap.to(number, {
          y: -10,
          duration: 2,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
          delay: Math.random() * 1
        });
      });

    } catch (error) {
      console.warn('GSAP animation error:', error);
      // Si GSAP ne fonctionne pas, le contenu reste visible
    }
  }
}
