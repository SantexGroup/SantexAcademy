import { Component } from '@angular/core';
import { LoadingService } from 'src/app/core/services/toolServices/loading.service';

@Component({
  selector: 'app-loading',
  template: `
  <div class="overlay" *ngIf= "loading | async">
    <div class="lds-facebook" >
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  `,
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  loading = this.loadingServ.consulting;

  constructor(private loadingServ: LoadingService) { }

}
