import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  customerSignup(newCustomer:any,storeId:string){
    return this.httpClient.post<Customer>('http://localhost:8080/'+`${storeId}`+'/customer/register',newCustomer)
  }

  customerLogin(){

  }

  getAllProducts(){

  }
}
