import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { StoreOwner } from '../Model/store-owner';

@Injectable({
  providedIn: 'root'
})
export class StoreOwnerService {
  private storeOwner : StoreOwner;
  baseURL : string = "http://localhost:8080/addOwner";
  constructor(private httpClient : HttpClient) { }

  createStoreOwner(storeOwner : StoreOwner){
    return this.httpClient.post(this.baseURL,storeOwner);
  }

  setter(storeOwner : StoreOwner){
    this.storeOwner = storeOwner;
  }

  getter(){
    return this.storeOwner;
  }
}
