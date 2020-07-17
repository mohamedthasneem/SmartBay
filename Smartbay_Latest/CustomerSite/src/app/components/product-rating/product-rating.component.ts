import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from 'src/app/services/customer.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent implements OnInit {
  id : string;
  product : Product;
  x : number;
  
  @Input()
  rating = {
    "productId" : 0,
    "email" : localStorage.getItem('email'),
    "rating":0
  };

  constructor(private customerService : CustomerService,private httpClient : HttpClient,private route : ActivatedRoute, private router : Router) { }

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

  saveProductRating(){
    this.rating.productId = this.product.productId;
    console.log(this.rating.productId);
    console.log(this.rating);
    this.customerService.rateProduct(this.rating).subscribe(rating => {
      this.rating = rating;
      this.router.navigate(['/products'])  
    });  
  }

  getProduct(){
    
  }




  
}
