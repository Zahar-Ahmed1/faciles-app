import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  template: `
    <section id="hero" class="relative pt-20 min-h-[640px] flex items-center w-full bg-fixed" style="background-image: url('https://readdy.ai/api/search-image?query=Modern%20professional%20office%20building%20interior&width=1920&height=1080&seq=hero1&orientation=landscape'); background-size: cover; background-position: center;">
      <div class="absolute inset-0 bg-primary bg-opacity-70"></div>
      <div class="container mx-auto px-4 relative z-10 w-full">
        <div class="max-w-3xl">
          <h1 class="heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">Comprehensive Facility Management Solutions</h1>
          <p class="text-xl text-gray-100 mb-8">Your one-stop solution for professional facility management that enhances productivity and workplace experience.</p>
          <div class="flex flex-wrap gap-4">
            <a routerLink="/contact" class="bg-secondary text-primary px-6 py-3 font-semibold rounded-button shadow-md hover:shadow-lg transition-all">Get a Free Quote</a>
            <a routerLink="/services" class="bg-transparent border-2 border-white text-white px-6 py-3 font-semibold rounded-button hover:bg-white hover:bg-opacity-10 transition-all">Our Services</a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Services</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">We provide integrated facility management solutions tailored to meet your specific needs and requirements.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-all fade-up">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4">
              <i class="ri-brush-line ri-xl text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Office Cleaning</h3>
            <p class="text-gray-600 mb-4">Professional cleaning services including daily maintenance, deep cleaning, and sanitization.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-all fade-up">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4">
              <i class="ri-shield-check-line ri-xl text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Security Solutions</h3>
            <p class="text-gray-600 mb-4">Guards, surveillance systems, and access control to protect your assets.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-all fade-up">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4">
              <i class="ri-shopping-cart-line ri-xl text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Procurement & Supply</h3>
            <p class="text-gray-600 mb-4">Sourcing and supply of office equipment and consumables.</p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-all fade-up">
            <div class="w-16 h-16 flex items-center justify-center bg-secondary bg-opacity-20 rounded-full mb-4">
              <i class="ri-tools-line ri-xl text-secondary"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Maintenance Services</h3>
            <p class="text-gray-600 mb-4">Electrical, plumbing, HVAC repairs, and preventive maintenance.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Facilyx</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">We deliver excellence in facility management with a focus on reliability, efficiency, and customer satisfaction.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-gray-50 rounded-xl fade-up">
            <div class="text-5xl font-bold text-secondary mb-4">15+</div>
            <h3 class="text-xl font-bold text-primary mb-3">Years of Experience</h3>
            <p class="text-gray-600">Unmatched expertise on every project.</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-xl fade-up">
            <div class="text-5xl font-bold text-secondary mb-4">200+</div>
            <h3 class="text-xl font-bold text-primary mb-3">Satisfied Clients</h3>
            <p class="text-gray-600">Tailored solutions across industries.</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-xl fade-up">
            <div class="text-5xl font-bold text-secondary mb-4">24/7</div>
            <h3 class="text-xl font-bold text-primary mb-3">Support</h3>
            <p class="text-gray-600">Reliable and responsive service.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-bold text-primary">Our Clients</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center fade-up">
          <img src="https://readdy.ai/api/search-image?query=Company%20logo&width=160&height=80&seq=c1&orientation=landscape" alt="Client 1" class="mx-auto opacity-80 hover:opacity-100 transition" />
          <img src="https://readdy.ai/api/search-image?query=Company%20logo&width=160&height=80&seq=c2&orientation=landscape" alt="Client 2" class="mx-auto opacity-80 hover:opacity-100 transition" />
          <img src="https://readdy.ai/api/search-image?query=Company%20logo&width=160&height=80&seq=c3&orientation=landscape" alt="Client 3" class="mx-auto opacity-80 hover:opacity-100 transition" />
          <img src="https://readdy.ai/api/search-image?query=Company%20logo&width=160&height=80&seq=c4&orientation=landscape" alt="Client 4" class="mx-auto opacity-80 hover:opacity-100 transition" />
        </div>
      </div>
    </section>

    <section class="py-16 bg-primary text-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div class="lg:w-2/3 mb-8 lg:mb-0 fade-up">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Facility Management?</h2>
            <p class="text-gray-100 max-w-2xl">Contact us to discuss how our comprehensive solutions can enhance your workplace.</p>
          </div>
          <div class="fade-up">
            <a routerLink="/contact" class="bg-secondary text-primary px-8 py-4 font-semibold rounded-button shadow-md hover:shadow-lg transition-all inline-block">Contact Us Now</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      gsap.from('.heading', { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out' });
    }
    const fadeUps = document.querySelectorAll('.fade-up');
    fadeUps.forEach(el => {
      gsap.fromTo(el,
      { y: 24, opacity: 0 },
      {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });
    const hero = document.getElementById('hero');
    if (hero) {
      if (!reduce) {
        gsap.to(hero, {
          backgroundPosition: '50% 40px',
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
  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach(t => t.kill());
  }
}
