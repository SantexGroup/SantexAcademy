import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  name: string = '';
  description: string = '';
  image: string = ''; 

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  createCourse() {

    const courseData = {
      name: this.name,
      description: this.description,
      image: this.image,
    };
    
    this.http.post(`${baseURL}/api/course`, courseData).subscribe({
      next:(response) => {
        console.log('Curso creado exitosamente', response);
        this.toastr.success('Curso creado con éxito');
        this.navigateToCourseList();
      },
      error: (error) => {
        console.error('Error al crear curso:', error);
        this.toastr.error("Error al crear el curso")
      }
  });
}
  

  navigateToCourseList() {
    this.router.navigate(['/course/course-list']);
  }

  ngOnInit(): void {
  }


}
