export interface Experience{
    id?: number,
    description: string,
    position: string,
    company: string,
    typesId: number,
    statusId: number,
    countriesId: number, 
    startDate: Date,
    endDate?: Date,
    deletedAt?: Date,
    profileId?: number
}