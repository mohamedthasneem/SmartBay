import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreOwnerLoginComponent } from './Component/store-owner-login/store-owner-login.component';
import { StoreOwnerSignupComponent } from './Component/store-owner-signup/store-owner-signup.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { StoreOwnerService } from './Service/store-owner.service';

@NgModule({
  declarations: [StoreOwnerLoginComponent, StoreOwnerSignupComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers : [StoreOwnerService]
})
export class StoreOwnerModule { }
