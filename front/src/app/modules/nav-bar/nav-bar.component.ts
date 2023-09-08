import { Component } from '@angular/core';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(
    public views: NavBarService
    ) { }
}
