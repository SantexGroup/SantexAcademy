export interface loginInterface {
  accessToken: string,
  user:{
    name:string,
    lastName:string,
    pictureLink:string,
    rolesId: number
  },
  profile: {
    id:number,
    userId: number,
    profileName: string,
    updatedAt: Date,
  },
}
