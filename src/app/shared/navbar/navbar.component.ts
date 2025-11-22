import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <a routerLink="/" class="text-2xl font-['Pacifico'] text-primary z-50" (click)="closeMobileMenu()">Facilyx</a>
        <nav class="hidden md:flex items-center space-x-8">
          <a routerLink="/" routerLinkActive="text-primary" class="text-gray-800 font-medium hover:text-primary transition-colors">Home</a>
          <a routerLink="/services" routerLinkActive="text-primary" class="text-gray-800 font-medium hover:text-primary transition-colors">Services</a>
          <a routerLink="/about" routerLinkActive="text-primary" class="text-gray-800 font-medium hover:text-primary transition-colors">About Us</a>
          <a routerLink="/testimonials" routerLinkActive="text-primary" class="text-gray-800 font-medium hover:text-primary transition-colors">Testimonials</a>
          <a routerLink="/contact" routerLinkActive="text-primary" class="text-gray-800 font-medium hover:text-primary transition-colors">Contact</a>
        </nav>
        <div class="flex items-center space-x-4">
          <a routerLink="/contact" class="hidden md:block bg-secondary text-primary px-5 py-2 font-semibold rounded-button shadow-sm hover:bg-opacity-90 transition-all whitespace-nowrap">Get a Quote</a>
          <button 
            (click)="toggleMobileMenu()" 
            class="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary transition-colors z-50"
            [attr.aria-expanded]="isMobileMenuOpen"
            aria-label="Toggle mobile menu"
          >
            <i [class]="isMobileMenuOpen ? 'ri-close-line ri-lg' : 'ri-menu-line ri-lg'"></i>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        class="md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out"
        [class.transform]="true"
        [class.translate-x-0]="isMobileMenuOpen"
        [class.-translate-x-full]="!isMobileMenuOpen"
        [class.opacity-100]="isMobileMenuOpen"
        [class.opacity-0]="!isMobileMenuOpen"
        [class.pointer-events-none]="!isMobileMenuOpen"
        style="top: 64px;"
      >
        <nav class="flex flex-col px-4 py-8 space-y-4">
          <a 
            routerLink="/" 
            routerLinkActive="text-primary" 
            class="text-gray-800 font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-primary transition-colors"
            (click)="closeMobileMenu()"
          >
            Home
          </a>
          <a 
            routerLink="/services" 
            routerLinkActive="text-primary" 
            class="text-gray-800 font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-primary transition-colors"
            (click)="closeMobileMenu()"
          >
            Services
          </a>
          <a 
            routerLink="/about" 
            routerLinkActive="text-primary" 
            class="text-gray-800 font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-primary transition-colors"
            (click)="closeMobileMenu()"
          >
            About Us
          </a>
          <a 
            routerLink="/testimonials" 
            routerLinkActive="text-primary" 
            class="text-gray-800 font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-primary transition-colors"
            (click)="closeMobileMenu()"
          >
            Testimonials
          </a>
          <a 
            routerLink="/contact" 
            routerLinkActive="text-primary" 
            class="text-gray-800 font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-primary transition-colors"
            (click)="closeMobileMenu()"
          >
            Contact
          </a>
          <a 
            routerLink="/contact" 
            class="mt-4 bg-secondary text-primary px-6 py-3 font-semibold rounded-button shadow-sm hover:bg-opacity-90 transition-all text-center"
            (click)="closeMobileMenu()"
          >
            Get a Quote
          </a>
        </nav>
      </div>
      
      <!-- Overlay -->
      <div 
        *ngIf="isMobileMenuOpen"
        class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
        (click)="closeMobileMenu()"
        style="top: 64px;"
      ></div>
    </header>
  `
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  constructor(private router: Router) {
    // Fermer le menu mobile lors de la navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMobileMenu();
      });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Empêcher le scroll du body quand le menu est ouvert
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Fermer le menu si on passe en mode desktop
    if (event.target.innerWidth >= 768) {
      this.closeMobileMenu();
    }
  }
}
