import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from 'src/app/Services/http-client.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Input()
  product = {
    "productName" : "",
    "productPrice" : "",
    "picByte":""
  };

  id : string;
  
  @Output()
  productAddedEvent = new EventEmitter();

  public selectedFile;
  imgURL: any;

  constructor(private httpClientService : HttpClientService,
    private router: Router,
    private route: ActivatedRoute,
    private httpClient: HttpClient) { }

  //this.id = this.route.snapshot.params['id'];
  
  //this.id = null;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }

  addNewProduct() {
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:8080/upload', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          console.log("200:Success");
          console.log(this.product); 
          console.log(this.id);
          this.httpClientService.addProduct(this.product,this.id).subscribe(
            (book) => {
              this.productAddedEvent.emit();
              
            }
          );
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
      );
  }
}
