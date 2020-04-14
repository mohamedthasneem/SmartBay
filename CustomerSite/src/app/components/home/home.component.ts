import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Store } from 'src/app/models/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private stores : Store[];

  constructor(private customerService : CustomerService) { }

  title = 'CustomerSite';
  
  ngOnInit(){
    this.customerService.getAllStores().subscribe(stores => {
      this.stores = stores;
      console.log(this.stores);
    })
  }

}
