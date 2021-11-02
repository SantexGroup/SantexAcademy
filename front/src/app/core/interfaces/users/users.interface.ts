

export interface User {
  id: number;
  username: string;
  phone_number: string,
  email: string,
  name: string,
  lastname: string,
  updatedAt: Date;
  createdAt: Date;
}

export const MIN_USERNAME_LENGTH: number = 5;
export const MAX_USERNAME_LENGTH: number = 60;
export const MIN_PASSWORD_LENGTH: number = 5;
export const MAX_PASSWORD_LENGTH: number = 60;

