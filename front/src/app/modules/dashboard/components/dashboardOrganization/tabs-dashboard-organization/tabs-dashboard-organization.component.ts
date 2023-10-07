import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrganizationService } from '../../../services/organization.service';
import { Store } from '@ngrx/store';
import { selectToken } from 'src/app/core/auth.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs-dashboard-organization',
  templateUrl: './tabs-dashboard-organization.component.html',
  styleUrls: ['./tabs-dashboard-organization.component.css'],
})
export class TabsDashboardOrganizationComponent {
  @Input() dataTabs: any = {};
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  volunteerDataEdit: any;

  userForm: FormGroup;
  newVolunteering: boolean = false;
  activeTab: number = 1;
  editData: boolean = false;
  fadeAnimationClass = '';
  selectedCategory: string = '';
  image: string = '';

  onModalStatus: boolean = false;
  statusModal: string = '';
  textBtnModalStatus: string = '';
  textMessage: string = '';
  onModalQuestion: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private orgService: OrganizationService,
    private router: Router,
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
      urlWebSite: [''],
    });
  }

  activeEditProfileOrg() {
    this.fadeAnimationClass = 'fade-in-out-animation';

    this.userForm.setValue({
      name: this.dataTabs.name,
      cuit: this.dataTabs.cuit,
      location: this.dataTabs.location,
      phone: this.dataTabs.phone,
      email: this.dataTabs.email,
      category: this.dataTabs.category,
      description: this.dataTabs.description,
      urlWebSite: this.dataTabs.urlWebSite,
    });
    this.editData = true;
  }

  declineEditProfile() {
    this.fadeAnimationClass = '';

    this.userForm.setValue({
      name: '',
      cuit: '',
      location: '',
      phone: '',
      email: '',
      category: '',
      description: '',
      urlWebSite: '',
    });
    this.editData = false;
  }

  saveDataProfileOrg() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      if (userData) {
        this.store.select(selectToken).subscribe((token) => {
          if (token) {
            this.orgService
              .updateProfileOrganization(userData, token)
              .subscribe({
                next: (res) => {
                  if (res) {
                  }
                  this.onModalStatus = true;
                  this.statusModal = 'success';
                  this.textMessage =
                    ' ¡Tus datos se han modificado correctamente!';

                  setTimeout(() => {
                    this.onModalStatus = false;
                    window.location.reload();
                  }, 3000);
                },
                error: (err) => {
                  console.log('error when editing the user', err);
                  this.onModalStatus = true;
                  this.statusModal = 'failed';
                  this.textBtnModalStatus = 'Aceptar';
                  this.textMessage =
                    '¡Se produjo un error al modificar tus datos! Por favor, inténtalo de nuevo más tarde.';
                },
              });
          }
          this.editData = false;
        });
      }
    }
  }

  deleteProfile() {
    this.store.select(selectToken).subscribe((token) => {
      if (token) {
        this.orgService.deleteProfileOrganization(token).subscribe({
          next: (res) => {
            if (res) {
              this.store;
              this.router.navigate(['']);
            }
          },
          error: (err) => {
            console.log('error deleting user', err);
          },
        });
      }
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    this.userForm.setValue({
      category: event.target.value,
    });
  }

  handleProfileDelete() {
    this.onModalQuestion = !this.onModalQuestion;
  }

  activateTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

  closeModalStatus() {
    this.onModalStatus = false;
  }

  activeNewVolunteering() {
    this.newVolunteering = !this.newVolunteering;
  }

  handleEditVolunteering(volunteering: any) {
    this.volunteerDataEdit = volunteering;
    this.newVolunteering = true;
  }

  redirectToVolunteersTable() {
    this.newVolunteering = false;
  }
}
