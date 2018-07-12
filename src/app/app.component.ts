import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Customer } from './customer';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Address } from './address';

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
    this.address = new Address();
    this.createForm(this.customer, this.address);
  }

  private createForm(customer: Customer, address: Address) {
    this.orderForm = this.fb.group({
      customer: this.fb.group({
        firstName: customer.firstName,
        lastName: customer.lastName,
        age: customer.age
      }),
      address: this.fb.group({
        address1: address.address1,
        address2: address.address2,
        city: address.city,
        state: address.address1,
        postalCode: address.postalCode,
      }),
    });
  }
}
