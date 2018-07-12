import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Customer } from './customer';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public orderForm: FormGroup;
  private customer: Customer;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.customer = new Customer();
    this.createForm(this.customer);
  }

  private createForm(customer: Customer) {
    this.orderForm = this.fb.group(customer);
  }
}
