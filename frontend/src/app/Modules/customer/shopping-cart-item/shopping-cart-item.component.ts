import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/Services/http-client.service';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  constructor(private httpClientService : HttpClientService) { }

  ngOnInit() {
  }

  // AddProduct(_product : Product){
  //   _product.added = true;
  //   this.httpClientService.addProduct(_product);
  //   console.log('Hello');
  // }

  // RemoveProduct(_product : Product){
  //   _product.added = false;
  //   this.httpClientService.removeProduct(_product.id);
  // }

}
