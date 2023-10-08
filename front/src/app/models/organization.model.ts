export interface organization {
  id: number;
  name: string;
  description: string;
  email: string;
  password: string;
  phone: string;
  cuit: string;
  category: string;
  location: string;
  urlWebSite: string;
  coverPage: string;
  image: {
    imageUrl: string;
    publicId: string;
  };
}
