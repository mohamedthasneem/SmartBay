import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../Models/Store';
import { Product } from '../Models/product';
import { Subject, BehaviorSubject } from 'rxjs';
import { CartState } from '../Models/cart-state';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private baseURL = 'http://localhost:8080/add-product';
  private baseURL2 = 'http://localhost:8080/view-products'
  constructor(private httpClient: HttpClient) { }

  Stores : Store[] = [];
  Products : Product[] =[];

  //
  private messageSource = new BehaviorSubject<string>("default message!");
  currentMessage = this.messageSource.asObservable();
  //

  //
  private cartSubject = new Subject<CartState>();
  Products_cart : Product[] = [];
  CartState = this.cartSubject.asObservable();
  //

  //
  addProductsToCart(product:any){
    console.log('in service');
    this.Products_cart.push(product);
    this.cartSubject.next(<CartState>{loaded:true,products:this.Products_cart});
  }

  removeProductsFromCart(id:string){
    this.Products = this.Products.filter((_item) => _item.id !== id);
    this.cartSubject.next(<CartState>{loaded:false,products:this.Products_cart});
  }
  //
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
