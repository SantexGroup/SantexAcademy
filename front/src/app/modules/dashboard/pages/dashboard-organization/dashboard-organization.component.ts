import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-organization',
  templateUrl: './dashboard-organization.component.html',
  styleUrls: ['./dashboard-organization.component.css']
})
export class DashboardOrganizationComponent {
  @Input() dataOrganization: any = {};
  editData: boolean = false;
  activeTab: number = 1;


  activateTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }


  fadeAnimationClass = '';

  activeEditProfileOrg() {
    this.editData = true;
    this.fadeAnimationClass = 'fade-in-out-animation';
  }

  editarDatos() {
    this.editData = false;
    this.fadeAnimationClass = 'fade-in-out-animation'; // Aplica la animación de salida.
  }


}
