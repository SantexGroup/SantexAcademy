export interface Course {
  id: number;
  title: string;
  subtitle: string;
  description?: string;
  duration: string;
  start_date: string;
  capacity: number;
  price: number;
  due: number;
  has_surcharge: boolean;
  surchage_percentage: number;
  createdAt: Date;
  updateAt: Date;

}
