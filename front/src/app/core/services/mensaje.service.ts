import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensajeRegistro(mensaje: string) {
    alert(mensaje);    //mas adelante voy a modificar para que no salga un alert sino un observable, asi habra una mayor flexibilidad
  }
  constructor() { }
}