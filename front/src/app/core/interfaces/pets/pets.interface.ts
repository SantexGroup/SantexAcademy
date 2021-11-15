export interface Pet {
  id: number,
  name: string,
  birth_date: Date,
  breed: string,
  gender: string,
  // userId: number,
  user?: {
    id: number,
    name: string,
    lastname: string
  }
}
