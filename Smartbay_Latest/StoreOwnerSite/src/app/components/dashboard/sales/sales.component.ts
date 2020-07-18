import { Component, OnInit } from '@angular/core';
import { SalesDetails } from 'src/app/models/sales-details';
import { StoreOwnerService } from 'src/app/services/store-owner.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  salesDetails : SalesDetails;

  constructor(private storeOwnerService : StoreOwnerService) { }

  ngOnInit(): void {
    this.storeOwnerService.getSalesDetails().subscribe(details =>{
      this.salesDetails = details;
    })  
  }

}
