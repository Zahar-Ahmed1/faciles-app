import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section id="about-hero" class="relative pt-24 pb-16 min-h-[500px] flex items-center w-full bg-fixed" style="background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'); background-size: cover; background-position: center;">
      <div class="absolute inset-0 bg-primary bg-opacity-75"></div>
      <div class="container mx-auto px-4 relative z-10 w-full">
        <div class="max-w-3xl">
          <h1 class="about-hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">À Propos de Facilyx</h1>
          <p class="about-hero-text text-xl text-gray-100 mb-8">Votre partenaire de confiance pour une gestion d'installations d'excellence depuis 2010.</p>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="story-image">
            <img src="https://readdy.ai/api/search-image?query=Professional%20team%20meeting&width=600&height=400&seq=about1&orientation=landscape" alt="About Facilyx" class="rounded-2xl shadow-xl w-full object-cover">
          </div>
          <div class="story-content">
            <h2 class="section-title text-3xl md:text-4xl font-bold text-primary mb-6">Notre Histoire</h2>
            <p class="text-gray-600 mb-4 text-lg leading-relaxed">
              Fondée en 2010, Facilyx est née d'une vision simple : transformer la gestion d'installations en une expérience fluide et professionnelle pour nos clients.
            </p>
            <p class="text-gray-600 mb-4 text-lg leading-relaxed">
              Avec plus de 15 ans d'expérience, nous avons développé une expertise approfondie dans tous les aspects de la gestion d'installations, de l'entretien quotidien aux solutions complexes de sécurité et de maintenance.
            </p>
            <p class="text-gray-600 text-lg leading-relaxed">
              Aujourd'hui, nous sommes fiers de compter plus de 200 clients satisfaits qui nous font confiance pour optimiser leurs espaces de travail et améliorer leur productivité.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="section-title text-3xl md:text-4xl font-bold text-primary mb-4">Nos Réalisations en Chiffres</h2>
          <p class="section-subtitle text-gray-600 max-w-2xl mx-auto">Des résultats qui parlent d'eux-mêmes.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="stat-item text-center p-6 bg-white rounded-xl shadow-card">
            <div class="stat-number text-5xl font-bold text-secondary mb-4">15+</div>
            <h3 class="text-xl font-bold text-primary mb-2">Années d'Expérience</h3>
            <p class="text-gray-600">Une expertise éprouvée sur le terrain</p>
          </div>
          <div class="stat-item text-center p-6 bg-white rounded-xl shadow-card">
            <div class="stat-number text-5xl font-bold text-secondary mb-4">200+</div>
            <h3 class="text-xl font-bold text-primary mb-2">Clients Satisfaits</h3>
            <p class="text-gray-600">Des solutions adaptées à chaque besoin</p>
          </div>
          <div class="stat-item text-center p-6 bg-white rounded-xl shadow-card">
            <div class="stat-number text-5xl font-bold text-secondary mb-4">24/7</div>
            <h3 class="text-xl font-bold text-primary mb-2">Support Disponible</h3>
            <p class="text-gray-600">Une assistance à tout moment</p>
          </div>
          <div class="stat-item text-center p-6 bg-white rounded-xl shadow-card">
            <div class="stat-number text-5xl font-bold text-secondary mb-4">100%</div>
            <h3 class="text-xl font-bold text-primary mb-2">Engagement Qualité</h3>
            <p class="text-gray-600">Excellence dans chaque projet</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="section-title text-3xl md:text-4xl font-bold text-primary mb-4">Nos Valeurs</h2>
          <p class="section-subtitle text-gray-600 max-w-2xl mx-auto">Les principes qui guident notre action au quotidien.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="value-item bg-gray-50 p-8 rounded-xl">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-6 value-icon">
              <i class="ri-shield-check-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-2xl font-bold text-primary mb-4">Fiabilité</h3>
            <p class="text-gray-600 leading-relaxed">Nous nous engageons à fournir des services constants et de qualité supérieure, en respectant toujours nos engagements.</p>
          </div>
          <div class="value-item bg-gray-50 p-8 rounded-xl">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-6 value-icon">
              <i class="ri-user-heart-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-2xl font-bold text-primary mb-4">Satisfaction Client</h3>
            <p class="text-gray-600 leading-relaxed">Votre satisfaction est notre priorité absolue. Nous écoutons vos besoins et adaptons nos services pour dépasser vos attentes.</p>
          </div>
          <div class="value-item bg-gray-50 p-8 rounded-xl">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-6 value-icon">
              <i class="ri-safe-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-2xl font-bold text-primary mb-4">Sécurité & Conformité</h3>
            <p class="text-gray-600 leading-relaxed">Nous respectons strictement toutes les normes de sécurité et réglementations en vigueur pour garantir un environnement sûr.</p>
          </div>
          <div class="value-item bg-gray-50 p-8 rounded-xl">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-6 value-icon">
              <i class="ri-lightbulb-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-2xl font-bold text-primary mb-4">Innovation</h3>
            <p class="text-gray-600 leading-relaxed">Nous adoptons les dernières technologies et méthodes pour améliorer continuellement nos services et votre expérience.</p>
          </div>
          <div class="value-item bg-gray-50 p-8 rounded-xl">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-6 value-icon">
              <i class="ri-team-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-2xl font-bold text-primary mb-4">Esprit d'Équipe</h3>
            <p class="text-gray-600 leading-relaxed">Nous travaillons en collaboration étroite avec nos clients et partenaires pour créer des solutions gagnant-gagnant.</p>
          </div>
          <div class="value-item bg-gray-50 p-8 rounded-xl">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-6 value-icon">
              <i class="ri-speed-up-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-2xl font-bold text-primary mb-4">Efficacité</h3>
            <p class="text-gray-600 leading-relaxed">Nous optimisons nos processus pour maximiser la productivité et minimiser les coûts, tout en maintenant la qualité.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="mission-content bg-white p-8 rounded-xl shadow-card">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-6 mission-icon">
              <i class="ri-target-line ri-2x text-secondary"></i>
            </div>
            <h2 class="text-3xl font-bold text-primary mb-6">Notre Mission</h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-4">
              Fournir des solutions de gestion d'installations exceptionnelles qui permettent à nos clients de se concentrer sur leur cœur de métier, tout en bénéficiant d'un environnement de travail optimal, sûr et productif.
            </p>
            <p class="text-gray-600 text-lg leading-relaxed">
              Nous nous engageons à être le partenaire de confiance qui transforme la gestion d'installations en un avantage concurrentiel pour nos clients.
            </p>
          </div>
          <div class="vision-content bg-white p-8 rounded-xl shadow-card">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-6 vision-icon">
              <i class="ri-eye-line ri-2x text-secondary"></i>
            </div>
            <h2 class="text-3xl font-bold text-primary mb-6">Notre Vision</h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-4">
              Devenir le leader reconnu dans le domaine de la gestion d'installations en établissant de nouveaux standards d'excellence, d'innovation et de satisfaction client.
            </p>
            <p class="text-gray-600 text-lg leading-relaxed">
              Nous aspirons à créer un écosystème où chaque installation que nous gérons devient un modèle d'efficacité, de durabilité et de bien-être au travail.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="section-title text-3xl md:text-4xl font-bold text-primary mb-4">Pourquoi Nous Choisir</h2>
          <p class="section-subtitle text-gray-600 max-w-2xl mx-auto">Des avantages concrets qui font la différence.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="advantage-item flex items-start p-6 bg-gray-50 rounded-xl">
            <div class="w-12 h-12 flex items-center justify-center bg-secondary bg-opacity-20 rounded-lg mr-4 flex-shrink-0">
              <i class="ri-checkbox-circle-line ri-xl text-secondary"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-primary mb-2">Expertise Approfondie</h3>
              <p class="text-gray-600">Plus de 15 ans d'expérience dans tous les domaines de la gestion d'installations.</p>
            </div>
          </div>
          <div class="advantage-item flex items-start p-6 bg-gray-50 rounded-xl">
            <div class="w-12 h-12 flex items-center justify-center bg-secondary bg-opacity-20 rounded-lg mr-4 flex-shrink-0">
              <i class="ri-checkbox-circle-line ri-xl text-secondary"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-primary mb-2">Solutions Personnalisées</h3>
              <p class="text-gray-600">Chaque client est unique, nous adaptons nos services à vos besoins spécifiques.</p>
            </div>
          </div>
          <div class="advantage-item flex items-start p-6 bg-gray-50 rounded-xl">
            <div class="w-12 h-12 flex items-center justify-center bg-secondary bg-opacity-20 rounded-lg mr-4 flex-shrink-0">
              <i class="ri-checkbox-circle-line ri-xl text-secondary"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-primary mb-2">Réactivité Exceptionnelle</h3>
              <p class="text-gray-600">Support 24/7 et intervention rapide pour tous vos besoins urgents.</p>
            </div>
          </div>
          <div class="advantage-item flex items-start p-6 bg-gray-50 rounded-xl">
            <div class="w-12 h-12 flex items-center justify-center bg-secondary bg-opacity-20 rounded-lg mr-4 flex-shrink-0">
              <i class="ri-checkbox-circle-line ri-xl text-secondary"></i>
            </div>
        <div>
              <h3 class="text-xl font-bold text-primary mb-2">Technologie de Pointe</h3>
              <p class="text-gray-600">Utilisation des dernières innovations pour optimiser nos services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="cta-title text-3xl md:text-4xl font-bold mb-4">Prêt à Travailler Avec Nous ?</h2>
          <p class="cta-text text-gray-100 mb-8 text-lg">Découvrez comment Facilyx peut transformer la gestion de vos installations et améliorer votre productivité.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <a routerLink="/contact" class="cta-button bg-secondary text-primary px-8 py-4 font-semibold rounded-button shadow-md hover:shadow-lg transition-all inline-block transform hover:scale-105">Contactez-Nous</a>
            <a routerLink="/services" class="cta-button bg-transparent border-2 border-white text-white px-8 py-4 font-semibold rounded-button hover:bg-white hover:bg-opacity-10 transition-all inline-block">Nos Services</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Attendre un peu pour s'assurer que le DOM est complètement rendu
    setTimeout(() => {
      this.initAnimations();
    }, 100);
  }

  private initAnimations() {
    try {
      gsap.registerPlugin(ScrollTrigger);

      // Hero animations
      gsap.fromTo('.about-hero-title',
        { y: 0, opacity: 1 },
        {
          y: 30,
          opacity: 0,
          duration: 0,
          immediateRender: false
        }
      );
      gsap.to('.about-hero-title', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.fromTo('.about-hero-text',
        { y: 0, opacity: 1 },
        {
          y: 20,
          opacity: 0,
          duration: 0,
          immediateRender: false
        }
      );
      gsap.to('.about-hero-text', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out'
      });

      // Parallax effect on hero
      const hero = document.getElementById('about-hero');
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

      // Story section animations
      gsap.fromTo('.story-image',
        { x: 0, opacity: 1 },
        {
          x: -80,
          opacity: 0,
          duration: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: '.story-image',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to('.story-image', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
              });
            }
          }
        }
      );

      gsap.fromTo('.story-content',
        { x: 0, opacity: 1 },
        {
          x: 80,
          opacity: 0,
          duration: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: '.story-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to('.story-content', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
              });
            }
          }
        }
      );

      // Section titles animation
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

      // Stats animation
      gsap.utils.toArray('.stat-item').forEach((stat: any, index: number) => {
        gsap.fromTo(stat,
          { y: 0, opacity: 1, scale: 1 },
          {
            y: 40,
            opacity: 0,
            scale: 0.8,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(stat, {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: 'back.out(1.7)'
                });
              }
            }
          }
        );
      });

      // Stat numbers counter animation on scroll
      gsap.utils.toArray('.stat-number').forEach((number: any) => {
        const originalText = number.textContent || '';
        // Extraire la valeur numérique et le suffixe (ex: "15+" -> 15 et "+", "100%" -> 100 et "%")
        const match = originalText.match(/(\d+)(.*)/);
        if (match) {
          const targetValue = parseInt(match[1], 10);
          const suffix = match[2] || '';
          
          // Créer un objet pour stocker la valeur animée
          const counter = { value: 0 };
          
          // Animation de scale initiale
          gsap.fromTo(number,
            { scale: 0 },
            {
              scale: 1,
              duration: 0,
              immediateRender: false
            }
          );
          
          // Animation de compteur avec ScrollTrigger
          ScrollTrigger.create({
            trigger: number,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              // Animation de scale
              gsap.to(number, {
                scale: 1,
                duration: 0.8,
                ease: 'back.out(1.7)'
              });
              
              // Animation de compteur
              gsap.to(counter, {
                value: targetValue,
                duration: 2,
                ease: 'power2.out',
                onUpdate: function() {
                  number.textContent = Math.round(counter.value) + suffix;
                }
              });
            }
          });
        }
      });

      // Values animation
      gsap.utils.toArray('.value-item').forEach((value: any, index: number) => {
        const direction = index % 2 === 0 ? -1 : 1;
        gsap.fromTo(value,
          { x: 0, opacity: 1 },
          {
            x: direction * 50,
            opacity: 0,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: value,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(value, {
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

      // Value icons animation
      gsap.utils.toArray('.value-icon').forEach((icon: any) => {
        gsap.fromTo(icon,
          { scale: 1, rotation: 0 },
          {
            scale: 0,
            rotation: -180,
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

      // Mission & Vision animation
      gsap.fromTo('.mission-content',
        { x: 0, opacity: 1 },
        {
          x: -60,
          opacity: 0,
          duration: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: '.mission-content',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to('.mission-content', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
              });
            }
          }
        }
      );

      gsap.fromTo('.vision-content',
        { x: 0, opacity: 1 },
        {
          x: 60,
          opacity: 0,
          duration: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: '.vision-content',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to('.vision-content', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
              });
            }
          }
        }
      );

      // Mission & Vision icons animation
      gsap.utils.toArray('.mission-icon, .vision-icon').forEach((icon: any) => {
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
                  ease: 'back.out(1.7)'
                });
              }
            }
          }
        );
      });

      // Advantages animation
      gsap.utils.toArray('.advantage-item').forEach((item: any, index: number) => {
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

      // CTA section animation
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

      // Hover animations for value items
      gsap.utils.toArray('.value-item').forEach((item: any) => {
        const icon = item.querySelector('.value-icon');
        item.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            rotation: 360,
            scale: 1.1,
            duration: 0.6,
            ease: 'power2.out'
          });
        });
        item.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            rotation: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out'
          });
        });
      });

      // Floating animation for stat numbers
      gsap.utils.toArray('.stat-number').forEach((number: any) => {
        gsap.to(number, {
          y: -5,
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
