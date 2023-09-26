import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/core/interfaces/course';
import { CourseService } from 'src/app/core/services/course.service';
import { Schedule } from 'src/app/core/interfaces/schedule';
import { ScheduleCourses } from 'src/app/core/interfaces/scheduleCourses';
import { take } from 'rxjs';
@Component({
  selector: 'app-description-course',
  templateUrl: './description-course.component.html',
  styleUrls: ['./description-course.component.css'],
})
export class DescriptionCourseComponent {
  id: number = 0;
  start: any = new Date();
  end: Date = new Date();
  startFormat: any;
  endFormat: any;
  schedule: Schedule = {
    id: 0,
    active: true,
    where: '',
    course: '',
    day: '',
    schedule: '',
  };
  scheduleCourse: ScheduleCourses = {
    id: 0,
    Schedule: this.schedule,
    idCourse: 0,
    idSchedule: 0,
  };
  course: Course = {
    id: 0,
    name: '',
    description: '',
    image: '',
    maxStudents: 0,
    start: new Date(),
    end: new Date(),
    active: false,
    price: 0,
    requirement: '',
    teacher: '',
    CourseCategoryName: '',
    ScheduleCourses: [this.scheduleCourse],
  };
  courses: Course[] = [];
  coursesSelect: Course[] = [];
  constructor(
    private courseService: CourseService,
    private aRouter: ActivatedRoute,
    private router: Router
  ) {
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    this.getCourse();
    this.getCourses();
  }

  getCourse() {
    this.courseService.getCourseById(this.id).subscribe(
      (data) => {
        this.course = {
          id: data.id,
          name: data.name,
          description: data.description,
          image: data.image,
          maxStudents: data.maxStudents,
          start: data.start,
          end: data.end,
          active: data.active,
          price: data.price,
          requirement: data.requirement,
          teacher: data.teacher,
          CourseCategoryName: data.CourseCategoryName,
          ScheduleCourses: data.ScheduleCourses,
        };
        this.start = this.course.start;
        this.end = this.course.end;
        this.startFormat = this.formatDateToYYYYMMDD(this.start);
        this.endFormat = this.formatDateToYYYYMMDD(this.end);

      },
      (error) => {
        console.log(error);
      }
    );
  }
  getCourses() {
    this.courseService.getCourse().subscribe(
      (data) => {
        this.courses = <any>data;
        this.courses.forEach(element => {
          if(element.id !== this.id && element.active == true ){
            this.coursesSelect.push(element)
          }
          
        });
        console.log(this.coursesSelect)
      },
      (error) => {
        console.log(error);
      }
    );
  }
  formatDateToYYYYMMDD(dateinput: Date) {
    const date = new Date(dateinput);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}/${month}/${day}`;
  }
  redirect(id: number){
    window.location.assign("/curso/"+id)
  }
}
