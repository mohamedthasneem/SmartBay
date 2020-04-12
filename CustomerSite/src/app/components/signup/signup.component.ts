import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input()
  customer = {
    "username" : "",
    "email" : "",
    "password" : "",
    "address" : "",
    "telephoneNumber" : ""  
  }

  private url = window.location.pathname.split('/');
  storeId;

  constructor(private customerService : CustomerService,private router: Router,
    private httpClient: HttpClient,private route : ActivatedRoute) { }

  ngOnInit() {
    this.storeId = this.route.snapshot.paramMap.get('id');
  }

  addNewCustomer() {
    this.customerService.customerSignup(this.customer,this.storeId).subscribe(data =>{
      data = this.customer;
      localStorage.setItem('customer-email',data.email);
    });
    console.log(this.storeId);
  }

}
