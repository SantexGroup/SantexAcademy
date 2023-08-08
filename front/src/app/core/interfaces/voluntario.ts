export interface Voluntario {
    id_volunteer?:number,
    name:string,
    lastname: string,
    dni: number,
    email: string,
    password: string,
    address: string,
    points?: number,
    phone: string
}
