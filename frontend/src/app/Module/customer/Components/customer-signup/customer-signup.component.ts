import { Component, OnInit } from '@angular/core';
import { Customer } from 'G:/Development-Project/SmartBay/frontend/src/app/Module/customer/Model/customer';
import {CustomerService} from 'G:/Development-Project/SmartBay/frontend/src/app/Module/customer/Service/customer.service';
import {Router} from '@angular/router';

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
    password : ''
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
