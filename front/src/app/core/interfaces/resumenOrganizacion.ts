import { Organizacion } from "./organizacion";
import { Tarea } from "./tarea";

export interface ResumenOrganizacion{
    coordinador:Organizacion,
    totalInscriptos:number,
    totalPuntosOtorgados:number,
    proximasTareas:Tarea[]
}