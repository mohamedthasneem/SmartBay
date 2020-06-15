import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productAddedToCart : Product[];
  cartTotal : number;
  cartItems : Product[];

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.cartItems = this.customerService.getProductFromCart();
    
       
  }

  onAddQuantity(product : Product){
    
    this.cartItems = this.customerService.getProductFromCart();
    
    this.cartItems.find(p=>p.id == product.id).productQuantity = product.productQuantity + 1
   
    this.customerService.removeAllProductFromcart()
   
    this.customerService.addProductTocart(this.cartItems) 
    
    this.calculateAllTotal(this.cartItems) 
    
  }

  onRemoveQuantity(product : Product){
    this.cartItems = this.customerService.getProductFromCart();
    this.cartItems.find(p=>p.id == product.id).productQuantity = product.productQuantity - 1
    this.customerService.removeAllProductFromcart()
    this.customerService.addProductTocart(this.cartItems) 
    this.calculateAllTotal(this.cartItems) 
  }

  calculateAllTotal(allItems : Product[]){
    let total=0;
    for(let i in allItems){
      total = total + (allItems[i].productQuantity * allItems[i].productPrice);  
    }
    localStorage.setItem('total',JSON.stringify(total));
    this.cartTotal = total;  
  }
}
