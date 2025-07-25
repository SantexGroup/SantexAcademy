export class PlayerDto {
  id: number;
  name: string;
  club: string;
  position: string;
  nationality: string;
  rating: number;
  speed: number;
  shooting: number;
  dribbling: number;
  passing: number;

  constructor(partial: Partial<PlayerDto>) {
    Object.assign(this, partial);
  }
}
