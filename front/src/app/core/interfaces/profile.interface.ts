import { Experience } from "./experience.interface";
import { Language } from "./language.interface";
import { Skill } from "./skill.interface";
import { Formations } from "./formation.interface";
import { Optionals } from "./optionlas.interface";
import { Reference } from "./reference.interface";


export interface Profile {
    id?: number;
    userId: number;
    profileName: string;
    deletedAt?: Date | null;
    Experiences?: Experience[];
    Languages?: Language[];
    Skills?: Skill[];
    Formations?: Formations[];
    Optionals?: Optionals[];
    References?: Reference[]
  }