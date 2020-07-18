import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/product';
import { StoreOwnerService } from 'src/app/services/store-owner.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id : string;

  product : Product;

   
  constructor(private storeOwnerService : StoreOwnerService,private httpClient : HttpClient,private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.storeOwnerService.getProductById(this.id).subscribe(res =>{
      this.product = res;
      console.log(this.product)
    })
  }
  
  @Output()
  productAddedEvent = new EventEmitter()

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


  updateProduct(){
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:9090/api/store-owner/upload', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          console.log("200:Success");
          console.log(this.product);
          this.storeOwnerService.updateProduct(this.id,this.product).subscribe(
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
