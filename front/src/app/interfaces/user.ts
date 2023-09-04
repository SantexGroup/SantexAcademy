export interface UserLogin{
    username: string;
    password: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    phone: number;
    rol: string;
    token:string;
    createdAt: Date;
    updatedAt: Date;
}
