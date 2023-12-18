import { Categoria } from "./categoria"
import { Organizacion } from "./organizacion"
import { TareasVoluntario } from "./tareasVoluntario"

export interface Tarea{
    id?:number,
    name:string,
    description:string,
    coordinatorId?:number,
    coordinator?:Organizacion,
    points:number,
    date:Date,
    place:string,
    categoryId:number,
    category?:Categoria,
    cantParticipantes:number,
    cantInscriptos?:number,
    duracion:number,
    estado?:string,
    hora:number,
    latitud:number,
    longitud:number,
    tareasVoluntario?:TareasVoluntario
}