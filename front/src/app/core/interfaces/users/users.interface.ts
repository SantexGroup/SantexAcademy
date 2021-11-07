import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export interface User {
  id: number;
  username: string;
  phone_number?: string,
  email?: string,
  name?: string,
  lastname?: string,
  updatedAt?: Date;
  createdAt?: Date;
}

export const MIN_USERNAME_LENGTH: number = 5;
export const MAX_USERNAME_LENGTH: number = 60;
export const MIN_PASSWORD_LENGTH: number = 5;
export const MAX_PASSWORD_LENGTH: number = 60;
export const PASSWORD_PATTERN: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$@!%&*?.,])[A-Za-z\\d#$@!%&*?.,]{5,250}$';

/** Valida que los passwords introducidos sean iguales */
export const confirmaPassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let pass1 = control.get('password');
  let pass2 = control.get('passwordConfirm');

  if(!pass1?.value || !pass2?.value) {
    return null;
  }

  return pass1?.value !== pass2?.value ? { nocoincide: true } : null;
};