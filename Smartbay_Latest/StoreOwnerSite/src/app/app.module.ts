import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from './components/dashboard/product/product.component';
import { AddProductComponent } from './components/dashboard/product/add-product/add-product.component';
import { ViewProductComponent } from './components/dashboard/product/view-product/view-product.component';
import { UpdateProductComponent } from './components/dashboard/product/update-product/update-product.component';
import { CustomerComponent } from './components/dashboard/customer/customer.component';
import { OrderComponent } from './components/dashboard/order/order.component';
import { ViewOrderComponent } from './components/dashboard/order/view-order/view-order.component';
import { ViewCustomerComponent } from './components/dashboard/customer/view-customer/view-customer.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    ProductComponent,
    AddProductComponent,
    ViewProductComponent,
    UpdateProductComponent,
    CustomerComponent,
    OrderComponent,
    ViewOrderComponent,
    ViewCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
