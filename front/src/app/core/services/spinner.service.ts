import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() {

    this.mostrarSpinner = new BehaviorSubject<boolean>(false);

   }

  private mostrarSpinner:BehaviorSubject<boolean>;

  get getMostrarSpinner(){
    return this.mostrarSpinner.asObservable();
  }

  mostrar():void{
    this.mostrarSpinner.next(true);
  }

  ocultar():void{
    this.mostrarSpinner.next(false);
  }

}
