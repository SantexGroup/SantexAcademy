import { Component, Input } from '@angular/core';
import { OrganizationService } from '../../../services/organization.service';
import { Store } from '@ngrx/store';
import { selectToken } from 'src/app/core/auth.selectors';

@Component({
  selector: 'app-header-dashboard-org',
  templateUrl: './header-dashboard-org.component.html',
  styleUrls: ['./header-dashboard-org.component.css'],
})
export class HeaderDashboardOrgComponent {
  @Input() dataHeader: any = {};
  constructor(private orgServices: OrganizationService, private store: Store) {}
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
          this.orgServices.updatePhotoProfileOrg(formData, token).subscribe({
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
