export interface User {
    token: string;
    id: number,
    firstName:string,
    lastName:string,
    email:string,
    phone:string,
    password:string,
    active:boolean,
    admin:boolean
}