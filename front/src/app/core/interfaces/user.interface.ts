export interface userInterface {
  id?:number;
  rolesId? : number; 
  name: string;
  lastName: string;
  phone?: string;
  mail: string;
  nick: string;
  password: string;
  bornDate?: Date;
  pitureLink?: string;
}