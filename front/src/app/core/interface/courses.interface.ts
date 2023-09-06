export interface Course {
  id: number;
  title: string;
  subtitle: string;
  description?: string;
  duration: number;
  start_date: Date;
  capacity: number;
  price: number;
  due: number;
  has_surcharge: boolean;
  surchage_percentage: number;
  modality:string,
  courseDetails:[{
    id: number;
    title: string;
    paragraph1: string;
    paragraph2: string;
    image1url: string;
    image2ur2: string;
  }]
}