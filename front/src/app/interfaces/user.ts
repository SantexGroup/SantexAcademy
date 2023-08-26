export interface UserLogin{
    username: string;
    password: string;
}

export interface User {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    phoneNumber: number;
    rol: string;
    token: string;
}