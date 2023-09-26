import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-volunteers-table',
  templateUrl: './volunteers-table.component.html',
  styleUrls: ['./volunteers-table.component.css']
})
export class VolunteersTableComponent implements OnInit {
  datosTabla?: any[];

  ngOnInit(): void {
    this.datosTabla = [
      {
        name: 'Proyecto 1',
        location: 'Ciudad Autónoma de Buenos Aires',
        tasks: 'Visita a enfermos',
        hours: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec tristique',
        action: 'En Proceso',
      },
      {
        name: 'Proyecto 2',
        location: 'Córdoba',
        tasks: 'Apoyo escolar',
        hours: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec tristique',
        action: 'En Proceso',
      },
      {
        name: 'Proyecto 3',
        location: 'Santa Fe',
        tasks: 'Limpieza de plazas',
        hours: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec tristique',
        action: 'Cancelado',
      },
      {
        name: 'Proyecto 4',
        location: 'Mendoza',
        tasks: 'Ayuda a personas sin hogar',
        hours: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec tristique',
        action: 'Finalizado',
      },
      {
        name: 'Proyecto 5',
        location: 'Salta',
        tasks: 'Rescatar animales en peligro',
        hours: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec tristique',
        action: 'Cancelado',
      },
      {
        name: 'Proyecto 6',
        location: 'Jujuy',
        tasks: 'Apoyo escolar',
        hours: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec tristique',
        action: 'Finalizado',
      },
      {
        name: 'Voluntario 7',
        location: 'Paraná',
        tasks: 'Acompañamiento a personas con discapacidad',
        hours: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec tristique',
        action: 'Finalizado',
      },
    ];

  }
  editarDato(dato: any) {
    // Lógica para editar el dato, por ejemplo, abrir un formulario de edición
  }

  eliminarDato(dato: any) {
    // Lógica para eliminar el dato, por ejemplo, mostrar un cuadro de diálogo de confirmación
  }


}

// image: string = 'https://res.cloudinary.com/carina-bosio/image/upload/v1695591464/xAcademy/Asociaci%C3%B3n_Civil_Manos_Abiertas-removebg-preview_2_ltnrr4.png';
// name: string = "Fundación Manos Abiertas";
// cuit: string = "30700926245";
// location: string = "Ciudad Autónoma de Buenos Aires";
// phone: string = "+5491166407627";
// email: string = "nacional@manosabiertas.org.ar";
// category: string = "Asistencia Social";
// description: string = "La Fundación Manos Abiertas es una organización sin fines de lucro que se dedica a brindar apoyo y asistencia a comunidades en situación de vulnerabilidad en diferentes áreas.";
// password: string = 'root';
// editData: boolean = false;

// newValues: { [key: string]: string } = {
//   image: "",
//     name: "",
//       cuit: "",
//         location: "",
//           phone: "",
//             email: "",
//               category: "",
//                 description: "",
//   };

// activeEditProfileOrg() {
//   this.editData = true;
// }

// saveDataProfileOrg() {
//   this.image = this.newValues['image'] || this.image;
//   this.name = this.newValues['name'] || this.name;
//   this.cuit = this.newValues['cuit'] || this.cuit;
//   this.location = this.newValues['location'] || this.location;
//   this.phone = this.newValues['phone'] || this.phone;
//   this.email = this.newValues['email'] || this.email;
//   this.category = this.newValues['category'] || this.category;
//   this.description = this.newValues['description'] || this.description;
//   this.password = this.newValues['password'] || this.password;
//   this.editData = false;
// }

// captureData(fieldName: string, event: any) {
//   this.newValues[fieldName] = event.target.value;
// }

// handleImageUpload(event: any) {
//   const file = event.target.files[0];
//   if (file) {
//     this.image = URL.createObjectURL(file);

//   }
// }

// selectedCategory: string = '';

// onCategoryChange(event: any) {
//   this.selectedCategory = event.target.value;
//   this.captureData('category', this.selectedCategory);
// }

// editarDatos() {

// }
// }

