import { Component } from '@angular/core';
import { Course } from 'src/app/core/interfaces/course.interface';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

  courses: Course[] = [
    {name: "Curso de Sublimación", description: "Aprenderás a sublimar distintos productos.", img: "https://www.brildor.com/blog/wp-content/uploads/2014/04/cabecera-que-es-la-sublimacion-2.jpg"},
    {name: "Seminario de sublimación artesanal", description: "Diseña y crea a tu gusto, te llevas tu producto terminado.", img: "https://pinturaseterna.com.ar/blanco/wp-content/uploads/2019/07/03-1.jpg"},
    {name: "Taller de invierno para niños de 6 a 12 años", description: "Deja que fluya tu creatividad en actividades como la pintura y la cocina.", img: "https://kiddingaroundgreenville.com/wp-content/uploads/2023/05/Home-Depot-1.jpg"},
    {name:"Curso de semipermanente", description: "Preparación de uñas, manicura básica, formas de limado y más.", img: "https://media.istockphoto.com/id/1313049258/es/foto/mujeres-manos-con-manicura-de-verano-lunar-de-moda.jpg?s=612x612&w=0&k=20&c=ONimyHwc6_eBDO4nS7LX9l40uYT5Erm-hisZpcp9tO0="},
    {name: "Taller de diseño y reciclaje: luminaria", description: "Diseño y materialización de productos ecológicos.", img: "https://www.planetadeco.com/wp-content/uploads/2014/05/vidrio-techo.jpg"},
    {name: "Taller de diseño y reciclaje: packaging", description: "Diseño y materialización de envoltorios ecológicos.", img: "https://legro.es/wp-content/uploads/2022/01/packaging-ecologico-1.jpg"}
   ]
  constructor() {}

}
