import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user.interface';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user: User = {
    username: '',
    password: '',
    apellido: '',
    nombre: '',
    email: '',
    createdAt: new Date,
    updatedAt: new Date
  }

  constructor(private usersService: UsersService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    if( !this.router.url.includes('edit') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.usersService.getUserPorId( id ))
      )
      .subscribe( user => this.user = user )
  }

  guardar() {

    if( this.user.username.trim().length === 0 ){
      return;
    }

    if ( this.user.id ){
      // edit
      this.usersService.editUser( this.user )
        .subscribe( user => console.log('edit', user) )
    }else{
      // add
      this.usersService.addUser(this.user)
        .subscribe( user => {
          this.router.navigate(['/users/edit', user.id ])
        })
    }
   
  }

}
