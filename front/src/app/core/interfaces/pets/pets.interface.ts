import { Breed } from "../breeds/breeds.interface";
import { User } from "../users/users.interface";

export interface Pet {
  id: number,
  name: string,
  birth_date: Date,
  gender: string,
  breedId?: number
  user?: {
    id: number,
    name: string,
    lastname: string
  },
}

export const MIN_PETNAME_LENGTH: number = 5;
export const MAX_PETNAME_LENGTH: number = 60;