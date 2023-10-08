export interface volunteering {
  idVolunteering: number;
  name: string;
  description: string;
  vacancies: number;
  workTime: string;
  modeOfwork: string;
  reward: 50;
  address: string;
  updatedAt?: any;
  createdAt: Date;
  organization: {
    description: string;
    image: {
      imageUrl: string;
      publicId: string;
    };
    name: string;
  };
}
