import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StoreOwnerService } from 'src/app/services/store-owner.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input()
  storeowner = {
    "username" : "",
    "email" : "",
    "shopName" : "",
    "shopURL" : "",
    "password" : ""
  };

  constructor(private storeOwnerService : StoreOwnerService,private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  signup() {
    this.storeOwnerService.registerStoreOwner(this.storeowner).subscribe(
      res=>{
        console.log(res)
        console.log(res.status)
        res = this.storeowner;
        this.router.navigate(['/login'])
      },
      err =>{
        this.router.navigate(['/signup'])
        console.log("Error : "+err)
      })
  }

}
