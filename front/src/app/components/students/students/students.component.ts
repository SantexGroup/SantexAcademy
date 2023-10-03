import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  user = {
    name: 'Nombre',
    lastName: 'Apellido',
    email: 'correo@example.com', // Reemplaza esto con el correo real del usuario
    gender: '',
    profileImage: '',
  };

  ngOnInit(): void {}

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