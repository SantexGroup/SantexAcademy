import { Injectable, HostListener, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

const CONFIRMATION_MESSAGE = '¡Atención! Los datos no guardados se perderán. ¿Confirma?';

@Injectable({
  providedIn: 'root'
})
export class FormChangesService {
  private modified = false;
  public originalValues: { [key: string]: any } = {};

  constructor() { }

  checkFormChanges(form: FormGroup): void {

    form.valueChanges.subscribe(() => {
      this.modified = false;

      Object.keys(form.controls).forEach(controlName => {
        const control = form.get(controlName);
        const originalValue = this.originalValues[controlName];

        // Si el control cambió y el valor es distinto al valor por defecto
        // Marcar el como modificado 
        if (control && control.dirty && control.value !== originalValue) {
          this.modified = true;
          return;
        }
      });
    });
  }

  /** 
   * Indica si el formulario tiene cambios sin guardar  
   * 
  */
  hasUnsavedChanges(): Boolean {
    return this.modified;
  }

  /** 
   * Indicar que el formulario no posee cambios  
   * 
  */
  setUnchanged(): void {
    this.modified = false;
  }

  /** 
   * Verfica si el formulario tiene cambios sin guardar 
   * y solicita confirmacion al usuario. 
   * 
  */
  beforeUnloadHandler(event: BeforeUnloadEvent): void {
    if (this.hasUnsavedChanges()) {
      event.preventDefault();
      event.returnValue = CONFIRMATION_MESSAGE;
    }
  }

  /** 
   * Verfica si el formulario tiene cambios sin guardar 
   * y solicita confirmacion al usuario. 
   * 
  */
  canExit(): boolean {
    if (this.hasUnsavedChanges()) {
      return confirm(CONFIRMATION_MESSAGE);
    }
    return true;
  }
}
