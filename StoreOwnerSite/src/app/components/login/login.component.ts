import { Component, OnInit, Input } from '@angular/core';
import { StoreOwnerService } from 'src/app/services/store-owner.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  userData = {
    "email" : "",
    "password" : ""
  };

  constructor(private storeOwnerService : StoreOwnerService,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  storeOwnerLogin(){
    localStorage.setItem('email',this.userData.email);
    //this.storeOwnerService.login(this.userData).subscribe(data=>{
      //console.log(data);
      //data = this.userData;
      this.router.navigate(["/dashboard"])
    //})
  }
}
