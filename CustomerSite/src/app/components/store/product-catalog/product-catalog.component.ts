import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  private products : Product[];
  storeName;

  constructor(private customerService : CustomerService) { }

  ngOnInit() {
    this.storeName = window.location.href.split('/');
    this.customerService.getAllProducts(this.storeName[3]).subscribe(products=>
      {
        for (let i = 0; i < products.length; i++) {
          
          products[i].retrievedImage = 'data:image/jpeg;base64,' + products[i].picByte;
        }
        console.log (products.length);
        console.log(products[2]);
      this.products = products});
  }

}
