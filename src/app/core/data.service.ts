import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface ServiceItem { title: string; description: string; icon: string }
export interface TestimonialItem { author: string; text: string; avatar: string }
export interface ClientLogo { name: string; logo: string }

@Injectable({ providedIn: 'root' })
export class DataService {
  services$ = new BehaviorSubject<ServiceItem[]>([]);
  testimonials$ = new BehaviorSubject<TestimonialItem[]>([]);
  clients$ = new BehaviorSubject<ClientLogo[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<ServiceItem[]>('/assets/mock/services.json').subscribe(v => this.services$.next(v));
    this.http.get<TestimonialItem[]>('/assets/mock/testimonials.json').subscribe(v => this.testimonials$.next(v));
    this.http.get<ClientLogo[]>('/assets/mock/clients.json').subscribe(v => this.clients$.next(v));
  }
}
