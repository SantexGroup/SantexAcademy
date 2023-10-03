export interface ProfileExperience {
    id?: number,
    profilesId: number,
    experiencesId?: number
}

export interface ProfileReference {
    id?: number,
    profilesId: number,
    referencesId?: number
}

export interface ProfileOptional {
    id?: number,
    profilesId: number,
    optionalsId?: number
}

export interface ProfileFormation {
    id?: number,
    profilesId: number,
    formationsId?: number
}

export interface ProfileSkill {
    id?: number,
    profilesId: number,
    skillsId?: number,
    level: number
}

export interface ProfileLanguage {
    id?: number,
    profilesId: number,
    languagesId?: number,
    level: number
}