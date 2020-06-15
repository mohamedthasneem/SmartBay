import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  products : Product[];

  constructor(private customerService : CustomerService,private router : Router) { }

  ngOnInit(): void {
    this.customerService.getAllProducts().subscribe(products=>
      {
        for (let i = 0; i < products.length; i++) {
          
          products[i].retrievedImage = 'data:image/jpeg;base64,' + products[i].picByte;
        }
        
      this.products = products},
      err =>{
        console.log("Error .....")
        console.log(err.status)
        if(err.status == 401){
          this.router.navigate(['/login'])
        }
      });
  }

}
