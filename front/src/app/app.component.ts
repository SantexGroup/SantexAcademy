import { Component, Inject } from '@angular/core';
import { NavBarService } from './core/services/toolServices/nav-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    public views: NavBarService,
    ){  }
}
