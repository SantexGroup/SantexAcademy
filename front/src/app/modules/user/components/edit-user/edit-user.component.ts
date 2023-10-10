import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: any = {};
  userId: string = '';


  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private toastr: ToastrService) { }

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
    this.userService.updateUser(this.user).subscribe({
      next: (response: any) => {
        console.log('Usuario actualizado exitosamente', response);      
        this.toastr.success('Usuario editado exitosamente');
        this.router.navigate([`/user/${this.userId}`]);

      },
      error: (error: any) => {
        console.error('Error al actualizar usuario:', error);
        this.toastr.error('Error al editar el usuario');
      }
    });
  }
}
