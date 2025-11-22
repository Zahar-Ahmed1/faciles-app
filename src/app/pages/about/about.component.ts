import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule],
  template: `
    <section class="pt-24 container mx-auto px-4">
      <h1 class="text-3xl md:text-4xl font-bold text-primary mb-6">About Us</h1>
      <p class="text-muted mb-8">Founded in 2010, 15+ years experience, 200+ clients, 24/7 support.</p>
      <div class="grid md:grid-cols-2 gap-8">
        <img src="https://readdy.ai/api/search-image?query=Professional%20team&width=600&height=400&seq=about1&orientation=landscape" alt="About Facilyx" class="rounded shadow-lg w-full object-cover">
        <div>
          <h2 class="text-2xl font-bold text-primary mb-3">Our Values</h2>
          <ul class="list-disc pl-6 text-muted">
            <li>Reliability and efficiency</li>
            <li>Customer satisfaction</li>
            <li>Safety and compliance</li>
          </ul>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
