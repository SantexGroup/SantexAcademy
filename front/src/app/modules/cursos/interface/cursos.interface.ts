// To parse this data:
//
//   import { Convert } from "./file";
//
//   const curso = Convert.toCurso(json);

import { Nivel } from "src/app/models/nivel.interface";

export interface Curso {
  id?: number;
  nombre?: string;
  descripcion?: string;
  imagen?: string;
  duracion?: number;
  capacidad?: number;
  idnivel?: number | null | undefined;
  requisitos?: string;
  habilitado?: boolean;
  fechainicio?: Date | null | undefined; 
  fechafin?: Date | null | undefined; 
  idusuarioalta?: number | null | undefined; 
  idusuariomodificacion?: number | null | undefined; 
  estado?: string | undefined; 
  createdAt?: Date;
  updatedAt?: Date;
  Nivel?: Nivel; // nivel como opcional
}

// Converts JSON strings to/from your types
export class Convert {
  public static toCurso(json: string): Curso[] {
    return JSON.parse(json);
  }

  public static cursoToJson(value: Curso[]): string {
    return JSON.stringify(value);
  }
}
