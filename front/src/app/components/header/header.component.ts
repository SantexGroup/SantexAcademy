import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/core/model/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   nombreUsuario: string | null = '';  // Variable para almacenar el nombre de usuario

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  usuarioAutenticado: boolean = false;
  userlogued: boolean = true;
  form: FormGroup;

  
    constructor(
      public usersService: UsersService,
      private formBuilder: FormBuilder,
      private cdr: ChangeDetectorRef // Agregar ChangeDetectorRef
    ) {
      this.form = this.formBuilder.group({
        userName: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });
    }

  ngOnInit(): void {
    this.nombreUsuario = localStorage.getItem("userName");
    // Verifica si el valor es nulo y asigna un valor predeterminado si es necesario
    if (this.nombreUsuario === null) {
      this.nombreUsuario = ""; // O un valor predeterminado adecuado
    }

    let login = localStorage.getItem("login");
    if (login == "ok") {
      this.usuarioAutenticado = true;
      this.userlogued = false;
    }
    

  }
  
    login() {
      if (this.form.valid) {
        const username = this.form.controls['userName'].value;
        const password = this.form.controls['password'].value;
        
        // Llama al servicio para buscar el usuario por nombre de usuario.
        this.usersService.getUsers().subscribe((usersData: UserModel[]) => {
          const matchingUser = usersData.find((user) => user.userName === username);
          const matchingPassword = usersData.find((user) => user.password === password);
  
          if (matchingUser && matchingPassword) {
            // Usuario autenticado correctamente.
            let login: string = "ok";
            localStorage.setItem("login", login );

            let userName: string = matchingUser.userName;
            localStorage.setItem("userName", userName, );

            this.usuarioAutenticado = true;
            this.userlogued = false;

            // Forzar una actualización de la vista manualmente
            this.nombreUsuario = userName;
            this.cdr.detectChanges(); // Esto actualizará la vista

            // Agrega un console.log para verificar si "ok" se guardó correctamente en localStorage.
            console.log("Login exitoso. Estado en localStorage:", localStorage.getItem("login"));
          } else {
            alert("Credenciales incorrectas");
          }
        });
        
        this.form.reset();        
        // this.router.navigate(['/']);
      }
    }
  
    Logout() {
      localStorage.clear();
      window.location.reload();
    }
  
    get userName() {
      return this.form.get("userName");
    }
  
    get password() {
      return this.form.get("password");
    }
  }
