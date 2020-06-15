import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class StoreOwnerService {

  constructor(private httpClient: HttpClient,private router : Router) { }

  registerStoreOwner(newStoreOwner : any){
    return this.httpClient.post<any>('http://localhost:9090/api/store-owner/signup', newStoreOwner);  
  }

  loginStoreOwner(storeOwner:any){
    return this.httpClient.post<any>('http://localhost:9090/api/store-owner/signin',storeOwner);  
  }

  

  authenticate(email, password) {
    return this.httpClient.post<any>('http://localhost:9090/api/store-owner/signin',{email,password}).pipe(
     map(
       userData => {
        //sessionStorage.setItem('username',username);
        //let tokenStr= 'Bearer '+userData.token;
        //sessionStorage.setItem('token', tokenStr);
        console.log("Hello")
        return userData;

       }

     )

    );

  }

  viewAllProducts(){
    return this.httpClient.get<Product[]>('http://localhost:9090/api/store-owner/products',{headers : {
      "Authorization" : "Bearer "+ localStorage.getItem("store-owner-token")
    }});  
  }

  addProduct(newProduct : any){
    return this.httpClient.post<Product>('http://localhost:9090/api/store-owner/product',newProduct,{headers : {
      "Authorization" : "Bearer "+ localStorage.getItem("store-owner-token")
    }});
  }

  deleteProduct(id:string){
    return this.httpClient.delete('http://localhost:9090/api/store-owner/product/'+id,{headers : {
      "Authorization" : "Bearer "+ localStorage.getItem("store-owner-token")
    }});  
  }

  updateProduct(id:string,updateProduct:any){
    return this.httpClient.put('http://localhost:9090/api/store-owner/product/'+id,updateProduct,{headers : {
      "Authorization" : "Bearer "+ localStorage.getItem("store-owner-token")
    }});
  }

  loggedIn(){
    return !!localStorage.getItem('store-owner-token')
  }

  getToken(){
    return localStorage.getItem('store-owner-token')
  }

  logOut(){
    localStorage.removeItem('store-owner-token')
    this.router.navigate(['/login'])
  }

  viewAllCustomers(){
    return this.httpClient.get<Customer[]>('http://localhost:9090/api/store-owner/customers',{headers : {
      "Authorization" : "Bearer "+ localStorage.getItem("store-owner-token")
    }});  
  }

  viewAllOrders(){
    return this.httpClient.get<Order[]>('http://localhost:9090/api/store-owner/orders',{headers : {
      "Authorization" : "Bearer "+ localStorage.getItem("store-owner-token")
    }});  
  }

  
}
