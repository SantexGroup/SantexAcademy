import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  tabActiva = 0;
  image: string = 'https://res.cloudinary.com/carina-bosio/image/upload/v1695591464/xAcademy/Asociaci%C3%B3n_Civil_Manos_Abiertas-removebg-preview_2_ltnrr4.png';
  name: string = "Fundación Manos Abiertas";
  cuit: string = "30700926245";
  location: string = "Ciudad Autónoma de Buenos Aires";
  phone: string = "+5491166407627";
  email: string = "nacional@manosabiertas.org.ar";
  category: string = "Asistencia Social";
  description: string = "La Fundación Manos Abiertas es una organización sin fines de lucro que se dedica a brindar apoyo y asistencia a comunidades en situación de vulnerabilidad en diferentes áreas.";
  password: string = 'root';
  editData: boolean = false;

  newValues: { [key: string]: string } = {
    image: "",
    name: "",
    cuit: "",
    location: "",
    phone: "",
    email: "",
    category: "",
    description: "",
  };

  activeEditProfileOrg() {
    this.editData = true;
  }

  saveDataProfileOrg() {
    this.image = this.newValues['image'] || this.image;
    this.name = this.newValues['name'] || this.name;
    this.cuit = this.newValues['cuit'] || this.cuit;
    this.location = this.newValues['location'] || this.location;
    this.phone = this.newValues['phone'] || this.phone;
    this.email = this.newValues['email'] || this.email;
    this.category = this.newValues['category'] || this.category;
    this.description = this.newValues['description'] || this.description;
    this.password = this.newValues['password'] || this.password;
    this.editData = false;
  }

  captureData(fieldName: string, event: any) {
    this.newValues[fieldName] = event.target.value;
  }

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.image = URL.createObjectURL(file);

    }
  }

  selectedCategory: string = '';

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    this.captureData('category', this.selectedCategory);
  }

  editarDatos() {

  }
}

