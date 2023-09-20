import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/core/interfaces/course';
import { CourseService } from 'src/app/core/services/course.service';
import { Schedule } from 'src/app/core/interfaces/schedule';
import { ScheduleCourses } from 'src/app/core/interfaces/scheduleCourses';
@Component({
  selector: 'app-description-course',
  templateUrl: './description-course.component.html',
  styleUrls: ['./description-course.component.css']
})
export class DescriptionCourseComponent {
  id:number=0
  existSchedule:boolean=false;
  schedule:Schedule={   
    id: 0,
   active: true,
   where: "",
   course: "",
   day: "",
   schedule: "",
 }
 scheduleCourse: ScheduleCourses= {   
  id: 0,
  schedule: this.schedule,
  idCourse: 0,
  idSchedule: 0,
}
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
    ScheduleCourses:[this.scheduleCourse]
  };
  courses:Course[]=[];
  
constructor(private courseService: CourseService,private aRouter: ActivatedRoute){
  this.id = Number(aRouter.snapshot.paramMap.get('id'));
  this.getCourse()
  this.getCourses()
 
}


getCourse(){
  this.courseService.getCourseById(this.id).subscribe(
    (data) => {
      this.course={
        id:data.id,
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
        ScheduleCourses:data.ScheduleCourses
      }
      if(this.course.ScheduleCourses){
        this.existSchedule= true
        console.log(this.course.ScheduleCourses[0].schedule.id)
      }
     
    
      
    },
    (error)=>{
      console.log(error)
    }
  )
}
getCourses(){
  this.courseService.getCourse().subscribe(
    (data)=>{
      this.courses = <any>data;
        if(this.courses[0].ScheduleCourses){
          /* console.log(this.courses[0].ScheduleCourses[0]) */
        }
      
    },
  (error)=>{
    console.log(error)
  }
  )
}
checkSchedule(){
 
}
}
