import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private router: Router, private userService: UserService) { }

  viewUserDetails(userId: number) {
    this.router.navigate([`/user/${userId}`]);
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

}
