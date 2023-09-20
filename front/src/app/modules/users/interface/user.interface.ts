// // To parse this data:
// //
// //   import { Convert } from "./file";
// //
// //   const user = Convert.toUser(json);

// import { TipoDeUsuario } from "./tipodeusuario.interface";

// export interface User {
//     id?:       number;
//     nombre:    string;
//     apellido:  string;
//     email:     string;
//     username:  string;
//     password:  string;
//     confirmPassword: string;
//     activoactualmente: boolean;
//     estado: string;
//     idtipodeusuario: number;
//     TipoDeUsuario: TipoDeUsuario;
//     createdAt?: Date;
//     updatedAt?: Date;
//     verificationCode: boolean;
//     codeRegister: string;
// }
// // Converts JSON strings to/from your types
// export class Convert {
//     public static toUser(json: string): User[] {
//         return JSON.parse(json);
//     }

//     public static userToJson(value: User[]): string {
//         return JSON.stringify(value);
//     }
// }

// To parse this data:
//
//   import { Convert } from "./file";
//
//   const user = Convert.toUser(json);

export interface User {
    id?:                number;
    nombre:            string;
    apellido:          string;
    email:             string;
    username:          string;
    password:          string;
    confirmPassword?:  string;
    activoactualmente: boolean;
    estado: string;
    idtipodeusuario: number;
    TipoDeUsuario?: TipoDeUsuario;
    createdAt?: Date;
    updatedAt?: Date;
    verificationCode: boolean;
    codeRegister: string;
}

export interface TipoDeUsuario {
    id?:          number;
    nombre:      string;
    descripcion: string;
    createdAt?:   Date;
    updatedAt?:   Date;
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
