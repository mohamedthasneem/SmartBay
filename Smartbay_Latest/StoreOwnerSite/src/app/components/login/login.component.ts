import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StoreOwnerService } from 'src/app/services/store-owner.service';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  storeowner = {
    "email" : "",
    "password" : ""
  };

  constructor(private storeOwnerService : StoreOwnerService,private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  login() {
    this.storeOwnerService.loginStoreOwner(this.storeowner).subscribe(
      res=>{
        console.log(res)
        console.log(res.status)
        localStorage.setItem('store-owner-token',res.token)
        this.router.navigate(['/dashboard'])
      },
      err =>{
        this.router.navigate(['/login'])
        console.log("Error : "+err)
      })
  }

}
