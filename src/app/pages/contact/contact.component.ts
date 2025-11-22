import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="pt-24 container mx-auto px-4">
      <h1 class="text-3xl md:text-4xl font-bold text-primary mb-6">Get In Touch</h1>
      <form [formGroup]="form" class="grid md:grid-cols-2 gap-6" (ngSubmit)="onSubmit()" aria-label="Contact form">
        <div class="flex flex-col gap-2">
          <label for="name" class="font-semibold">Name</label>
          <input id="name" type="text" class="px-4 py-2 rounded-button border" formControlName="name" required>
        </div>
        <div class="flex flex-col gap-2">
          <label for="email" class="font-semibold">Email</label>
          <input id="email" type="email" class="px-4 py-2 rounded-button border" formControlName="email" required>
        </div>
        <div class="md:col-span-2 flex flex-col gap-2">
          <label for="message" class="font-semibold">Message</label>
          <textarea id="message" rows="5" class="px-4 py-2 rounded-button border" formControlName="message" required></textarea>
        </div>
        <div class="md:col-span-2 flex items-center gap-3">
          <div id="consentCheckbox" class="custom-checkbox" role="checkbox" aria-checked="false" tabindex="0" (click)="toggleConsent()"></div>
          <label class="text-muted">I agree to be contacted</label>
        </div>
        <div class="md:col-span-2">
          <button class="bg-secondary text-primary px-6 py-3 font-semibold rounded-button shadow-md hover:shadow-lg transition-all" type="submit">Send</button>
        </div>
      </form>
    </section>
  `
})
export class ContactComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      consent: [false]
    });
  }
  toggleConsent() {
    const curr = (this.form.get('consent')?.value as boolean) ?? false;
    this.form.patchValue({ consent: !curr });
  }
  onSubmit() {}
}
