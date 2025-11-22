import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  standalone: true,
  selector: 'app-services',
  imports: [CommonModule, RouterLink],
  template: `
    <section id="services-hero" class="relative pt-24 pb-12 w-full bg-fixed" style="background-image: url('https://readdy.ai/api/search-image?query=Modern%20facility%20services%20team&width=1920&height=1080&seq=servicesHero&orientation=landscape'); background-size: cover; background-position: center;">
      <div class="absolute inset-0 bg-primary bg-opacity-70"></div>
      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Our Services</h1>
        <p class="text-lg text-gray-100 max-w-2xl">Integrated solutions to keep your facilities clean, secure, efficient and compliant.</p>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">What We Offer</h2>
          <p class="text-muted max-w-2xl mx-auto">Comprehensive and customizable services tailored to your operational needs.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="service-card bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition hover:scale-[1.02] fade-up">
            <div class="w-14 h-14 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4">
              <i class="ri-brush-line ri-xl text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Office Cleaning</h3>
            <p class="text-muted mb-4">Daily maintenance, deep cleaning, disinfection, and tailored routines for workplaces.</p>
            <a routerLink="/contact" class="text-secondary font-medium">Get a Quote</a>
          </div>

          <div class="service-card bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition hover:scale-[1.02] fade-up">
            <div class="w-14 h-14 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4">
              <i class="ri-shield-check-line ri-xl text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Security Solutions</h3>
            <p class="text-muted mb-4">On-site guards, CCTV, access control, incident response, and compliance.</p>
            <a routerLink="/contact" class="text-secondary font-medium">Get a Quote</a>
          </div>

          <div class="service-card bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition hover:scale-[1.02] fade-up">
            <div class="w-14 h-14 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4">
              <i class="ri-shopping-cart-line ri-xl text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Procurement & Supply</h3>
            <p class="text-muted mb-4">Sourcing, vendor management, consumables supply, and inventory optimization.</p>
            <a routerLink="/contact" class="text-secondary font-medium">Get a Quote</a>
          </div>

          <div class="service-card bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition hover:scale-[1.02] fade-up">
            <div class="w-14 h-14 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4">
              <i class="ri-tools-line ri-xl text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Maintenance Services</h3>
            <p class="text-muted mb-4">Preventive programs, HVAC, electrical and plumbing repairs, and audits.</p>
            <a routerLink="/contact" class="text-secondary font-medium">Get a Quote</a>
          </div>

          <div class="service-card bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition hover:scale-[1.02] fade-up">
            <div class="w-14 h-14 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4">
              <i class="ri-building-2-line ri-xl text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Facility Audits</h3>
            <p class="text-muted mb-4">Compliance checks, safety assessments, and improvement roadmaps.</p>
            <a routerLink="/contact" class="text-secondary font-medium">Get a Quote</a>
          </div>

          <div class="service-card bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition hover:scale-[1.02] fade-up">
            <div class="w-14 h-14 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4">
              <i class="ri-recycle-line ri-xl text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-2">Sustainability</h3>
            <p class="text-muted mb-4">Eco-friendly products, waste reduction, and energy efficiency initiatives.</p>
            <a routerLink="/contact" class="text-secondary font-medium">Get a Quote</a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">How We Work</h2>
          <p class="text-muted max-w-2xl mx-auto">A proven process designed to deliver consistent results.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="p-6 bg-white rounded-xl shadow-card text-center fade-up">
            <div class="text-2xl font-bold text-secondary mb-2">01</div>
            <h3 class="text-lg font-semibold text-primary mb-1">Consultation</h3>
            <p class="text-muted">Understanding your needs and constraints.</p>
          </div>
          <div class="p-6 bg-white rounded-xl shadow-card text-center fade-up">
            <div class="text-2xl font-bold text-secondary mb-2">02</div>
            <h3 class="text-lg font-semibold text-primary mb-1">Planning</h3>
            <p class="text-muted">Tailored service plans and schedules.</p>
          </div>
          <div class="p-6 bg-white rounded-xl shadow-card text-center fade-up">
            <div class="text-2xl font-bold text-secondary mb-2">03</div>
            <h3 class="text-lg font-semibold text-primary mb-1">Execution</h3>
            <p class="text-muted">Experienced teams and quality tools.</p>
          </div>
          <div class="p-6 bg-white rounded-xl shadow-card text-center fade-up">
            <div class="text-2xl font-bold text-secondary mb-2">04</div>
            <h3 class="text-lg font-semibold text-primary mb-1">Assurance</h3>
            <p class="text-muted">Monitoring, feedback, and continuous improvement.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-primary text-white">
      <div class="container mx-auto px-4 text-center fade-up">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to discuss your service plan?</h2>
        <p class="text-gray-100 mb-6">Let’s design a solution that fits your facility.</p>
        <a routerLink="/contact" class="bg-secondary text-primary px-8 py-4 font-semibold rounded-button shadow-md hover:shadow-lg transition-all inline-block">Contact Us</a>
      </div>
    </section>
  `
})
export class ServicesComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    const fadeUps = document.querySelectorAll('.fade-up');
    gsap.from(fadeUps, {
      y: 24,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: fadeUps[0] ?? document.body,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
    const hero = document.getElementById('services-hero');
    if (hero) {
      gsap.to(hero, {
        backgroundPosition: '50% 60px',
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }
}
