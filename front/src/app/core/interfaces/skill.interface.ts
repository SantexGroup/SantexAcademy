export interface Skill {
    id?: number,
    skill: string,
    level: number,
    profileId?: number,
    ProfileSkill?: {
        id?:number,
        profileId?:number,
        skillsId?:number,
        level?:number
    }
}
