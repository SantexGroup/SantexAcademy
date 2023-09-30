import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

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
        this.userService.getUserDetails(userId).subscribe((user) => {
          this.user = user;
        });
      }
    });
  }
}

