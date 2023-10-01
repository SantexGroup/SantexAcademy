
import { Especialidad } from "../../especialidades/interfaces/especialidad";
import { User } from "../../users/interface/user.interface";

export interface Docente {
    id?: number;
    UserDocente?: User; 
    idusuario?: number;
    Especialidad?: Especialidad,
    idespecialidad?: number;
    habilitado?: boolean;
    estado?: string;
}
