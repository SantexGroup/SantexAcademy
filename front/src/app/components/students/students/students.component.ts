import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {

  selected: Date | null;
  

  user = {
    nombreCompleto: 'Martin Fernandez',
    email: 'fernandezmartin1534@gmail.com', 
    gender: 'Masculino',
    profileImage: '',
  };

  news = [
    {
      "id": 1,
      "title": "Desarrollo Software",
      "duration": "10 días",
      "description": "Descripción del Curso 1",
    },
    {
      "id": 2,
      "title": "GIT y GITHUB",
      "duration": "2 dias",
      "description": "Podras aprender a utilizar correctamente git y github para tus proyectos y trabajo en equipo!",
    },
    {
      "id": 3,
      "title": "Desarrollo Web",
      "duration": "6 meses",
      "description": "Aprende todo lo relacionado a Desarrollo Web: HTML, CSS, JS, ANGULAR",
    }
  ];

  courses: any[] = [];

  constructor(private http: HttpClient){
    this.selected = null;
  }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:4001/cursos/getAll') // Reemplaza 'courses' con la URL correcta de tu endpoint de cursos
    .subscribe((data) => {
      this.courses = data; // Almacena los cursos obtenidos del backend en la propiedad 'courses'
    });


  }

  imageSrc: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  uploadImage() {}
}