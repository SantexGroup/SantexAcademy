// To parse this data:
//
//   import { Convert } from "./file";
//
//   const user = Convert.toUser(json);

export interface TipoDeUsuario {
    id?:          number;
    nombre:      string;
    descripcion: string;
    createdAt?:   Date;
    updatedAt?:   Date;
}
// Converts JSON strings to/from your types
export class Convert {
    public static toUser(json: string): TipoDeUsuario[] {
        return JSON.parse(json);
    }

    public static userToJson(value: TipoDeUsuario[]): string {
        return JSON.stringify(value);
    }
}
