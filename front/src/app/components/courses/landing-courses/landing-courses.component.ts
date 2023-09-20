import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/core/interface/courses.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-courses',
  templateUrl: './landing-courses.component.html',
  styleUrls: ['./landing-courses.scss'],
})
export class LandingCoursesComponent implements OnInit {

  constructor(public coursesService: CoursesService, private router: Router,) {}

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