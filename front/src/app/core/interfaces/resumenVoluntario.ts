import { Premio } from "./premio";
import { Tarea } from "./tarea";
import { Voluntario } from "./voluntario";

export interface ResumenVoluntario{
    horasTrabajadas:number,
    puntosAdquiridos:number,
    tareasPendientes:Tarea[],
    premiosCanjeados:Premio[],
    voluntario:Voluntario
    
}