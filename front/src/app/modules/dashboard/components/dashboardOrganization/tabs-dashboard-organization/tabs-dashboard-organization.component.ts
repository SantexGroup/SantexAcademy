import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardServicesService } from '../../../services/dashboard-services.service';
import { Store } from '@ngrx/store';
import { selectToken } from 'src/app/core/auth.selectors';

@Component({
  selector: 'app-tabs-dashboard-organization',
  templateUrl: './tabs-dashboard-organization.component.html',
  styleUrls: ['./tabs-dashboard-organization.component.css'],
})
export class TabsDashboardOrganizationComponent {
  @Input() dataTabs: any = {};
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  userForm: FormGroup;

  activeTab: number = 1;
  editData: boolean = false;
  tokenOrg: string = '';
  selectedCategory: string = '';
  fadeAnimationClass = ''; // Inicialmente, no se aplica ninguna animación.

  constructor(
    private formBuilder: FormBuilder,
    private dashService: DashboardServicesService,
    private store: Store
  ) {
    this.userForm = this.formBuilder.group({
      name: [''],
      cuit: [''],
      location: [''],
      phone: [
        '',
        [Validators.pattern(/^(?:\d{7,14}|\d{2}[ -]?\d{4}[ -]?\d{4})$/)],
      ],
      email: ['', [Validators.email]],
      category: [''],
      description: [''],
      // urlWebSite: [''],
    });
  }

  image: string =
    'https://res.cloudinary.com/carina-bosio/image/upload/v1695591464/xAcademy/Asociaci%C3%B3n_Civil_Manos_Abiertas-removebg-preview_2_ltnrr4.png';

  newValues: { [key: string]: string } = {
    image: '',
    name: '',
    cuit: '',
    location: '',
    phone: '',
    email: '',
    category: '',
    description: '',
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
      if (userData) {
        this.store.select(selectToken).subscribe((token) => {
          if (token) {
            this.dashService
              .updateProfileOrganization(userData, token)
              .subscribe({
                next: (res) => {
                  console.log(res);
                },
                error: (err) => {
                  console.log(err);
                },
              });
          }
          this.editData = false;
        });
      }
    }
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

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    this.captureData('category', this.selectedCategory);

    this.userForm.setValue({
      category: event.target.value,
    });
  }

  editarDatos() {
    this.editData = false;
    this.fadeAnimationClass = 'fade-in-out-animation'; // Aplica la animación de salida.
  }

  activateTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

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
