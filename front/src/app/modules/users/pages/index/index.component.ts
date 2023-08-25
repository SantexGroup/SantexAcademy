import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interface/user.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users: User[] = [];

  constructor( private usersService: UsersService ) { }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe( users => this.users = users);
  }

}
