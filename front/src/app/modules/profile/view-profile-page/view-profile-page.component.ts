import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-view-profile-page',
  templateUrl: './view-profile-page.component.html',
  styleUrls: ['./view-profile-page.component.scss'],
})
export class ViewProfilePageComponent implements OnInit {
  
  profile: any = {};
  
  constructor(private userService: UserService) {}
  
  ngOnInit(): void {
    this.userService.getProfile().subscribe((profile) => {
      this.profile = profile;
    })
  }
}
