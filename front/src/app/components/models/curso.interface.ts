// To parse this data:
//
//   import { Convert } from "./file";
//
//   const curso = Convert.toCurso(json);

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
  estado:                boolean;
  idusuariomodificacion: null;
  createdAt:             Date;
  updatedAt:             Date;
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

