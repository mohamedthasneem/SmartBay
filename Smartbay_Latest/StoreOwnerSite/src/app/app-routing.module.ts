import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddProductComponent } from './components/dashboard/product/add-product/add-product.component';
import { ViewProductComponent } from './components/dashboard/product/view-product/view-product.component';
import { UpdateProductComponent } from './components/dashboard/product/update-product/update-product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from './components/dashboard/product/product.component';
import { CustomerComponent } from './components/dashboard/customer/customer.component';
import { ViewCustomerComponent } from './components/dashboard/customer/view-customer/view-customer.component';
import { OrderComponent } from './components/dashboard/order/order.component';
import { ViewOrderComponent } from './components/dashboard/order/view-order/view-order.component';
import { SalesComponent } from './components/dashboard/sales/sales.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'' , redirectTo:'home', pathMatch:'full'},
  {path:'home' ,component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
   children : [
     {path:'products',component:ProductComponent,
      children : [
        {path:'add',component:AddProductComponent},
        {path:'view',component:ViewProductComponent},
        {path:'update/:id',component:UpdateProductComponent}
      ]
      },
      {path:'customers',component:CustomerComponent,
      children : [
        {path:'view',component:ViewCustomerComponent}
      ]
      },
      {path:'orders',component:OrderComponent,
      children : [
        {path:'view',component:ViewOrderComponent}
      ]
      },
      {path:'sales',component:SalesComponent
      }
   ] 
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
