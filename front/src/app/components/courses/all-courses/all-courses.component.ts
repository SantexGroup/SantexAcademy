import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent {
  constructor(public coursesService: CoursesService) {}
  filterPost ='';
  result = 0;

  ngOnInit() { //cuando se cargue el componente va a recibir la información
    this.coursesService.getPosts().subscribe(
      (response) => {
        this.coursesService.courses = response; //si todo sale bien me va a dar la respuesta con los cursos
        console.log('Esta es la respuesta' ,response)
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
