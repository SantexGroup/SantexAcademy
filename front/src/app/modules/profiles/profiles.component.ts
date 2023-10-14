import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor(
    private views: NavBarService,
  ) { }

  ngOnInit(): void {
    this.views.changeTitle('Perfiles')
  }

}
