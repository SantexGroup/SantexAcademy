export interface Language {
    id?: number,
    language: string,
    level: number,
    profileId?: number,
    ProfileLanguage?: {
        id?:number,
        profileId?:number,
        LanguagesId?:number,
        level?:number
    }
}