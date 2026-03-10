import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BankType } from '../../models/enums/bank-type.enum';
import { CardType } from '../../models/enums/card-type.enum';

@Component({
  selector: 'app-create-card-dialog',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './create-card-dialog.html',
  styleUrl: './create-card-dialog.scss',
})
export class CreateCardDialog {
  readonly dialogRef = inject(MatDialogRef<CreateCardDialog>);

  public readonly form = new FormGroup({
    cardNumber: new FormControl('', [Validators.required]),
    bank: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    pin: new FormControl('', [Validators.required]),
    balance: new FormControl('', [Validators.required]),
  });

  public readonly bankTypeValues = Object.values(BankType);
  public readonly cardTypeValues = Object.values(CardType);
}
