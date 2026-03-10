import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { ICreateCustomerDto } from '../models/interfaces/create-customer-dto.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private readonly LOCAL_STORAGE_KEY = 'customers';
  private _customers: Customer[] = [];

  constructor() {
    this.initCustomers();
  }

  private initCustomers(): void {
    const customers = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (customers) {
      const customersInstances = this.fromString(customers).map((c) => Customer.fromDto(c));
      this._customers = customersInstances;
    }
  }

  private fromString(values: string): ICreateCustomerDto[] {
    try {
      return JSON.parse(values) as ICreateCustomerDto[];
    } catch (error) {
      return [];
    }
  }

  private toString(values: Customer[]): string | undefined {
    try {
      return JSON.stringify(values.map((v) => v.toDto()));
    } catch (error) {
      return undefined;
    }
  }

  public get customers(): Customer[] {
    return this._customers;
  }

  public updateCustomers(): void {
    if (this.customers?.length) {
      const customerString = this.toString(this._customers);
      if (customerString) {
        localStorage.setItem(this.LOCAL_STORAGE_KEY, customerString);
      }
    }
  }
}
