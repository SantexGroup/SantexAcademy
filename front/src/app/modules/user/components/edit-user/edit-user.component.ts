import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: any = {};
  userId: string = '';


  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      if (this.userId) {
        this.userService.getUserById(this.userId).subscribe((user) => {
          this.user = user;
          console.log('Usuario cargado:', this.user);
        });
      }
    });
  }

  editUser() {
    this.userService.updateUser(this.user).subscribe(
      (response: any) => {
        console.log('Usuario actualizado exitosamente', response);
        // this.router.navigate(['/user/${this.userId}']);
        this.router.navigate([`/user/${this.userId}`]);

      },
      (error: any) => {
        console.error('Error al actualizar usuario:', error);
      }
    );
  }

  navigateToUserList() {
    this.router.navigate(['/user/user-list']);
  }

}
