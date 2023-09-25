import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup;
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
    private fb: FormBuilder,
    private scheduleService: ScheduleService,
    private courseService: CourseService,
    private router: Router,
    private datePipe: DatePipe) { 
      this.getCourses()
      this.form = this.fb.group({
        where:  ['', Validators.required],
        day: ['', Validators.required],
        course:['', Validators.required],
        schedule: ['', Validators.required],
        active:  ['', Validators.required],
      });
      this.form.setValue({
        where: "",
        day:"",
        course:"",
        schedule:"",
        active: true,
      });
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
    this.schedule = {
      id: 0,
      where: this.form.value.where,
      day:this.form.value.day,
      course:this.form.value.course,
      schedule:this.form.value.schedule,
      active: this.form.value.active,
    };
    this.scheduleService.postSchedule(this.schedule).subscribe(
      () => {
        this.router.navigate(['/admin/panel/schedules']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
