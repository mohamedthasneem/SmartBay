import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from 'src/app/Services/http-client.service';
@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {

  @Input()
  store = {
    "storeName" : "",
    "storeOwner" : "",
    "productList":null,
    "picByte":""
  };

  
  @Output()
  storeAddedEvent = new EventEmitter();

  public selectedFile;
  imgURL: any;

  constructor(private httpClientService : HttpClientService,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
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

  addNewStore() {
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:8080/upload', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          console.log("200:Success");
          console.log(this.store);
          this.httpClientService.addStore(this.store).subscribe(
            (book) => {
              this.storeAddedEvent.emit();
              
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
