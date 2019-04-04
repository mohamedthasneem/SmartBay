import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { Customer } from '../Model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customer : Customer;
  baseURL : string = "http://localhost:8080/add";
  constructor(private httpClient:HttpClient) { }

  createCustomer(customer:Customer){
    return this.httpClient.post(this.baseURL,customer);
  }

  setter(customer:Customer){
    this.customer = customer;
  }

  getter(){
    return this.customer;
  }
}
