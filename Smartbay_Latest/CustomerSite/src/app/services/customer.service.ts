import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Rating } from '../models/rating';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient,private router : Router) { }

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

  rateProduct(productRating:any){
    return this.httpClient.post<Rating>('http://localhost:8080/api/customer/product/rate',productRating);    
  }

  getProduct(id:String){
    return this.httpClient.get<Product>('http://localhost:8080/api/customer/product/'+id);  
  }

  getOrderProductIds(email:String){
    return this.httpClient.get<any>('http://localhost:8080/api/customer/order-ids/'+email);  
  }

  getRecProductIds(productIds : any){
    return this.httpClient.post<any>('http://localhost:5000/test',productIds)  
  }

  getRecProducts(recIds : any){
    return this.httpClient.post<any>('http://localhost:8080/api/customer/recommended-products',recIds)  
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('ProductIds')
    localStorage.removeItem('product')
    localStorage.removeItem('__paypal_storage__')
    this.router.navigate(['/login'])
  }

  sendMessage(message:any){
    return this.httpClient.post<any>('http://localhost:5000/chat',message);  
  }
  
}
