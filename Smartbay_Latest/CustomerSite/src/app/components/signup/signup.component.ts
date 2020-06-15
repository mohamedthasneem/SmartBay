import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {CustomerService} from 'src/app/services/customer.service';

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
    "address" : ""
  };


  constructor(private customerService : CustomerService,private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  signup() {
    this.customerService.registerCustomer(this.customer).subscribe(res =>{
      res = this.customer;
      this.router.navigate(['/login']) 
    },
    err =>{
      this.router.navigate(['/signup'])
        console.log("Error : "+err)
    });
  }

}
