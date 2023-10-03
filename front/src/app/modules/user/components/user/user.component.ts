import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  getRoleName(role: string): string {
    switch (role) {
      case 'admin':
        return 'Administrador';
      case 'teacher':
        return 'Docente';
      case 'student':
        return 'Alumno';
      default:
        return 'No asignado';
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = params.get('id');
      if (userId) {        
        this.userService.getUserById(userId).subscribe((user) => {
          this.user = user;
        });
      }
    });
  }

  deleteUser() {
    if (this.user && this.user.id) {      
      this.userService.deleteUserById(this.user.id).subscribe(
        () => {
          console.log('Usuario eliminado exitosamente');
          alert("El usuario se elimino correctamente")
          this.router.navigate(['/user-list']);
        },
        (error) => {
          console.error('Error al eliminar usuario:', error);
          alert("Error al eliminar el usuario")
        }
      );
    }
  }
  

  redirectToEditUser(userId: number) {
    this.router.navigate([`/user/edit-user/${userId}`]);
  }


}

