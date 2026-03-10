import { Card } from './card';
import { Gender } from './enums/gender.enum';
import { ICreateCustomerDto } from './interfaces/create-customer-dto.interface';

export class Customer {
  constructor(
    private readonly _birthdate: Date,
    private _firstname: string,
    private _lastname: string,
    private _gender: Gender,
    private _address: string,
    private _cards: Card[],
  ) {}

  public get fullname(): string {
    return `${this._lastname.toUpperCase()} ${this._firstname}`;
  }

  public get cards(): Card[] {
    return this._cards;
  }

  public get isMale(): boolean {
    return this._gender === Gender.MALE;
  }

  public toDto(): ICreateCustomerDto {
    return {
      birthdate: this._birthdate,
      firstname: this._firstname,
      lastname: this._lastname,
      gender: this._gender,
      address: this._address,
    };
  }

  public static fromDto(customer: ICreateCustomerDto): Customer {
    return new Customer(
      customer.birthdate,
      customer.firstname,
      customer.lastname,
      customer.gender,
      customer.address,
      [],
    );
  }
}
