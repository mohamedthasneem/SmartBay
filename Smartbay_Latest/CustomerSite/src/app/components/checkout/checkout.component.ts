import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartTotal : number;
  cartItems : Product[];

  @Input()
  order = {
    "firstName" : "",
    "lastName" : "",
    "email" : "",
    "billingAddress" : "",
    "productList" : null
  }


  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.cartItems = this.customerService.getProductFromCart();
    this.order.productList = this.cartItems;
    this.cartTotal = parseInt(localStorage.getItem('total'));  
  }

  addOrder(){
    this.customerService.createOrder(this.order).subscribe(data =>{
      data = this.order;
    });  
  }

}
