import { Docente } from "src/app/modules/docentes/interfaces/docente";
import { Curso } from "src/app/models/curso.interface";

export interface Docenteporcurso {
    id?: number;
    DocenteEnDocentePorCurso?: Docente; 
    iddocente?: number;
    CursoEnDocentePorCurso?: Curso,
    idcurso?: number;
    habilitado?: boolean;
    estado?: string;
}
