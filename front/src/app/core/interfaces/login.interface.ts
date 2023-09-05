export interface loginInterface {
  user:{
    name:string,
    lastName:string,
  },
  profile: {
    id:number,
    userId: number,
    profileName: string,
    updatedAt: Date,
  },
}
