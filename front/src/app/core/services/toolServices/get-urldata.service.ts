import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetURLdataService {
  
  /* profileId, desde la URL */
  id:number = 0;
  /* userId que se escribe desde el servicio de login */
  userId: number = 0;
  /* Titulo de la navBar */
  title: string = "";
  /* Se obtiene la ruta actual */
  route:string = "";
      
  /* Con este metodo obtenemos el profileId */
  getId(){
    const urlId = ((window.location.pathname).split('/'))[2];
    this.id = parseInt(urlId);
    console.log(this.id)
  }

  /* Con este metodo se obtiene la ruta actual */
  getRoute(){
    const newRoute = window.location.pathname;
    this.route = newRoute
   }

}
