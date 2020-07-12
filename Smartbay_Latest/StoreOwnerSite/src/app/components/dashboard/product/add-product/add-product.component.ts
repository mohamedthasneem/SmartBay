import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StoreOwnerService } from 'src/app/services/store-owner.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Input()
  product = {
    "productId" : "",
    "productName" : "",
    "productCategory" : "",
    "productPrice":"",
    "picByte":""
  };

  constructor(private storeOwnerService : StoreOwnerService,private router : Router, private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  @Output()
  productAddedEvent = new EventEmitter();

  public selectedFile;
  imgURL: any;
  email = localStorage.getItem('email');
 
  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }


  addNewProduct(){
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:9090/api/store-owner/upload', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          console.log("200:Success");
          console.log(this.product);
          this.storeOwnerService.addProduct(this.product).subscribe(
            (product) => {
              console.log(product);
              this.productAddedEvent.emit();
              
            }
          );
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
        this.router.navigate(['/dashboard/products/view'])
      }
      );
  }

}
