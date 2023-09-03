import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/core/interfaces/course';
import { Schedule } from 'src/app/core/interfaces/schedule';
import { CourseService } from 'src/app/core/services/course.service';
import { ScheduleService } from 'src/app/core/services/schedule.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {
  schedule: Schedule = {
    id: 0,
    where: "",
    course:"",
    day:"",
    schedule:"",
    active: true,
  };
  courses : Course[]=[];

  constructor(    
    private scheduleService: ScheduleService,
    private courseService: CourseService,
    private router: Router,
    private datePipe: DatePipe) { 
      this.getCourses()
    }

  ngOnInit(): void {
  }
  getCourses(){
 this.courseService.getCourse().subscribe(
  (res) => {
    this.courses = <any>res;
  },
  (error) => {
    console.log(error);
  }
);
  }
  add() {
    this.scheduleService.postSchedule(this.schedule).subscribe(
      () => {
        this.router.navigate(['/admin/panel/schedule']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
