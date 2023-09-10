export interface Nivel {
    id?:                    number;
    nombre:                string;
    descripcion:           string;
}


// Converts JSON strings to/from your types
export class Convert {
    public static toCurso(json: string): Nivel[] {
        return JSON.parse(json);
    }
  
    public static cursoToJson(value: Nivel[]): string {
        return JSON.stringify(value);
    }
  }
  