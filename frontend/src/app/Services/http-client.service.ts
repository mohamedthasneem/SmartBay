import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../Models/Store';
import { Product } from '../Models/product';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private baseURL = 'http://localhost:8080/add-product';
  private baseURL2 = 'http://localhost:8080/view-products'
  constructor(private httpClient: HttpClient) { }

  Stores : Store[] = [];
  Products : Product[] =[];

  addStore(newStore: any) {
    return this.httpClient.post<Store>('http://localhost:8080/add-store', newStore);
  }

  addProduct(newProduct: any,id:string) {
    return this.httpClient.patch<Product>(`${this.baseURL}/${id}`, newProduct);
  }

  getAllStores(){
    return this.httpClient.get<Store[]>('http://localhost:8080/view-stores');
  }

  viewStoreProducts(id:string){
    return this.httpClient.get<Product[]>(`${this.baseURL2}/${id}`);
  }
} 
