import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreOwner } from '../models/store-owner';

@Injectable({
  providedIn: 'root'
})
export class StoreOwnerService {

  private baseURL = 'http://localhost:8080/add-product';

  constructor(private httpClient: HttpClient) {

  }

  register(newStore: any) {
    return this.httpClient.post<StoreOwner>('http://localhost:8080/add-store', newStore);
  }
  
}
