import { Component, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOMERS } from '../../models/data/customers.mock';
import { MatListModule } from '@angular/material/list';
import { CurrencyPipe } from '@angular/common';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CreateCustomerDialog } from '../../components/create-customer-dialog/create-customer-dialog';
import { Customer } from '../../models/customer';
import { ICreateCustomerDto } from '../../models/interfaces/create-customer-dto.interface';
import { CreateCardDialog } from '../../components/create-card-dialog/create-card-dialog';
import { ICreateCardDto } from '../../models/interfaces/create-card-dto.interface';
import { Card } from '../../models/card';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-card-list',
  imports: [MatExpansionModule, MatIconModule, MatListModule, CurrencyPipe, MatAnchor, MatButton],
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss',
})
export class CardList {
  public readonly dialog = inject(MatDialog);
  public readonly customerService = inject(CustomerService);

  public readonly CUSTOMERS = this.customerService.customers;

  public openModalCreate(): void {
    const dialogRef = this.dialog.open(CreateCustomerDialog, { minWidth: '60vw' });

    dialogRef.afterClosed().subscribe((value: ICreateCustomerDto) => {
      if (value) {
        this.customerService.addCustomer(value);
      }
    });
  }

  public addCardModal(ev: PointerEvent, customer: Customer): void {
    ev.stopImmediatePropagation();

    const dialogRef = this.dialog.open(CreateCardDialog, { minWidth: '60vw' });

    dialogRef.afterClosed().subscribe((value: ICreateCardDto) => {
      if (value) {
        const newCard = new Card(
          value.cardNumber,
          value.type,
          value.bank,
          value.pin,
          value.balance,
        );
      }
    });
  }
}
