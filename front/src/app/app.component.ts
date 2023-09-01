import { Component } from '@angular/core';
import { NavBarService } from './core/services/nav-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'santex-academy';

  constructor(public views: NavBarService){

  }
}
