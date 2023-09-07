import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  /* Atributo que nos indica si se esta realizado una consulta HTTP */
  consulting = new Subject<boolean>();
  
  /* Metodo para mostrar el Loading */
  show(): void{
    this.consulting.next(true);
  }

  /* Metodo para ocultar el Loading */
  hide(): void{
    this.consulting.next(false);
  }
}
