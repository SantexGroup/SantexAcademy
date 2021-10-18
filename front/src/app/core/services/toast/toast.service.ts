import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
    providedIn: 'root'
  })
export class ToastService {
    
  constructor(private toastController: MatSnackBar) {}
  
  public presentToast(message: string): void {
    this.toastController.open(message, 'Entendido' ,{duration: 2000});
  }
}