export interface Dog {
    id: number;
    nombreDog: string;
    raza: string;
    sexo: boolean;
    fechaNacimiento: Date;
    updatedAt: Date;
    createdAt: Date;
  }
  
  export const MIN_NAME_LENGTH: number = 2;
  export const MAX_NAME_LENGTH: number = 30;
  export const MIN_RACE_LENGTH: number = 2;
  export const MAX_RACE_LENGTH: number = 30;