import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreOwnerService } from 'src/app/services/store-owner.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  customers : Customer[];

  constructor(private storeOwnerService : StoreOwnerService,private router: Router) { }

  ngOnInit(): void {
    this.storeOwnerService.viewAllCustomers().subscribe(customers =>{
      console.log(customers);
      this.customers = customers
    },
    err =>{
      console.log("Error .....")
      console.log(err.status)
      if(err.status == 401){
        this.router.navigate(['/login'])
      }
    }
    )
  }

}

