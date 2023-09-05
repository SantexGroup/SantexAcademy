import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'] // Agrega la ruta correcta a tu CSS
})
export class TestimonialsComponent {
  // @Input() title!: string;
  @Input() image!: string;
  @Input() name!: string;
  @Input() volunteerPlace!: string;
  @Input() testimonial!: string;
}
