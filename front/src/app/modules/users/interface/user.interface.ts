// To parse this data:
//
//   import { Convert } from "./file";
//
//   const user = Convert.toUser(json);

import { TipoDeUsuario } from "./tipodeusuario.interface";

export interface User {
    id?:       number;
    nombre:    string;
    apellido:  string;
    email:     string;
    username:  string;
    password:  string;
    confirmPassword: string;
<<<<<<< HEAD
    activoactualmente: boolean;
    estado: string;
    idtipodeusuario: number;
    tipodeusuario: TipoDeUsuario;
    createdAt?: Date;
    updatedAt?: Date;
=======
    estado: boolean;
    idtipodeusuario: string;
>>>>>>> juanjoDiaz
}
// Converts JSON strings to/from your types
export class Convert {
    public static toUser(json: string): User[] {
        return JSON.parse(json);
    }

    public static userToJson(value: User[]): string {
        return JSON.stringify(value);
    }
}