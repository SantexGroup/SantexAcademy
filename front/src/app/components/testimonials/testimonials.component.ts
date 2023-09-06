import { Component } from '@angular/core';
import { Testimonials } from 'src/app/core/interface/testimonials.interface';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  testimonials: Testimonials[] = [{
    "id": 1,
    "full_name": "Ruthann Durban",
    "description": "Gracias por este increíble servicio! Su atención personalizada y contenido de calidad super.",
    "image": "https://i.pravatar.cc/100/250",
    "role": "Programmer Analyst II",
    "alt": "Foto de Ruthann Durban - Testimonio"
  }, {
    "id": 2,
    "full_name": "Priscilla Rigney",
    "description": "Agradezco enormemente a esta empresa por brindarme oportunidades de capacitación.",
    "image": "https://i.pravatar.cc/100/200/200",
    "role": "Technical Writer",
    "alt": "Foto de Priscilla Rigney - Testimonio"
  }, {
    "id": 3,
    "full_name": "Bea Kensitt",
    "description": "No puedo expresar lo agradecido que estoy por haber encontrado esta plataforma.",
    "image": "https://i.pravatar.cc/100/220",
    "role": "Operator",
    "alt": "Foto de Bea Kensitt - Testimonio"
  }];



}
