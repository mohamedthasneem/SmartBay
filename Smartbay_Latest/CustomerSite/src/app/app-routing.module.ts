import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'products',component:ProductCatalogComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
