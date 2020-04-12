import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { StoreOwnerService } from 'src/app/services/store-owner.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  private customers : Customer[];
  email = localStorage.getItem('email');

  constructor(private storeOwnerService : StoreOwnerService) { }

  ngOnInit() {
    this.storeOwnerService.viewStoreCustomers(this.email).subscribe(customers=>
      {

      this.customers = customers})
  }

}
