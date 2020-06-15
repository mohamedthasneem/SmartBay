import { Component, OnInit } from '@angular/core';
import { StoreOwnerService } from 'src/app/services/store-owner.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  products : Product[];
  email = localStorage.getItem('email');

  constructor(private storeOwnerService : StoreOwnerService,private router: Router) { }

  ngOnInit(): void {
   this.reloadData()
    /* this.storeOwnerService.viewAllProducts().subscribe(products=>
      {
        for (let i = 0; i < products.length; i++) {
          
          products[i].retrievedImage = 'data:image/jpeg;base64,' + products[i].picByte;
        }
        console.log (products.length);
        console.log(products);
      this.products = products},
      err =>{
        console.log("Error .....")
        console.log(err.status)
        if(err.status == 401){
          this.router.navigate(['/login'])
        }
      })
      */
  }

  reloadData(){
    this.storeOwnerService.viewAllProducts().subscribe(products=>
      {
        for (let i = 0; i < products.length; i++) {
          
          products[i].retrievedImage = 'data:image/jpeg;base64,' + products[i].picByte;
        }
        console.log (products.length);
        console.log(products);
      this.products = products},
      err =>{
        console.log("Error .....")
        console.log(err.status)
        if(err.status == 401){
          this.router.navigate(['/login'])
        }
      })  
  }

  deleteProduct(id:string){
    this.storeOwnerService.deleteProduct(id).subscribe(data=>{
      console.log(data)
      this.reloadData()
    })  
  }

  updateProduct(id:string,product:Product){
    this.router.navigate(['/dashboard/products/update',id])
  }
}
