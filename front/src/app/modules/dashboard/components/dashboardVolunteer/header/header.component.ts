import { Component, Input } from '@angular/core';
import { VolunteerService } from '../../../services/volunteer.service';
import { Store } from '@ngrx/store';
import { selectToken } from 'src/app/core/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() dataHeader: any = {};
  constructor(private volhServices: VolunteerService, private store: Store) {}
  statusModal: string = '';
  messageModal: string = '';
  onModalStatus: boolean = false;
  textBtnModalStatus: string = '';

  changePhotoUser(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      this.store.select(selectToken).subscribe((token) => {
        if (token) {
          this.volhServices.updateProfilePhoto(formData, token).subscribe({
            next: (response) => {
              if (response) {
                this.onModalStatus = true;
                this.statusModal = 'success';
                this.messageModal =
                  ' ¡Tu foto de perfil se editó exitosamente!';

                setTimeout(() => {
                  this.onModalStatus = false;
                  window.location.reload();
                }, 3000);
              }
            },
            error: (error) => {
              console.log('error when editing the user', error);
              this.onModalStatus = true;
              this.statusModal = 'failed';
              this.textBtnModalStatus = 'Aceptar';
              this.messageModal =
                '¡Se produjo un error al modificar tu foto de perfil! Por favor, inténtalo de nuevo más tarde.';
            },
            complete: () => {},
          });
        }
      });
    }
  }
}
