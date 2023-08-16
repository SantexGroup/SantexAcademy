import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';


@Component({
  selector: 'app-landing-courses',
  templateUrl: './landing-courses.component.html',
  styleUrls: ['../../../../../scss/pages/home/_landing-courses.scss'],
})
export class LandingCoursesComponent {

  constructor(public coursesService: CoursesService) {}

}