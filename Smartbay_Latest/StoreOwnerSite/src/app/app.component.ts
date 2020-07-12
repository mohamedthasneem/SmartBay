import { Component } from '@angular/core';
import { StoreOwnerService } from './services/store-owner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StoreOwnerSite';

  constructor(public storeOwnerService : StoreOwnerService){}
}
