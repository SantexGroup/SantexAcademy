import { Tarea } from "./tarea"
import { TareasVoluntario } from "./tareasVoluntario"

export interface Voluntario {
    id?:number,
    name:string,
    lastname: string
    email: string,
    password: string,
    address: string,
    points?: number,
    phone: string,
    tareasVoluntario?:TareasVoluntario
}
