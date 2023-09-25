import { Curso } from "../../cursos/interface/cursos.interface";
import { User } from "../../users/interface/user.interface";

export interface Matricula{
  id?: number;
  cursoId?: number;
  Curso?: Curso; 
  User?: User; 
  userId?: number;
  habilitado?: boolean;
  estado?: string;
}