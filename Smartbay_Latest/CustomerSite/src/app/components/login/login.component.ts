import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  customer = {
    "email" : "",
    "password" : ""
  };

  productIds : [];

  constructor(private customerService : CustomerService,private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  login() {
    this.customerService.loginCustomer(this.customer).subscribe(
      res=>{
        console.log(this.customer)
        console.log(res)
        console.log(res.status)
        localStorage.setItem('token',res.token)
        localStorage.setItem('email',this.customer.email)
        this.router.navigate(['/products'])
      },
      err =>{
        this.router.navigate(['/login'])
        console.log("Error : "+err)
      })

      
  }

}
