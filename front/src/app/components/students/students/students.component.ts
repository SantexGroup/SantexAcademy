import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  user = {
    name: 'Nombre',
    lastName: 'Apellido',
    email: 'correo@example.com', 
    gender: '',
    profileImage: '',
  };

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get('http://localhost:4001/users/getUserById/4').subscribe();
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