import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-testimonials',
  imports: [CommonModule],
  template: `
    <section class="pt-24 container mx-auto px-4">
      <h1 class="text-3xl md:text-4xl font-bold text-primary mb-6">Testimonials</h1>
      <div class="overflow-x-auto whitespace-nowrap testimonial-slider flex gap-6 snap-x">
        <div class="testimonial-slide snap-start inline-flex items-center bg-white rounded-xl shadow-card p-6 min-w-[320px]">
          <img src="https://readdy.ai/api/search-image?query=Professional%20headshot&width=100&height=100&seq=test1&orientation=squarish" alt="Client" class="w-12 h-12 rounded-full object-cover mr-4">
          <div>
            <p class="text-muted">Facilyx transformed our facility operations with outstanding service quality.</p>
            <span class="text-primary font-semibold">— Client A</span>
          </div>
        </div>
        <div class="testimonial-slide snap-start inline-flex items-center bg-white rounded-xl shadow-card p-6 min-w-[320px]">
          <img src="https://readdy.ai/api/search-image?query=Professional%20headshot&width=100&height=100&seq=test2&orientation=squarish" alt="Client" class="w-12 h-12 rounded-full object-cover mr-4">
          <div>
            <p class="text-muted">Reliable, efficient, and great communication throughout.</p>
            <span class="text-primary font-semibold">— Client B</span>
          </div>
        </div>
        <div class="testimonial-slide snap-start inline-flex items-center bg-white rounded-xl shadow-card p-6 min-w-[320px]">
          <img src="https://readdy.ai/api/search-image?query=Professional%20headshot&width=100&height=100&seq=test3&orientation=squarish" alt="Client" class="w-12 h-12 rounded-full object-cover mr-4">
          <div>
            <p class="text-muted">Excellent maintenance programs and quick response times.</p>
            <span class="text-primary font-semibold">— Client C</span>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-6 gap-2">
        <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300"></button>
        <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300"></button>
        <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300"></button>
      </div>
    </section>
  `
})
export class TestimonialsComponent implements AfterViewInit {
  ngAfterViewInit() {}
}
