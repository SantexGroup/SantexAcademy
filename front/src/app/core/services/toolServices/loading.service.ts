import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  consulting = new Subject<boolean>();
  
  show(): void{
    this.consulting.next(true);
  }

  hide(): void{
    this.consulting.next(false);
  }

  constructor() { }
}
