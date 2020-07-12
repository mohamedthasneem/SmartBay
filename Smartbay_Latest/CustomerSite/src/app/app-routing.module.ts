import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductRatingComponent } from './components/product-rating/product-rating.component';
import { RecProductsComponent } from './components/rec-products/rec-products.component';
import { HomeComponent } from './components/home/home.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'products',component:ProductCatalogComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'product/rating/:id',component:ProductRatingComponent},
  {path:'product/details/:id',component:ProductDetailsComponent},
  {path:'product/rec',component:RecProductsComponent},
  {path:'chat',component:ChatbotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
