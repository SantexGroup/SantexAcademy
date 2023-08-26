import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
<<<<<<< HEAD
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
=======
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/usuario.service';
>>>>>>> semper_dev

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: User[]= [];

  displayedColumns: string[] = [ "firstName", "lastName", "username", "email", "phone", "rol", "acciones"];
  
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

<<<<<<< HEAD
  constructor(private _usuarioService: UsuarioService, private _snackBar: MatSnackBar) { }
=======

  constructor(private userService: UserService, private _snackBar: MatSnackBar) { }
>>>>>>> semper_dev

  ngOnInit(): void {
    this.cargarUsuarios(); 
  }

  async cargarUsuarios() {
    this.listUsuarios = [];
    const token = localStorage.getItem('token');
    if (token !== null) {
      try {
        this.listUsuarios = await this.userService.getUsers(token);
        this.dataSource = new MatTableDataSource(this.listUsuarios);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      } 
      } else {
        this._snackBar.open('Debe iniciar sesión con rol Admin para acceder a la lista de usuarios', '', {
          duration: 3000, // Duración en milisegundos
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index: number){
    console.log (index);

    this.userService.eliminarUsuario(index); 
    this.cargarUsuarios();

    this._snackBar.open("El usuario fue eliminado con éxito!", "" ,{
      duration:1500,
      horizontalPosition:"center",
      verticalPosition:"bottom"
    })
  }
}
