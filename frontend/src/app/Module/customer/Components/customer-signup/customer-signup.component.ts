import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Customer } from 'src/app/Module/customer/Model/customer';
import { CustomerService } from 'src/app/Module/customer/Service/customer.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {

  public customer : Customer ={
    firstName : '',
    lastName : '',
    email : '',
    telNumber : '',
    password : '',
    address : ''
  }
  constructor(private _customerService : CustomerService,private _router : Router) { }

  ngOnInit() {
  }

  process(){
    this._customerService.createCustomer(this.customer).subscribe((customer)=>
    console.log(customer));
    this._router.navigate(['/']);
  }
}
