import { Registered } from "./registered"
export interface User {
    id: number,
    firstName:string,
    lastName:string,
    email:string,
    phone:string,
    password:string,
    active:boolean,
    admin:boolean,
    Registereds:[Registered]
}