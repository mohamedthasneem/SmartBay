import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : Product;
  id : string;

  constructor(private customerService : CustomerService,private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //this.getProduct();
    console.log(this.id);
    //console.log(this.product);

    this.customerService.getProduct(this.id).subscribe(product => {
      this.product = product
      
      product.retrievedImage = 'data:image/jpeg;base64,' + product.picByte;
    })
  }

}
