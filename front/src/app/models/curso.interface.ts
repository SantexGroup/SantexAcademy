// To parse this data:
//
//   import { Convert } from "./file";
//
//   const curso = Convert.toCurso(json);

import { Nivel } from "./nivel.interface";

export interface Curso {
  id:                    number;
  nombre:                string;
  descripcion:           string;
  imagen:                string;
  duracion:              number;
  capacidad:             number;
  idnivel:               null;
  requisitos:            string;
  habilitado:            boolean;
  fechaInicio:           Date;
  fechafin:              null;
  idusuarioalta:         null;
  estado:                string;
  idusuariomodificacion: null;
  createdAt:             Date;
  updatedAt:             Date;
  nivel?: Nivel; // nivel como opcional
  
  //Descomentar las lineas anteriores y comentar o eliminar las 4 siguientes cuando se implemente DB tabla cursos
  //  id: string;
  //  name: string;
  //  price: number;
  //  image: string;
  
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

