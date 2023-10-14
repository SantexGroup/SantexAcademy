export interface Formations {
    Country?:{
        country: string,
    },
    FormationStatus?:{
        status: string,
    },
    FormationType?: {
        type: string
    },
    id?: number,
    statusId: number,
    typesId: number,
    title: string,
    institute: string,
    startDate: Date,
    endDate?: Date,
    description: string,
    deletedAt?: Date,
    profileId?: number,
}