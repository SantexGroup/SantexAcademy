import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  user = {
    name: 'Nombre',
    lastName: 'Apellido',
    email: 'correo@example.com', // Reemplaza esto con el correo real del usuario
    profileImage: '',
  };

  showImage = false; // Variable para controlar si se muestra la imagen

  @ViewChild('fileInput') fileInput!: ElementRef; // Usamos '!' para indicar que será inicializada

  constructor() { }

  ngOnInit(): void {
    // Aquí debes obtener los datos del usuario desde tu servicio o donde los tengas disponibles.
  }

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    
    // Aquí puedes agregar código para subir la imagen al servidor si es necesario.
    // Luego, establece showImage en true para mostrar la imagen.
    this.showImage = true;
  }

  // Función para abrir el campo de entrada de archivo al hacer clic en "Subir foto"
  openFileInput() {
    this.fileInput.nativeElement.click();
  }
}
