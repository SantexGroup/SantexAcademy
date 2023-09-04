import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { UsersService } from '../../services/users.service';
import { User } from '../../interface/user.interface';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  user!: User;

  constructor(private activatedRoute: ActivatedRoute,
              private usersService: UsersService,
              private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({id})=> this.usersService.getUserPorId(id))
      )
      .subscribe( user => this.user = user);

  }

  deleteUser(){
    this.usersService.deleteUser( this.user.id! )
      .subscribe(resp => {
        this.router.navigate(['/users/index'])
      })
  }
}
