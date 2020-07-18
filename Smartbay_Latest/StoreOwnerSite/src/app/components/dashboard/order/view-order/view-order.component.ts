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
  searchTerm : string;
  test : any;
  filterTerm : string;  

  constructor(private storeOwnerService : StoreOwnerService,private router: Router) { }

  ngOnInit(): void {
    this.storeOwnerService.viewAllOrders().subscribe(orders=>
      {
      this.orders = orders;
        
      },
      err =>{
        console.log("Error .....")
        console.log(err.status)
        if(err.status == 401){
          this.router.navigate(['/login'])
        }
      }) 
  }

  Search(){
    this.storeOwnerService.viewAllOrders().subscribe(
      orders => {        
        this.orders = orders, 
        this.orders = this.orders.filter(res => {
          return res.orderId.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase());  
        }); 
      }  
    );  
  }

  changeStatus(order:Order){
    this.storeOwnerService.setOrderStatusDelivered(order).subscribe(res =>{
      console.log(res)  
    });  
  }

  onSelect(status : string){
    this.filterTerm = status;  

    this.storeOwnerService.viewAllOrders().subscribe(
      orders => {        
        this.orders = orders, 
        this.orders = this.orders.filter(res => {
          return res.status.toLocaleLowerCase().match(this.filterTerm.toLocaleLowerCase());  
        }); 
      }  
    );

  }
}
