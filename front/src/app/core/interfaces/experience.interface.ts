export interface Experience{
    Country?:{
        country:string
    },
    ExperienceStatus?:{
        status: string,
    },
    ExperienceTypes?:{
        type:string,
    }
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