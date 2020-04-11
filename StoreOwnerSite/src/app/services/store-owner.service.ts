import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreOwner } from '../models/store-owner';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class StoreOwnerService {

  private baseURL = 'http://localhost:8080/add-product';

  Products : Product[] = [];

  constructor(private httpClient: HttpClient) {

  }

  register(newStore: any) {
    return this.httpClient.post<StoreOwner>('http://localhost:8080/add-store', newStore);
  }

  login(userData: any){
    return this.httpClient.post('http://localhost:8080/store-owner/login',userData);
  }
  
  viewAllProducts(email:string){
    return this.httpClient.get<Product[]>('http://localhost:8080/products/all/'+`${email}`);  
  }

  addProduct(newProduct : any,email : string){
    return this.httpClient.put<Product>(`${this.baseURL}/${email}`,newProduct);
  }
}
