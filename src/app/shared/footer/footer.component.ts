import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-primary text-white mt-16">
      <div class="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <a href="#" class="text-2xl font-['Pacifico'] text-white mb-4 inline-block">Facilyx</a>
          <p class="text-gray-200">Comprehensive facility management solutions tailored to enhance your workplace environment and operational efficiency.</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-3 text-gray-200">
            <li><a routerLink="/" class="hover:text-white transition-colors">Home</a></li>
            <li><a routerLink="/services" class="hover:text-white transition-colors">Services</a></li>
            <li><a routerLink="/about" class="hover:text-white transition-colors">About Us</a></li>
            <li><a routerLink="/testimonials" class="hover:text-white transition-colors">Testimonials</a></li>
            <li><a routerLink="/contact" class="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Newsletter</h3>
          <form class="flex gap-3">
            <input type="email" placeholder="Votre email" class="px-4 py-2 rounded-button text-gray-900" aria-label="Email newsletter">
            <button class="bg-secondary text-primary px-5 py-2 font-semibold rounded-button shadow-sm hover:bg-opacity-90 transition-all">S'abonner</button>
          </form>
        </div>
      </div>
      <div class="border-t border-white/10 py-6 text-center text-gray-300">© 2025 Facilyx. All rights reserved.</div>
    </footer>
  `
})
export class FooterComponent {}
