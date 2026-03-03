import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerDialog } from './create-customer-dialog';

describe('CreateCustomerDialog', () => {
  let component: CreateCustomerDialog;
  let fixture: ComponentFixture<CreateCustomerDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCustomerDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCustomerDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
