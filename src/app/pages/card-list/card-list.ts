import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOMERS } from '../../models/data/customers.mock';

@Component({
  selector: 'app-card-list',
  imports: [MatExpansionModule, MatIconModule],
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss',
})
export class CardList {
  public readonly CUSTOMERS = CUSTOMERS;
}
