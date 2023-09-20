import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent {
  constructor(public coursesService: CoursesService,
    private router: Router) {}
  filterPost ='';
  result = 0;

  ngOnInit() { //cuando se cargue el componente va a recibir la información
    this.coursesService.getPosts().subscribe(
      (response) => {
        this.coursesService.courses = response; //si todo sale bien me va a dar la respuesta con los cursos
        console.log('Esta es la respuesta' ,response)
      },
      (error) => {
        this.router.navigate(['/error404']);
      }
    );
  }
}
