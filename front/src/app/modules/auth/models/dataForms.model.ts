export interface volunterData {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  file: any;
}

export interface coordinatorData {
  name: string;
  description: string;
  email: string;
  password: string;
  phone: string;
  cuit: string;
  location: string;
  opportunityType: string;
  category: string;
  file: any;
}

export interface volunterDataLogin {
  email: string;
  password: string;
}

export interface CoordinatorDataLogin {
  email: string;
  password: string;
  cuit: number;
}
