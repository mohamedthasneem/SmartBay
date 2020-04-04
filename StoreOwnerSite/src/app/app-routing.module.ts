import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from './components/dashboard/product/product.component';
import { OrderComponent } from './components/dashboard/order/order.component';
import { CustomerComponent } from './components/dashboard/customer/customer.component';
import { AddProductComponent } from './components/dashboard/product/add-product/add-product.component';
import { ViewProductComponent } from './components/dashboard/product/view-product/view-product.component';
import { ViewOrderComponent } from './components/dashboard/order/view-order/view-order.component';
import { ViewCustomerComponent } from './components/dashboard/customer/view-customer/view-customer.component';

const routes: Routes = [
  {path:'register',component: RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component: HomeComponent},
  {path:'dashboard',component:DashboardComponent,
   children : [
     {path:'products',component:ProductComponent,
      children : [
        {path:'add',component:AddProductComponent},
        {path:'view',component:ViewProductComponent}
      ]
      },
     {path:'orders',component:OrderComponent,
      children : [
        {path:'view',component:ViewOrderComponent}
      ]
      },
     {path:'customers',component:CustomerComponent,
      children : [
        {path:'view',component:ViewCustomerComponent}
      ]
      }
   ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
