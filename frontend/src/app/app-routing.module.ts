import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerLoginComponent } from './Module/customer/Components/customer-login/customer-login.component';
import { CustomerSignupComponent } from './Module/customer/Components/customer-signup/customer-signup.component';

const routes: Routes = [
  {path:'customer/login',component:CustomerLoginComponent},
  {path:'customer/signup',component:CustomerSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
