import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreOwnerService } from 'src/app/services/store-owner.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  orders : Order[];

  constructor(private storeOwnerService : StoreOwnerService,private router: Router) { }

  ngOnInit(): void {
    this.storeOwnerService.viewAllOrders().subscribe(orders=>
      {
        console.log(orders);
      this.orders = orders},
      err =>{
        console.log("Error .....")
        console.log(err.status)
        if(err.status == 401){
          this.router.navigate(['/login'])
        }
      }) 
  }

}
