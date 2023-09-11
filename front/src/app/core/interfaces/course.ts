export interface Course {
    id: number;
    name: string,
    description: string,
    image: string,
    maxStudents: number,
    start: Date;
    end: Date;
    active: boolean;
    price: number;
    requirement: string,
    teacher: string,
    CourseCategoryName: string,

}