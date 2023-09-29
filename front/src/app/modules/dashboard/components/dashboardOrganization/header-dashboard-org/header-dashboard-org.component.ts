import { Component, Input, ViewChild, ElementRef } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header-dashboard-org',
  templateUrl: './header-dashboard-org.component.html',
  styleUrls: ['./header-dashboard-org.component.css']
})
export class HeaderDashboardOrgComponent {
  @Input() dataHeader: any = {};
  tabActiva = 0;
  image: string = 'https://res.cloudinary.com/carina-bosio/image/upload/v1695591464/xAcademy/Asociaci%C3%B3n_Civil_Manos_Abiertas-removebg-preview_2_ltnrr4.png';
  editData: boolean = false;

  newValues: { [key: string]: string } = {
    image: "",
     };


  saveDataProfileOrg() {
    this.image = this.newValues['image'] || this.image;
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

  // constructor(private http: HttpClient) { }

  // saveImage(file: File) {
  //   const formData = new FormData();
  //   formData.append('image', file);

  //   this.http.post('URL_DEL_ENDPOINT', formData).subscribe(response => {
  //     // Aquí puedes manejar la respuesta del servidor, como actualizar la URL de la imagen en tu aplicación.
  //   });
  // }

}
