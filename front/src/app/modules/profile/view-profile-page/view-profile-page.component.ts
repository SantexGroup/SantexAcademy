import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

import { UserService } from 'src/app/core/services/user/user.service';

import { User } from '../../../core/interfaces/users/users.interface';

@Component({
  selector: 'app-view-profile-page',
  templateUrl: './view-profile-page.component.html',
  styleUrls: ['./view-profile-page.component.scss'],
})
export class ViewProfilePageComponent implements OnInit {
  
  profile!: User;
  
  constructor(
    private userService: UserService,
    private authservice: AuthService)
     {}
  
  ngOnInit(): void {
    this.userService.getProfile(this.authservice.user.id).subscribe((profile: User) => {
      this.profile = profile;
    })
  }
}
