import { Component, OnInit } from '@angular/core';
import { CoursesDetailsService } from 'src/app/services/courses-details.service';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit{

  constructor(public courseDetailService: CoursesDetailsService){}

  ngOnInit(){
    this.courseDetailService.getPosts().subscribe(
      (response) => {
        this.courseDetailService.courses = response
        console.log("Esta es la respuesta ", response)
      }, 
      (error) => {
        console.error(error)
      }
    )
  }
}
