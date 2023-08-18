export type User = {
    id?: string,
    firstName?: string,
    lastName?: string,
    email: string,
    password: string,
    course?: string,
    attendance?: number,
    enrolled?: boolean,
    isAdmin?: boolean,
    isTeacher?: boolean
}