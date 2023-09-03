export interface Tarea{
    id?:number,
    name:string,
    description:string,
    id_coordinator:number,
    points:number,
    date:Date,
    place:string,
    id_category:number
}