import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  registerCustomer(newCustomer : any){
    return this.httpClient.post<any>('http://localhost:8080/api/customer/signup', newCustomer);  
  }

  loginCustomer(customer : any){
    return this.httpClient.post<any>('http://localhost:8080/api/customer/signin',customer);  
  }

  getAllProducts(){
    return this.httpClient.get<Product[]>('http://localhost:8080/api/customer/products',{headers : {
      "Authorization" : "Bearer "+ localStorage.getItem("token")
    }});
  }

  addProductTocart(products : any){
    localStorage.setItem("product",JSON.stringify(products));  
  }

  getProductFromCart(){
    return JSON.parse(localStorage.getItem('product'));
  }

  removeAllProductFromcart(){
    return localStorage.removeItem('product');
  }

  updateCartCount(){
    
  }

  createOrder(order : any){
    return this.httpClient.post<any>('http://localhost:8080/api/customer/order', order,{headers : {
      "Authorization" : "Bearer "+ localStorage.getItem("token")
    }});    
  }
}
