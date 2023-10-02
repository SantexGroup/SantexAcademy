import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-chanchada',
  templateUrl: './chanchada.component.html',
  styleUrls: ['./chanchada.component.css']
})
export class ChanchadaComponent implements OnInit {

  texto: string = '';
  opcionSeleccionada: 'ByName' | 'byProfesor' = 'ByName';
  courses: any[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  buscar() {
    if (this.opcionSeleccionada === 'ByName') {
      this.courses = this.courseService.getCourseByPattern(this.texto, 'ByName');

    } else if (this.opcionSeleccionada === 'byProfesor') {
      this.courses = this.courseService.getCourseByPattern(this.texto, 'byProfesor');
    }
  }
}
