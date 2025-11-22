import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/data.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  standalone: true,
  selector: 'app-testimonials',
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section id="testimonials-hero" class="relative pt-24 pb-16 min-h-[500px] flex items-center w-full bg-fixed" style="background-image: url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'); background-size: cover; background-position: center;">
      <div class="absolute inset-0 bg-primary bg-opacity-75"></div>
      <div class="container mx-auto px-4 relative z-10 w-full">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="testimonials-hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">Témoignages de Nos Clients</h1>
          <p class="testimonials-hero-text text-xl text-gray-100 mb-8">Découvrez ce que nos clients disent de nos services et de leur expérience avec Facilyx.</p>
        </div>
      </div>
    </section>

    <!-- Testimonials Grid Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="section-title text-3xl md:text-4xl font-bold text-primary mb-4">Ce Que Disent Nos Clients</h2>
          <p class="section-subtitle text-gray-600 max-w-2xl mx-auto">Des témoignages authentiques de clients satisfaits.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (testimonial of testimonials; track testimonial.author; let i = $index) {
            <div class="testimonial-card bg-white p-8 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="flex items-center mb-6">
                <img [src]="testimonial.avatar" [alt]="testimonial.author" class="w-16 h-16 rounded-full object-cover mr-4 testimonial-avatar">
                <div>
                  <h3 class="text-lg font-bold text-primary">{{ testimonial.author }}</h3>
                  <div class="flex text-secondary">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 leading-relaxed mb-4 italic">"{{ testimonial.text }}"</p>
              <div class="flex items-center text-secondary">
                <i class="ri-double-quotes-l text-3xl opacity-50"></i>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="section-title text-3xl md:text-4xl font-bold text-primary mb-4">Satisfaction Client en Chiffres</h2>
          <p class="section-subtitle text-gray-600 max-w-2xl mx-auto">Des résultats qui reflètent notre engagement envers l'excellence.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="stat-item text-center p-6 bg-gray-50 rounded-xl">
            <div class="stat-number text-5xl font-bold text-secondary mb-4">98%</div>
            <h3 class="text-xl font-bold text-primary mb-2">Clients Satisfaits</h3>
            <p class="text-gray-600">Taux de satisfaction exceptionnel</p>
          </div>
          <div class="stat-item text-center p-6 bg-gray-50 rounded-xl">
            <div class="stat-number text-5xl font-bold text-secondary mb-4">4.9</div>
            <h3 class="text-xl font-bold text-primary mb-2">Note Moyenne</h3>
            <p class="text-gray-600">Sur 5 étoiles</p>
          </div>
          <div class="stat-item text-center p-6 bg-gray-50 rounded-xl">
            <div class="stat-number text-5xl font-bold text-secondary mb-4">95%</div>
            <h3 class="text-xl font-bold text-primary mb-2">Clients Fidèles</h3>
            <p class="text-gray-600">Renouvellement de contrat</p>
          </div>
          <div class="stat-item text-center p-6 bg-gray-50 rounded-xl">
            <div class="stat-number text-5xl font-bold text-secondary mb-4">24h</div>
            <h3 class="text-xl font-bold text-primary mb-2">Temps de Réponse</h3>
            <p class="text-gray-600">Réactivité garantie</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Trust Us Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="section-title text-3xl md:text-4xl font-bold text-primary mb-4">Pourquoi Nos Clients Nous Font Confiance</h2>
          <p class="section-subtitle text-gray-600 max-w-2xl mx-auto">Les raisons qui font de Facilyx le choix privilégié.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="trust-item bg-white p-6 rounded-xl shadow-card">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4 trust-icon">
              <i class="ri-award-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Excellence Reconnue</h3>
            <p class="text-gray-600">Certifications et distinctions qui témoignent de notre qualité de service.</p>
          </div>
          <div class="trust-item bg-white p-6 rounded-xl shadow-card">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4 trust-icon">
              <i class="ri-time-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Réactivité Garantie</h3>
            <p class="text-gray-600">Intervention rapide et efficace pour répondre à tous vos besoins urgents.</p>
          </div>
          <div class="trust-item bg-white p-6 rounded-xl shadow-card">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4 trust-icon">
              <i class="ri-customer-service-2-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Support Dédié</h3>
            <p class="text-gray-600">Une équipe à votre écoute, disponible 24/7 pour vous accompagner.</p>
          </div>
          <div class="trust-item bg-white p-6 rounded-xl shadow-card">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4 trust-icon">
              <i class="ri-shield-check-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Fiabilité Totale</h3>
            <p class="text-gray-600">Des services constants et fiables qui respectent toujours nos engagements.</p>
          </div>
          <div class="trust-item bg-white p-6 rounded-xl shadow-card">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4 trust-icon">
              <i class="ri-money-dollar-circle-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Rapport Qualité-Prix</h3>
            <p class="text-gray-600">Des solutions compétitives qui offrent le meilleur rapport qualité-prix.</p>
          </div>
          <div class="trust-item bg-white p-6 rounded-xl shadow-card">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4 trust-icon">
              <i class="ri-team-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Équipe Qualifiée</h3>
            <p class="text-gray-600">Des professionnels formés et expérimentés pour un service de qualité.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Testimonial Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-primary text-white p-12 rounded-2xl shadow-xl featured-testimonial">
            <div class="text-center mb-8">
              <div class="flex justify-center text-secondary text-4xl mb-4">
                <i class="ri-double-quotes-l"></i>
              </div>
              <p class="text-2xl md:text-3xl font-light leading-relaxed mb-8">
                "Facilyx a complètement transformé la gestion de nos installations. Leur professionnalisme, leur réactivité et leur attention aux détails sont remarquables. Nous recommandons vivement leurs services."
              </p>
              <div class="flex items-center justify-center">
                <img src="https://readdy.ai/api/search-image?query=Professional%20executive%20headshot&width=80&height=80&seq=featured&orientation=squarish" alt="CEO" class="w-16 h-16 rounded-full object-cover mr-4 border-2 border-secondary">
                <div class="text-left">
                  <h3 class="text-xl font-bold">Jean Dupont</h3>
                  <p class="text-gray-200">CEO, Entreprise XYZ</p>
                </div>
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
          <h2 class="cta-title text-3xl md:text-4xl font-bold mb-4">Rejoignez Nos Clients Satisfaits</h2>
          <p class="cta-text text-gray-100 mb-8 text-lg">Découvrez pourquoi tant de clients nous font confiance pour la gestion de leurs installations.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <a routerLink="/contact" class="cta-button bg-secondary text-primary px-8 py-4 font-semibold rounded-button shadow-md hover:shadow-lg transition-all inline-block transform hover:scale-105">Demander un Devis</a>
            <a routerLink="/services" class="cta-button bg-transparent border-2 border-white text-white px-8 py-4 font-semibold rounded-button hover:bg-white hover:bg-opacity-10 transition-all inline-block">Nos Services</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
  testimonials: any[] = [
    { author: "Client A", text: "Facilyx transformed our facility operations.", avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot&width=100&height=100&seq=test1&orientation=squarish" },
    { author: "Client B", text: "Reliable, efficient, and great communication.", avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot&width=100&height=100&seq=test2&orientation=squarish" },
    { author: "Client C", text: "Excellent maintenance programs and quick responses.", avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot&width=100&height=100&seq=test3&orientation=squarish" }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Charger les témoignages depuis le service
    this.dataService.testimonials$.subscribe(testimonials => {
      if (testimonials && testimonials.length > 0) {
        this.testimonials = testimonials;
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

      // Hero animations
      gsap.fromTo('.testimonials-hero-title',
        { y: 0, opacity: 1 },
        {
          y: 30,
          opacity: 0,
          duration: 0,
          immediateRender: false
        }
      );
      gsap.to('.testimonials-hero-title', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.fromTo('.testimonials-hero-text',
        { y: 0, opacity: 1 },
        {
          y: 20,
          opacity: 0,
          duration: 0,
          immediateRender: false
        }
      );
      gsap.to('.testimonials-hero-text', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out'
      });

      // Parallax effect on hero
      const hero = document.getElementById('testimonials-hero');
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

      // Testimonial cards animation
      gsap.utils.toArray('.testimonial-card').forEach((card: any, index: number) => {
        gsap.fromTo(card,
          { y: 0, opacity: 1, scale: 1 },
          {
            y: 60,
            opacity: 0,
            scale: 0.9,
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
                  scale: 1,
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: 'power2.out'
                });
              }
            }
          }
        );
      });

      // Testimonial avatars animation
      gsap.utils.toArray('.testimonial-avatar').forEach((avatar: any) => {
        gsap.fromTo(avatar,
          { scale: 0, rotation: -180 },
          {
            scale: 0,
            rotation: -180,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: avatar,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(avatar, {
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

      // Stat numbers counter animation
      gsap.utils.toArray('.stat-number').forEach((number: any) => {
        const originalText = number.textContent || '';
        // Extraire la valeur numérique et le suffixe
        const match = originalText.match(/(\d+\.?\d*)(.*)/);
        if (match) {
          const targetValue = parseFloat(match[1]);
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
                  if (suffix === '%' || suffix === 'h') {
                    number.textContent = Math.round(counter.value) + suffix;
                  } else {
                    number.textContent = counter.value.toFixed(1) + suffix;
                  }
                }
              });
            }
          });
        }
      });

      // Trust items animation
      gsap.utils.toArray('.trust-item').forEach((item: any, index: number) => {
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

      // Trust icons animation
      gsap.utils.toArray('.trust-icon').forEach((icon: any) => {
        gsap.fromTo(icon,
          { scale: 0, rotation: 360 },
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

      // Featured testimonial animation
      gsap.fromTo('.featured-testimonial',
        { y: 0, opacity: 1, scale: 1 },
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: '.featured-testimonial',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to('.featured-testimonial', {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power2.out'
              });
            }
          }
        }
      );

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

      // Hover animations for testimonial cards
      gsap.utils.toArray('.testimonial-card').forEach((card: any) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -5,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });

      // Hover animations for trust items
      gsap.utils.toArray('.trust-item').forEach((item: any) => {
        const icon = item.querySelector('.trust-icon');
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
