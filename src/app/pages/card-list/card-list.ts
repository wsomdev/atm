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

@Component({
  selector: 'app-card-list',
  imports: [MatExpansionModule, MatIconModule, MatListModule, CurrencyPipe, MatAnchor, MatButton],
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss',
})
export class CardList {
  public readonly CUSTOMERS = CUSTOMERS;
  readonly dialog = inject(MatDialog);

  public openModalCreate(): void {
    const dialogRef = this.dialog.open(CreateCustomerDialog, { minWidth: '60vw' });

    dialogRef.afterClosed().subscribe((value: ICreateCustomerDto) => {
      if (value) {
        const newCustomer = new Customer(
          value.birthdate,
          value.firstname,
          value.lastname,
          value.gender,
          value.address,
          [],
        );
      }
    });
  }
}
