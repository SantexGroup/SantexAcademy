export interface User {
  id?:number;
  rolesId? : number; 
  name: string;
  lastName: string;
  phone: string;
  email: string;
  nick?: string;
  password?: string;
  bornDate?: Date;
  pictureLink?: string | null;
}