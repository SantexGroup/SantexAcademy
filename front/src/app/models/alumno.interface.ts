export interface Alumno {
    idUsuario: number;
    idAlumno: number;
    idCurso: number;
    idMatricula: number;
    nombre: string;
    apellido: string;
    email: string;
    username: string;
    notas: number[];
    promedio: number; // Esto es solo para mostrar, no es necesario guardarlo
    asistencia: boolean[];
  }
  