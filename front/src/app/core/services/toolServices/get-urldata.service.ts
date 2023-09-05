import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetURLdataService {
  
  /* profileId que se escribe desde el servicio de login */
  id:number = 0;
  /* userId que se escribe desde el servicio de login */
  userId: number = 0;
  /* Titulo de la navBar */
  title: string = "";
  /* Se obtiene la ruta actual */
  route:string = "";
      
  /* Con este metodo se obtiene la ruta actual */
  getRoute(){
    const newRoute = window.location.pathname;
    this.route = newRoute
   }

}
