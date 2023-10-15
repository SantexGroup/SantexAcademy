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
  isAdmin: boolean = false;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = params.get('id');
      if (userId) {
        this.userService.getUserById(userId).subscribe((user) => {
          this.user = user;
          this.isAdmin = this.user.role === 'admin';
        });
      } else {
        const { userId } = JSON.parse(localStorage.getItem('session')!);
        if (userId) {
          this.userService.getUserById(userId).subscribe((user) => {
            this.user = user;
            this.isAdmin = this.user.role === 'admin';
          });
        } else {
          console.log('No se encontró un userId en los parámetros ni en el localStorage.');
        }
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
