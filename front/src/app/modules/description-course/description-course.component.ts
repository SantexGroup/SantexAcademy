import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/core/interfaces/course';
import { CourseService } from 'src/app/core/services/course.service';
import { Schedule } from 'src/app/core/interfaces/schedule';
import { ScheduleCourses } from 'src/app/core/interfaces/scheduleCourses';
import { take } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
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
  token: string | null = localStorage.getItem('token');
  token2: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbmdlbGdhYnJpZWxuaWV2YXNAZ21haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY5NzAzNzQzMn0.YyTG9xG-Tx5Ct5fsbiCUKhNnIgpdy26JypFNyAq62PI"
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
    private router: Router,
    private userService: UserService
  ) {
    localStorage.setItem("token", this.token2)
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
        this.courses.forEach((element) => {
          if (element.id !== this.id && element.active == true) {
            this.coursesSelect.push(element);
          }
        });
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
  redirect(id: number) {
    window.location.assign('/curso/' + id);
  }
  register() {
    if (this.token) {
      try {
        const tokenPayload = JSON.parse(atob(this.token.split('.')[1]));
        this.userService.inscription(this.id, tokenPayload.id).subscribe(
          (data)=>{
            this.router.navigate(['profile/inscripciones']);
          },
          (error)=>{
            console.log(error)
          }
        );
      } catch (error) {}
    }
  }
}
