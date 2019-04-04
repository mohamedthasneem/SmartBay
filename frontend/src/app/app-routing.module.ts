import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerLoginComponent } from './Module/customer/Components/customer-login/customer-login.component';
import { CustomerSignupComponent } from './Module/customer/Components/customer-signup/customer-signup.component';
import { StoreOwnerLoginComponent } from './Module/store-owner/Component/store-owner-login/store-owner-login.component';
import { StoreOwnerSignupComponent } from './Module/store-owner/Component/store-owner-signup/store-owner-signup.component';

const routes: Routes = [
  {path:'customer/login',component:CustomerLoginComponent},
  {path:'customer/signup',component:CustomerSignupComponent},
  {path:'store-owner/login',component:StoreOwnerLoginComponent},
  {path:'store-owner/signup',component:StoreOwnerSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
