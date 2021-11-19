import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';


@Injectable({
    providedIn: 'root'
  })
export class ToastService {
    
  constructor(private toastController: MatSnackBar) {}
  
  public presentToast(message: string): void {
    this.toastController.open(message, 'Ok', { duration: 3000 });
  }

  public presentError(message: string): MatSnackBarRef<TextOnlySnackBar> {
    return this.toastController.open(message, 'Cerrar', { verticalPosition: 'top' });
  }
}