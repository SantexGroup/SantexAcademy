import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor(private authService: AuthService) {}

  volunteeringData = [
    {
      image:
        'https://res.cloudinary.com/carina-bosio/image/upload/v1691944413/xAcademy/medioambiente_vn0xt9.png',
      title: 'Medioambiente y fauna',
      backgroundColor: 'rgba(30, 22, 95, 0.6)',
    },
    {
      image:
        'https://res.cloudinary.com/carina-bosio/image/upload/v1691968784/xAcademy/comunitario_eialip.png',
      title: 'Asistencia social',
      backgroundColor: 'rgba(255, 64, 33, 0.6)',
    },
    {
      image:
        'https://res.cloudinary.com/carina-bosio/image/upload/v1691968944/xAcademy/salud_f0sgn7.png',
      title: 'Salud y discapacidad',
      backgroundColor: 'rgba(177, 35, 125, 0.6)',
    },
  ];

  testimonialsData = [
    {
      image:
        'https://res.cloudinary.com/carina-bosio/image/upload/v1692064520/xAcademy/persona1.jpeg_ymxl2m.png',
      name: 'María Celeste Siro',
      volunteerplace: 'Voluntaria en Fundación Manos Abiertas',
      testimonial:
        '"Fue una experiencia gratificante trabajar como voluntaria en la Fundación Manos Abiertas. Contribuir al bienestar de quienes más lo necesitan y formar parte de un equipo comprometido fue realmente enriquecedor. ¡Espero seguir apoyando su noble labor en el futuro!"',
    },
    {
      image:
        'https://res.cloudinary.com/carina-bosio/image/upload/v1692024801/xAcademy/persona2_rtflfq.jpg',
      name: 'Franco Corvalán',
      volunteerplace: 'Voluntario en Greenpeace',
      testimonial:
        '"Mi tiempo como voluntario en Greenpeace fue increíblemente inspirador. Colaborar en la defensa del medio ambiente y unirme a otros apasionados por el cambio marcó una experiencia que atesoro. Sigamos trabajando juntos por un mundo más verde y sostenible"',
    },
    {
      image:
        'https://res.cloudinary.com/carina-bosio/image/upload/v1692064524/xAcademy/persona_3.jpeg_hgmkae.png',
      name: 'Blanca López',
      volunteerplace: 'Voluntaria en Cruz Roja Argentina',
      testimonial:
        '"Ser voluntaria en Cruz Roja Argentina fue una experiencia humana inigualable. Brindar ayuda en momentos de necesidad y formar parte de una red solidaria me llenó de gratitud. Sigamos construyendo un futuro más resiliente y compasivo juntos"',
    },
  ];

  ngOnInit() {
    const token = this.authService.getAuthToken();
  }
}
