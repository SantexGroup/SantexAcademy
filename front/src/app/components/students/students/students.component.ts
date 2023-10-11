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
      "title": "SEMINARIO DE LENCERIA",
      "duration": "4 clases",
      "description": "Aprenderas a realizar bodys, incluye materiales!",
    },
    {
      "id": 2,
      "title": "SEMIPERMANENTE",
      "duration": "3 clases",
      "description": "Aprovecha este receso de invierno para aprender a realizar uñas espléndidas!",
    },
    {
      "id": 3,
      "title": "TALLER DE VERANO",
      "duration": "4 dias",
      "description": "Aprovechemos estas vacaciones para que nuestros pequeños creen en libertad y se diviertan!",
    }
  ];

  courses: any[] = [];

  constructor(private http: HttpClient){
    this.selected = null;
  }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:4001/cursos/getAll') 
    .subscribe((data) => {
      this.courses = data;
    },
    (error) => {
      console.log('Error al obtener cursos: ', error);
    }
    );


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