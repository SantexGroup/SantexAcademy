import { Injectable, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormChangesService {
  public modified = false;

  constructor() { }

  checkFormChanges(form: FormGroup, originalValues: { [key: string]: any }) {
    form.valueChanges.subscribe(() => {
      this.modified = false;

      Object.keys(form.controls).forEach(controlName => {
        const control = form.get(controlName);
        const originalValue = originalValues[controlName];

        // Si el control cambió y el valor es distinto al valor por defecto
        // Marcar el formulario como 
        if (control && control.dirty && control.value !== originalValue) {
          this.modified = true;
        }
      });
    });
  }

  hasUnsavedChanges(): Boolean {
    return this.modified;
  }

  /** 
   * Verfica si el formulario tiene cambios sin guardar 
   * y solicita confirmacion al usuario. 
   * 
  */
  beforeUnloadHandler(event: BeforeUnloadEvent): void {
    if (this.hasUnsavedChanges()) {
      event.preventDefault();
      event.returnValue = '¡Atención! Los datos no guardados se perderán.';
    }
  }

  /** 
   * Verfica si el formulario tiene cambios sin guardar 
   * y solicita confirmacion al usuario. 
   * 
  */
  canExit(): boolean {
    if (this.hasUnsavedChanges()) {
      return confirm('¡Atención! Los datos no guardados se perderán. ¿Confirma?');
    }
    return true;
  }

}
