import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export interface User {
  id: number;
  username: string;
  password?: string;
  phone_number?: string;
  email?: string;
  name?: string;
  lastname?: string;
  address?: string;
  cuil?: string;
  updatedAt?: Date;
  createdAt?: Date;
}

export const MIN_USERNAME_LENGTH: number = 5;
export const MAX_USERNAME_LENGTH: number = 60;
export const MIN_PASSWORD_LENGTH: number = 5;
export const MAX_PASSWORD_LENGTH: number = 60;
export const PASSWORD_PATTERN: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$@!%&*?.,])[A-Za-z\\d#$@!%&*?.,]{5,250}$';
export const MIN_NAME_LASTNAME_LENGTH: number = 3;
export const MAX_NAME_LASTNAME_LENGTH: number = 60;

/** Valida que los passwords introducidos sean iguales */
export const confirmPassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const pass1 = control.get('password');
  const pass2 = control.get('passwordConfirm');

  if(!pass1?.value || !pass2?.value) {
    return null;
  }

  return pass1?.value !== pass2?.value ? { passMatches: true } : null;
};