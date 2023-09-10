import { Experience } from "./experience.interface";
import { Language } from "./language.interface";
import { ProfileSkill } from "./skill.interface";
import { Formations } from "./formation.interface";
import { Optionals } from "./optionlas.interface";


export interface Profile {
    id: number;
    userId: number;
    profileName: string;
    deletedAt: Date | null;
    experiences: Experience[];
    languages: Language[];
    skills: ProfileSkill[];
    formations: Formations[];
    optionals: Optionals[];
  }