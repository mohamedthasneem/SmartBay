import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { StoreOwnerService } from 'src/app/services/store-owner.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  private products : Product[];
  email = localStorage.getItem('email');

  constructor(private storeOwnerService : StoreOwnerService) { }


  ngOnInit() {
    this.storeOwnerService.viewAllProducts(this.email).subscribe(products=>
      {
        for (let i = 0; i < products.length; i++) {
          
          products[i].retrievedImage = 'data:image/jpeg;base64,' + products[i].picByte;
        }
        console.log (products.length);
        console.log(products[2]);
      this.products = products})
  }

}
