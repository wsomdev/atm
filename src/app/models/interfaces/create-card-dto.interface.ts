import { BankType } from '../enums/bank-type.enum';
import { CardType } from '../enums/card-type.enum';

export interface ICreateCardDto {
  cardNumber: string;
  bank: BankType;
  type: CardType;
  pin: string;
  balance: number;
}
