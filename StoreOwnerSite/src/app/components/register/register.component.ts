import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StoreOwnerService } from 'src/app/services/store-owner.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input()
  storeowner = {
    "username" : "",
    "email" : "",
    "password" : "",
    "shopName" : "",
    "address" : "",
    "telephoneNumber" : "",
    "productList":null,
  };

  constructor(private storeOwnerService : StoreOwnerService,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  addNewStore() {
    this.storeOwnerService.register(this.storeowner).subscribe(data =>{
      data = this.storeowner
    });
  }
}
