import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/Services/http-client.service';
import { Store } from 'src/app/Models/Store';

@Component({
  selector: 'app-view-store',
  templateUrl: './view-store.component.html',
  styleUrls: ['./view-store.component.css']
})
export class ViewStoreComponent implements OnInit {

  private stores:Store[];
  private store:Store;

  constructor(private httpClientService:HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getAllStores().subscribe(stores=>
      {
        for (let i = 0; i < stores.length; i++) {
          stores[i].retrievedImage = 'data:image/jpeg;base64,' + stores[i].picByte;
        }
      this.stores = stores})
  }

}
