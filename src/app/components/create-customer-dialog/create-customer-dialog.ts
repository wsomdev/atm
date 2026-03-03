import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-customer-dialog',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule],
  templateUrl: './create-customer-dialog.html',
  styleUrl: './create-customer-dialog.scss',
})
export class CreateCustomerDialog {}
