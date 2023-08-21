export interface Course {
    id?: number;
    name: string,
    descripcion: string,
    maxStudents: number,
    start: Date;
    end: Date;
    active: boolean;
    price: number;
    requirement: string,
    teacher: string,
    courseCategoryName: string,

}