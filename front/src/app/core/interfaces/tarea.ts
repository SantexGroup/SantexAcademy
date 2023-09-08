import { Categoria } from "./categoria"

export interface Tarea{
    id?:number,
    name:string,
    description:string,
    coordinatorId?:number,
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
    longitud:number
}