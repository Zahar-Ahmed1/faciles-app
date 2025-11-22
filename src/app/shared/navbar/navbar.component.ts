import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header [class.bg-white]="scrolled" [class.bg-transparent]="!scrolled" [class.shadow-md]="scrolled" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <a routerLink="/" class="text-2xl font-['Pacifico'] text-primary">Facilyx</a>
        <nav class="hidden md:flex items-center space-x-8">
          <a routerLink="/" routerLinkActive="text-primary" class="text-gray-800 font-medium hover:text-primary transition-colors">Home</a>
          <a routerLink="/services" routerLinkActive="text-primary" class="text-gray-800 font-medium hover:text-primary transition-colors">Services</a>
          <a routerLink="/about" routerLinkActive="text-primary" class="text-gray-800 font-medium hover:text-primary transition-colors">About Us</a>
          <a routerLink="/testimonials" routerLinkActive="text-primary" class="text-gray-800 font-medium hover:text-primary transition-colors">Testimonials</a>
          <a routerLink="/contact" routerLinkActive="text-primary" class="text-gray-800 font-medium hover:text-primary transition-colors">Contact</a>
        </nav>
        <div class="flex items-center space-x-4">
          <a routerLink="/contact" class="hidden md:block bg-secondary text-primary px-5 py-2 font-semibold rounded-button shadow-sm hover:bg-opacity-90 transition-all whitespace-nowrap">Get a Quote</a>
          <button id="mobileMenuButton" class="md:hidden w-10 h-10 flex items-center justify-center text-gray-700">
            <i class="ri-menu-line ri-lg"></i>
          </button>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent {
  scrolled = false;
  @HostListener('window:scroll') onScroll() {
    this.scrolled = window.scrollY > 16;
  }
}
