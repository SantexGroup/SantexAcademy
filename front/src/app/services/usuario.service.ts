import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
      {nombre: "sol", apellido:"toledo", usuario:"stole", password:"1234",email:"stoledo7@hotmail.com", rol:"adm", telefono: 123},
      {nombre: "Ana", apellido:"García", usuario:"anita", password:"password123", email:"ana@example.com", rol:"usuario", telefono: 123456789},
      {nombre: "Juan", apellido:"Pérez", usuario:"juanito", password:"securepass", email:"juan@example.com", rol:"admin", telefono: 987654321},
      {nombre: "María", apellido:"López", usuario:"marialo", password:"mypass", email:"maria@example.com", rol:"usuario", telefono: 555555555},
      {nombre: "Pedro", apellido:"Rodríguez", usuario:"prodrig", password:"pass123", email:"pedro@example.com", rol:"usuario", telefono: 888888888},
      {nombre: "Laura", apellido:"Hernández", usuario:"lauhdez", password:"strongpass", email:"laura@example.com", rol:"admin", telefono: 777777777},
      {nombre: "Carlos", apellido:"Martínez", usuario:"carlosm", password:"password", email:"carlos@example.com", rol:"usuario", telefono: 444444444},
      {nombre: "Sofía", apellido:"Fernández", usuario:"soffdez", password:"sofi123", email:"sofia@example.com", rol:"admin", telefono: 666666666},
      {nombre: "Daniel", apellido:"Gómez", usuario:"danig", password:"secure123", email:"daniel@example.com", rol:"usuario", telefono: 111111111},
      {nombre: "Isabel", apellido:"Díaz", usuario:"isadi", password:"mypassword", email:"isabel@example.com", rol:"usuario", telefono: 222222222},
      {nombre: "Andrés", apellido:"Ramírez", usuario:"andram", password:"strong123", email:"andres@example.com", rol:"admin", telefono: 333333333},
      {nombre: "Luis", apellido:"Vargas", usuario:"luisv", password:"myp@ss", email:"luis@example.com", rol:"usuario", telefono: 999999999},
      {nombre: "Elena", apellido:"Sanchez", usuario:"elenas", password:"pass456", email:"elena@example.com", rol:"usuario", telefono: 123456789}
    
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index,1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }

}
