export interface Optionals {
    id?: number,
    maritalId: number,
    sexsId: number,
    countriesId: number,
    profile: string,
    webPage: string,
    linkedIn: string,
    hobbies: string,
    aptitudes: string,
    driverLicense: string,
    aboutMe: string,
    achievements: string,
    address: string,
    zipCode: number,
    deletedAt?: Date,
    profileId: number,
    Marital?: {
        id?:number,
        condition: string
    }
    Sex?: {
        id?:number,
        gender: string
    }
}