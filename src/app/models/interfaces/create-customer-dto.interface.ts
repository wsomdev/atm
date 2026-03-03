import { Gender } from '../enums/gender.enum';

export interface ICreateCustomerDto {
  firstname: string;
  lastname: string;
  birthdate: Date;
  address: string;
  gender: Gender;
}
