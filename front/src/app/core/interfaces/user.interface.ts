export interface registroUsuario {
  id?:number;
  rolesId? : number; 
  name: string;
  lastName: string;
  phone?: string;
  mail: string;
  nick: string;
  password: string;
}