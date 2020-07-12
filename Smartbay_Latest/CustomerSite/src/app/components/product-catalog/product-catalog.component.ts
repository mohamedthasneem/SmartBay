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
  productAddedToCart : Product[];
  cartItemCount : number;
  searchTerm : string;
  filterTerm : string;

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

  rateProduct(productItem:Product,id:string){
    this.router.navigate(['/product/rating',id])  
  }

  viewDetails(product:Product,id:string){
    this.router.navigate(['/product/details',id])  
  }

  Search(){
    this.customerService.getAllProducts().subscribe(
      products => {
        for (let i = 0; i < products.length; i++) {
          
          products[i].retrievedImage = 'data:image/jpeg;base64,' + products[i].picByte;
        }        
        this.products = products, 
        this.products = this.products.filter(res => {
          return res.productName.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase());  
        }); 
      }  
    );  
  }

  onSelect(category:string){
     
    this.filterTerm = category;

    this.customerService.getAllProducts().subscribe(
      products => {
        for (let i = 0; i < products.length; i++) {
          
          products[i].retrievedImage = 'data:image/jpeg;base64,' + products[i].picByte;
        }        
        this.products = products, 
        this.products = this.products.filter(res => {
          return res.productCategory.toLocaleLowerCase().match(this.filterTerm.toLocaleLowerCase());  
        }); 
      }  
    ); 
  }
}
