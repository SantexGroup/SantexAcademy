import { NumberFormatStyle } from "@angular/common"

export interface registroInterface {
  user: {
    name: string,
    lastName: string,
  },
  profile: {
    id:number,
  },
  rolesId:number,
  userId: number,
  profileName: string,
  updatedAt?: Date,
}