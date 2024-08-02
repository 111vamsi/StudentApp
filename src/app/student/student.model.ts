export interface BaseEntity {
  id: number;
  firstName: string;
  lastName: string;
}

export interface IStudent extends BaseEntity {
  enrollmentId: string;
  address: IAddress;
}

export interface ITeacher extends BaseEntity {
  employeId: string;
  address: IAddress;
}

export interface IAddress {
  id: number;
  streetAddress1: string;
  steetAddress2?: string;
  city?: string;
  nearBy?: string;
  zipCode: string;
  state?: string;
  country: string;
}
