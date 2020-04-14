import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Store } from '../models/store';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  Stores : Store[] = [];
  Products : Product[] = [];

  constructor(private httpClient: HttpClient) { }

  customerSignup(newCustomer:any,storeId:string){
    return this.httpClient.post<Customer>('http://localhost:8080/'+`${storeId}`+'/customer/register',newCustomer)
  }

  customerLogin(){

  }

  getAllStores(){
    return this.httpClient.get<Store[]>('http://localhost:8080/stores');
  }

  getAllProducts(storeName:string){
    return this.httpClient.get<Product[]>('http://localhost:8080/'+`${storeName}`+'/view-products');
  }

  
}
