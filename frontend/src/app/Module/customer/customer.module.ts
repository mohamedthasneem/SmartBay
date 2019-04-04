import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSignupComponent } from './Components/customer-signup/customer-signup.component';
import { CustomerLoginComponent } from './Components/customer-login/customer-login.component';
import { CustomerService } from './Service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [CustomerSignupComponent, CustomerLoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers : [CustomerService]
})
export class CustomerModule { }
