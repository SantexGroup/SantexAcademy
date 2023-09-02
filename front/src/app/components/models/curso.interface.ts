// To parse this data:
//
//   import { Convert } from "./file";
//
//   const curso = Convert.toCurso(json);

export interface Curso {
  // id:                    number;
  // nombre:                string;
  // descripcion:           string;
  // imagen:                string;
  // duracion:              number;
  // capacidad:             number;
  // idnivel:               null;
  // requisitos:            string;
  // habilitado:            boolean;
  // fechaInicio:           Date;
  // fechafin:              null;
  // idusuarioalta:         null;
  // estado:                boolean;
  // idusuariomodificacion: null;
  // createdAt:             Date;
  // updatedAt:             Date;
  id: string;//Eliminar cuando se implemente DB
  name: string;//Eliminar cuando se implemente DB
  price: number;//Eliminar cuando se implemente DB
  image: string;//Eliminar cuando se implemente DB
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

