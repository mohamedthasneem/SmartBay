import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Product } from 'src/app/models/product';
import { RecProduct } from 'src/app/models/rec-product';

@Component({
  selector: 'app-rec-products',
  templateUrl: './rec-products.component.html',
  styleUrls: ['./rec-products.component.css']
})
export class RecProductsComponent implements OnInit {

  recIds : any;
  recProducts : Product[];

  productIds : [];

  email : string;
  
  recProductList = {
    "productIdList" : null
  }
  //prIdList : RecProduct = null;
  
  myObj = {
    idList: null
  };
  
  myObjStr = JSON.stringify(this.myObj);
  
  testObj = JSON.parse(this.myObjStr);

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    
    //console.log(this.myObjStr);

    //console.log(this.testObj);

    //this.myObj.idList = [12,15];
    this.email = localStorage.getItem('email');
    
    this.customerService.getOrderProductIds(this.email).subscribe(res=>{
      //this.productIds = res;
      //this.prIdList.idList = [100,102];
      this.myObj.idList = res;

      console.log("&&&&&")
      console.log(this.myObj)
      //console.log(this.prIdList.idList)
    
      this.customerService.getRecProductIds(this.myObj).subscribe(res=>{
        //this.recIds = res 
        console.log("##########")
        console.log(res) 
        console.log("##########")
        this.recProductList.productIdList = res.ids;
  
        console.log(this.recProductList.productIdList)  
  
        this.customerService.getRecProducts(this.recProductList).subscribe(productList =>{
          this.recProducts = productList
          for (let i = 0; i < productList.length; i++) {
          
            productList[i].retrievedImage = 'data:image/jpeg;base64,' + productList[i].picByte;
          }
          console.log("$$$$$$$$$$$$$$$")
          console.log(this.recProductList)
          console.log(this.recProducts)
          console.log("$$$$$$$$$$$$$$$")  
        
        })
      })
    })

    
    
        
    

    

    

  }

}
