import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  /* profileId que se escribe desde el servicio de login */
  profileId:number = 0;
  /* userId que se escribe desde el servicio de login */
  userId: number = 0;

}
