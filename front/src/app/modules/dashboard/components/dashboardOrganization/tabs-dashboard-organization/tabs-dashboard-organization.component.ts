import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardServicesService } from '../../../services/dashboard-services.service';
import { AuthService } from '../../../../auth/services/auth.service';


@Component({
  selector: 'app-tabs-dashboard-organization',
  templateUrl: './tabs-dashboard-organization.component.html',
  styleUrls: ['./tabs-dashboard-organization.component.css']
})
export class TabsDashboardOrganizationComponent implements OnInit{
  @Input() dataTabs: any = {};
  activeTab: number = 1;
  editData: boolean = false;

  tokenOrg : string = "";

  ngOnInit(): void {
    this.tokenOrg = this.authService.getAuthToken()
  }

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private dashService: DashboardServicesService, private authService: AuthService) {
    this.userForm = this.formBuilder.group({
      name: [''],
      cuit: [''],
      location: [''],
      phone: [
        '',
        [
          Validators.pattern(/^(?:\d{7,14}|\d{2}[ -]?\d{4}[ -]?\d{4})$/),
        ],
      ],
      email: ['', [Validators.email]],
      category: [''],
      description: [''],
      // urlWebSite: [''],

    });
  }

  image: string = 'https://res.cloudinary.com/carina-bosio/image/upload/v1695591464/xAcademy/Asociaci%C3%B3n_Civil_Manos_Abiertas-removebg-preview_2_ltnrr4.png';



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

    // this.selectedCategory = this.category || ''; // Asignar la categoría actual al campo de edición o una cadena vacía si no hay categoría
    this.fadeAnimationClass = 'fade-in-out-animation';

    this.userForm.setValue({
      name: this.dataTabs.name,
      cuit: this.dataTabs.cuit,
      location: this.dataTabs.location,
      phone: this.dataTabs.phone,
      email: this.dataTabs.email,
      category: this.dataTabs.category,
      description: this.dataTabs.email,
      // urlWebSite: this.dataTabs.urlWebSite,

    });
    this.editData = true;
  }

  saveDataProfileOrg() {

    if (this.userForm.valid) {
      const userData = this.userForm.value;


      this.dashService.updateProfileOrganization(userData, this.tokenOrg).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
    this.editData = false;

    // this.image = this.newValues['image'] || this.image;
    // this.name = this.newValues['name'] || this.name;
    // this.cuit = this.newValues['cuit'] || this.cuit;
    // this.location = this.newValues['location'] || this.location;
    // this.phone = this.newValues['phone'] || this.phone;
    // this.email = this.newValues['email'] || this.email;
    // this.category = this.newValues['category'] || this.category;
    // this.description = this.newValues['description'] || this.description;
    // this.password = this.newValues['password'] || this.password;
    // this.editData = false;
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

    this.userForm.setValue({

      category: event.target.value,


    });



  }






  fadeAnimationClass = ''; // Inicialmente, no se aplica ninguna animación.

  editarDatos() {
    this.editData = false;
    this.fadeAnimationClass = 'fade-in-out-animation'; // Aplica la animación de salida.
  }


  activateTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }





  @ViewChild('fileInput') fileInput: ElementRef | undefined;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.image = e.target.result; // Establecer la propiedad 'image' con la URL de la imagen cargada
      };
      reader.readAsDataURL(file);
    }
  }
}
