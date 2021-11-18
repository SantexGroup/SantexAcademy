import { FormControl, Validators } from "@angular/forms";


export interface User {
  id: number;
  username: string;
  updatedAt: Date;
  createdAt: Date;
}

export const MIN_USERNAME_LENGTH: number = 5;
export const MAX_USERNAME_LENGTH: number = 60;
export const MIN_PASSWORD_LENGTH: number = 5;
export const MAX_PASSWORD_LENGTH: number = 60;
export const PASSWORD_PATERN: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$@!%&*?.,])[A-Za-z\\d#$@!%&*?.,]{5,250}$';
export const MIN_NOMBRE_LENGTH: number = 5;
export const MAX_NOMBRE_LENGTH: number = 60;
export const MIN_APELLIDO_LENGTH: number = 5;
export const MAX_APELLIDO_LENGTH: number = 60;
export const MIN_DOMICILIO_LENGTH: number = 5;
export const MAX_DOMICILIO_LENGTH: number = 60;
export const MIN_CUIL_LENGTH: number = 13;
export const MAX_CUIL_LENGTH: number = 15;
export const CUIL_PATERN: string = '^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$';

