import { Component, OnInit } from '@angular/core';
import { StoreOwnerService } from 'src/app/services/store-owner.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public storeOwnerService : StoreOwnerService) { }

  ngOnInit(): void {
  }

}
