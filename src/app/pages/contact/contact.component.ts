import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section id="contact-hero" class="relative pt-24 pb-16 min-h-[500px] flex items-center w-full bg-fixed" style="background-image: url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'); background-size: cover; background-position: center;">
      <div class="absolute inset-0 bg-primary bg-opacity-75"></div>
      <div class="container mx-auto px-4 relative z-10 w-full">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="contact-hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">Contactez-Nous</h1>
          <p class="contact-hero-text text-xl text-gray-100 mb-8">Nous sommes là pour répondre à toutes vos questions et discuter de vos besoins en gestion d'installations.</p>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="contact-form bg-white p-8 rounded-xl shadow-card">
            <h2 class="section-title text-3xl font-bold text-primary mb-6">Envoyez-Nous un Message</h2>
            <form [formGroup]="form" class="space-y-6" (ngSubmit)="onSubmit()" aria-label="Contact form">
              <div class="form-group">
                <label for="name" class="block font-semibold text-primary mb-2">Nom</label>
                <input id="name" type="text" class="w-full px-4 py-3 rounded-button border border-gray-300 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary transition" formControlName="name" required>
              </div>
              <div class="form-group">
                <label for="email" class="block font-semibold text-primary mb-2">Email</label>
                <input id="email" type="email" class="w-full px-4 py-3 rounded-button border border-gray-300 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary transition" formControlName="email" required>
              </div>
              <div class="form-group">
                <label for="message" class="block font-semibold text-primary mb-2">Message</label>
                <textarea id="message" rows="6" class="w-full px-4 py-3 rounded-button border border-gray-300 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary transition resize-none" formControlName="message" required></textarea>
              </div>
              <div class="form-group flex items-center gap-3">
                <div id="consentCheckbox" class="custom-checkbox" [class.checked]="form.get('consent')?.value" role="checkbox" [attr.aria-checked]="form.get('consent')?.value" tabindex="0" (click)="toggleConsent()" (keydown.enter)="toggleConsent()"></div>
                <label class="text-gray-600 cursor-pointer">J'accepte d'être contacté</label>
              </div>
              <div class="form-group">
                <button class="w-full bg-secondary text-primary px-6 py-3 font-semibold rounded-button shadow-md hover:shadow-lg transition-all transform hover:scale-105" type="submit" [disabled]="form.invalid">Envoyer</button>
              </div>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="contact-info">
            <h2 class="section-title text-3xl font-bold text-primary mb-6">Informations de Contact</h2>
            <p class="text-gray-600 mb-8 text-lg">N'hésitez pas à nous contacter par téléphone, email ou à nous rendre visite. Notre équipe est disponible pour vous aider.</p>
            
            <div class="space-y-6">
              <div class="contact-item flex items-start p-6 bg-white rounded-xl shadow-card">
                <div class="w-14 h-14 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mr-4 flex-shrink-0 contact-icon">
                  <i class="ri-phone-line ri-xl text-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-primary mb-2">Téléphone</h3>
                  <p class="text-gray-600">+33 1 23 45 67 89</p>
                  <p class="text-gray-600">+33 1 23 45 67 90</p>
                </div>
              </div>

              <div class="contact-item flex items-start p-6 bg-white rounded-xl shadow-card">
                <div class="w-14 h-14 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mr-4 flex-shrink-0 contact-icon">
                  <i class="ri-mail-line ri-xl text-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-primary mb-2">Email</h3>
                  <p class="text-gray-600">contact&#64;facilyx.com</p>
                  <p class="text-gray-600">support&#64;facilyx.com</p>
                </div>
              </div>

              <div class="contact-item flex items-start p-6 bg-white rounded-xl shadow-card">
                <div class="w-14 h-14 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mr-4 flex-shrink-0 contact-icon">
                  <i class="ri-map-pin-line ri-xl text-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-primary mb-2">Adresse</h3>
                  <p class="text-gray-600">123 Avenue des Champs-Élysées</p>
                  <p class="text-gray-600">75008 Paris, France</p>
                </div>
              </div>

              <div class="contact-item flex items-start p-6 bg-white rounded-xl shadow-card">
                <div class="w-14 h-14 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mr-4 flex-shrink-0 contact-icon">
                  <i class="ri-time-line ri-xl text-secondary"></i>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-primary mb-2">Heures d'Ouverture</h3>
                  <p class="text-gray-600">Lundi - Vendredi: 8h00 - 18h00</p>
                  <p class="text-gray-600">Samedi: 9h00 - 13h00</p>
                  <p class="text-gray-600">Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="section-title text-3xl md:text-4xl font-bold text-primary mb-4">Notre Localisation</h2>
          <p class="section-subtitle text-gray-600 max-w-2xl mx-auto">Venez nous rendre visite dans nos bureaux.</p>
        </div>
        <div class="map-container bg-gray-100 rounded-2xl overflow-hidden shadow-xl h-96 flex items-center justify-center">
          <div class="text-center">
            <i class="ri-map-pin-2-line text-6xl text-secondary opacity-50 mb-4"></i>
            <p class="text-gray-500">Carte interactive</p>
            <p class="text-gray-400 text-sm mt-2">123 Avenue des Champs-Élysées, 75008 Paris</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Contact Us Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="section-title text-3xl md:text-4xl font-bold text-primary mb-4">Pourquoi Nous Contacter ?</h2>
          <p class="section-subtitle text-gray-600 max-w-2xl mx-auto">Les avantages de discuter avec notre équipe.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="reason-item bg-white p-6 rounded-xl shadow-card">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4 reason-icon">
              <i class="ri-lightbulb-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Consultation Gratuite</h3>
            <p class="text-gray-600">Bénéficiez d'une consultation gratuite pour discuter de vos besoins et découvrir nos solutions.</p>
          </div>
          <div class="reason-item bg-white p-6 rounded-xl shadow-card">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4 reason-icon">
              <i class="ri-file-list-3-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Devis Personnalisé</h3>
            <p class="text-gray-600">Recevez un devis détaillé adapté à vos besoins spécifiques et à votre budget.</p>
          </div>
          <div class="reason-item bg-white p-6 rounded-xl shadow-card">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4 reason-icon">
              <i class="ri-customer-service-2-line ri-2x text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Support Expert</h3>
            <p class="text-gray-600">Notre équipe d'experts est disponible pour répondre à toutes vos questions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="section-title text-3xl md:text-4xl font-bold text-primary mb-4">Questions Fréquentes</h2>
          <p class="section-subtitle text-gray-600 max-w-2xl mx-auto">Trouvez des réponses aux questions les plus courantes.</p>
        </div>
        <div class="max-w-3xl mx-auto space-y-4">
          <div class="faq-item bg-gray-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-primary mb-2">Quels services proposez-vous ?</h3>
            <p class="text-gray-600">Nous proposons une gamme complète de services de gestion d'installations incluant le nettoyage, la sécurité, la maintenance et l'approvisionnement.</p>
          </div>
          <div class="faq-item bg-gray-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-primary mb-2">Quel est votre temps de réponse ?</h3>
            <p class="text-gray-600">Nous nous engageons à répondre à toutes les demandes dans un délai de 24 heures, avec un support d'urgence disponible 24/7.</p>
          </div>
          <div class="faq-item bg-gray-50 p-6 rounded-xl">
            <h3 class="text-lg font-bold text-primary mb-2">Proposez-vous des contrats personnalisés ?</h3>
            <p class="text-gray-600">Oui, nous adaptons nos services et nos contrats selon les besoins spécifiques de chaque client pour garantir la meilleure solution.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="cta-title text-3xl md:text-4xl font-bold mb-4">Prêt à Commencer ?</h2>
          <p class="cta-text text-gray-100 mb-8 text-lg">Contactez-nous dès aujourd'hui et découvrez comment nous pouvons transformer la gestion de vos installations.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <a routerLink="/services" class="cta-button bg-secondary text-primary px-8 py-4 font-semibold rounded-button shadow-md hover:shadow-lg transition-all inline-block transform hover:scale-105">Nos Services</a>
            <a routerLink="/about" class="cta-button bg-transparent border-2 border-white text-white px-8 py-4 font-semibold rounded-button hover:bg-white hover:bg-opacity-10 transition-all inline-block">À Propos</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent implements AfterViewInit {
  form!: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      consent: [false]
    });
  }

  ngAfterViewInit() {
    // Attendre un peu pour s'assurer que le DOM est complètement rendu
    setTimeout(() => {
      this.initAnimations();
      this.updateCheckbox();
    }, 100);
  }

  toggleConsent() {
    const curr = (this.form.get('consent')?.value as boolean) ?? false;
    this.form.patchValue({ consent: !curr });
    this.updateCheckbox();
  }

  updateCheckbox() {
    const checkbox = document.getElementById('consentCheckbox');
    if (checkbox) {
      if (this.form.get('consent')?.value) {
        checkbox.classList.add('checked');
        checkbox.setAttribute('aria-checked', 'true');
      } else {
        checkbox.classList.remove('checked');
        checkbox.setAttribute('aria-checked', 'false');
      }
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      // Ici vous pouvez ajouter la logique d'envoi du formulaire
    }
  }

  private initAnimations() {
    try {
      gsap.registerPlugin(ScrollTrigger);

      // Hero animations
      gsap.fromTo('.contact-hero-title',
        { y: 0, opacity: 1 },
        {
          y: 30,
          opacity: 0,
          duration: 0,
          immediateRender: false
        }
      );
      gsap.to('.contact-hero-title', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.fromTo('.contact-hero-text',
        { y: 0, opacity: 1 },
        {
          y: 20,
          opacity: 0,
          duration: 0,
          immediateRender: false
        }
      );
      gsap.to('.contact-hero-text', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out'
      });

      // Parallax effect on hero
      const hero = document.getElementById('contact-hero');
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

      // Contact form animation
      gsap.fromTo('.contact-form',
        { x: 0, opacity: 1 },
        {
          x: -80,
          opacity: 0,
          duration: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to('.contact-form', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
              });
            }
          }
        }
      );

      // Contact info animation
      gsap.fromTo('.contact-info',
        { x: 0, opacity: 1 },
        {
          x: 80,
          opacity: 0,
          duration: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to('.contact-info', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
              });
            }
          }
        }
      );

      // Contact items animation
      gsap.utils.toArray('.contact-item').forEach((item: any, index: number) => {
        gsap.fromTo(item,
          { y: 0, opacity: 1 },
          {
            y: 30,
            opacity: 0,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(item, {
                  y: 0,
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

      // Contact icons animation
      gsap.utils.toArray('.contact-icon').forEach((icon: any) => {
        gsap.fromTo(icon,
          { scale: 0, rotation: -180 },
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
                  ease: 'back.out(1.7)'
                });
              }
            }
          }
        );
      });

      // Form groups animation
      gsap.utils.toArray('.form-group').forEach((group: any, index: number) => {
        gsap.fromTo(group,
          { y: 0, opacity: 1 },
          {
            y: 20,
            opacity: 0,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: group,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(group, {
                  y: 0,
                  opacity: 1,
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: 'power2.out'
                });
              }
            }
          }
        );
      });

      // Map container animation
      gsap.fromTo('.map-container',
        { y: 0, opacity: 1, scale: 1 },
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 0,
          immediateRender: false,
          scrollTrigger: {
            trigger: '.map-container',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
              gsap.to('.map-container', {
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

      // Reason items animation
      gsap.utils.toArray('.reason-item').forEach((item: any, index: number) => {
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

      // Reason icons animation
      gsap.utils.toArray('.reason-icon').forEach((icon: any) => {
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

      // FAQ items animation
      gsap.utils.toArray('.faq-item').forEach((item: any, index: number) => {
        gsap.fromTo(item,
          { y: 0, opacity: 1 },
          {
            y: 30,
            opacity: 0,
            duration: 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                gsap.to(item, {
                  y: 0,
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

      // Hover animations for contact items
      gsap.utils.toArray('.contact-item').forEach((item: any) => {
        const icon = item.querySelector('.contact-icon');
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

      // Hover animations for reason items
      gsap.utils.toArray('.reason-item').forEach((item: any) => {
        const icon = item.querySelector('.reason-icon');
        item.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            rotation: 360,
            scale: 1.1,
            duration: 0.6,
            ease: 'power2.out'
          });
          gsap.to(item, {
            y: -5,
            duration: 0.3,
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
          gsap.to(item, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });

    } catch (error) {
      console.warn('GSAP animation error:', error);
      // Si GSAP ne fonctionne pas, le contenu reste visible
    }
  }
}
