import { NumberFormatStyle } from "@angular/common"

export interface registroInterface {
  user: {
    name: string,
    lastName: string,
  },
  profile: {
    id:number,
    userId: number,
  },
  rolesId:number,
  profileName: string,
  updatedAt?: Date,
}