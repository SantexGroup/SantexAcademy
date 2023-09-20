import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit{

  constructor(public courseService: CoursesService, 
    private activateRoute: ActivatedRoute,
    private router: Router){}

  subscription: Subscription | null = null;

  ngOnInit(){

    const id = this.activateRoute.snapshot.params["id"]
    this.subscription = this.courseService.getCoursesDetail(id).subscribe(
      (response) => {
        this.courseService.courses = response
        console.log("Esta es la respuesta ", response)
        
      }, 
      (error) => {
        this.router.navigate(['/error404']);
      }
    )
  }

  ngOnDestroy() {

    if(this.subscription) {

      this.subscription.unsubscribe();

    }

  }

}


