import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { StoreOwnerService } from 'src/app/Module/store-owner/Service/store-owner.service';
import { StoreOwner } from 'src/app/Module/store-owner/Model/store-owner';


@Component({
  selector: 'app-store-owner-signup',
  templateUrl: './store-owner-signup.component.html',
  styleUrls: ['./store-owner-signup.component.css']
})
export class StoreOwnerSignupComponent implements OnInit {

  public storeOwner : StoreOwner = {
    firstName : '',
    lastName : '',
    email : '',
    telNumber : '',
    password : ''
  }

  constructor(private _storeOwnerService : StoreOwnerService, private _router : Router) { }

  ngOnInit() {
  }

  process(){
    this._storeOwnerService.createStoreOwner(this.storeOwner).subscribe((StoreOwner)=>{
      console.log(StoreOwner);
      this._router.navigate(['/']);
    });    
  }
}
