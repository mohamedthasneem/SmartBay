import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem : Product;

  productAddedToCart : Product[];
  cartItemCount : number;

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
  }

  OnAddCart(product : Product){
    console.log(product)
    console.log(this.productAddedToCart)
    this.productAddedToCart = this.customerService.getProductFromCart();
    console.log(this.productAddedToCart)
    if(this.productAddedToCart == null){
      this.productAddedToCart = [];
      product.productQuantity = 1;
      this.productAddedToCart.push(product)
      this.customerService.addProductTocart(this.productAddedToCart)
    }else{
      let tempProduct = this.productAddedToCart.find(p => p.id == product.id)
      if(tempProduct == null){
        this.productAddedToCart.push(product)
        product.productQuantity = 1;
        this.customerService.addProductTocart(this.productAddedToCart)  
      }else{
        console.log("Product already exists")
      }
    }
  }
}
