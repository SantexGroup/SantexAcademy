import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesDetailsService } from 'src/app/services/courses-details.service';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit{

  constructor(public courseDetailService: CoursesDetailsService, private activateRoute: ActivatedRoute){}

  subscription: Subscription | null = null;

  ngOnInit(){

    const id = this.activateRoute.snapshot.params["id"]
    let exists: boolean = false;
    this.subscription = this.courseDetailService.getCoursesDetail(id).subscribe(
      (response) => {
        this.courseDetailService.coursesDetail = response
        console.log("Esta es la respuesta ", response)
        exists = true;
        
      }, 
      (error) => {
        console.error(error)
      }
    )
  }

  ngOnDestroy() {

    if(this.subscription) {

      this.subscription.unsubscribe();

    }

  }

}

