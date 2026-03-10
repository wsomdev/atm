import { Component, inject } from '@angular/core';
import { AtmScreen } from '../../components/atm-screen/atm-screen';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-atm',
  imports: [AtmScreen],
  templateUrl: './atm.html',
  styleUrl: './atm.scss',
})
export class Atm {
  public readonly customerService = inject(CustomerService);

  public readonly CUSTOMERS = this.customerService.customers;
}
