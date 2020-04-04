import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from './components/dashboard/product/product.component';
import { OrderComponent } from './components/dashboard/order/order.component';
import { CustomerComponent } from './components/dashboard/customer/customer.component';
import { AddProductComponent } from './components/dashboard/product/add-product/add-product.component';
import { ViewProductComponent } from './components/dashboard/product/view-product/view-product.component';
import { ViewCustomerComponent } from './components/dashboard/customer/view-customer/view-customer.component';
import { ViewOrderComponent } from './components/dashboard/order/view-order/view-order.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ProductComponent,
    OrderComponent,
    CustomerComponent,
    AddProductComponent,
    ViewProductComponent,
    ViewCustomerComponent,
    ViewOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
