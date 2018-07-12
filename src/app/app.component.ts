import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Customer } from './customer';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Address } from './address';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public orderForm: FormGroup;
  private customer: Customer;
  private address: Address;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.customer = new Customer();
    this.customer.address = new Address();
    this.createForm(this.customer);
  }

  private createForm(customer: Customer) {
    this.orderForm = this.fb.group({
      customer: this.fb.group({
        firstName: customer.firstName,
        lastName: customer.lastName,
        age: customer.age,
        addresses: new FormArray([]),
      }),
    });

    this.addNewAddress();
  }

  public addNewAddress() {
    let address = new Address();

    let fa = this.orderForm.get('customer.addresses') as FormArray;
    fa.push(this.fb.group({
      address1: address.address1,
      address2: address.address2,
      city: address.city,
      state: address.address1,
      postalCode: [address.postalCode, [Validators.required, Validators.pattern(/^\d{5}(?:[-\s]\d{4})?$/)]],
    }));
  }

  public removeAddress(i: number) {
    let fa = this.orderForm.get('customer.addresses') as FormArray;
    fa.removeAt(i);
  }
}
