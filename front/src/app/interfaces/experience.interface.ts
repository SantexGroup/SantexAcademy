export interface Experience{
    id?: number,
    statusId: number,
    countriesId: number,
    typesId: number,
    position: string,
    company: string,
    description: string,
    startDate: Date,
    endDate: Date,
    deletedAt?: Date,
}