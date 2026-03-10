import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Card } from '../../models/card';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-atm-card-selection',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './atm-card-selection.html',
  styleUrl: './atm-card-selection.scss',
})
export class AtmCardSelection {
  public readonly customers = input.required<Customer[]>();

  public readonly onChooseCard = output<Card>();

  public chooseCard(card: Card): void {
    this.onChooseCard.emit(card);
  }
}
