export interface Formations {
    id?: number,
    statusId: number,
    typesId: number,
    title: string,
    institute: string,
    startDate: Date,
    endDate: Date,
    description: string,
    deletedAt?: Date
}