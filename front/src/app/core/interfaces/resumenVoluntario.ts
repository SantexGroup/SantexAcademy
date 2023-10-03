import { Tarea } from "./tarea";
import { Voluntario } from "./voluntario";

export interface ResumenVoluntario{
    horasTrabajadas:number,
    puntosAdquiridos:number,
    tareasPendientes:Tarea[],
    voluntario:Voluntario
    
}