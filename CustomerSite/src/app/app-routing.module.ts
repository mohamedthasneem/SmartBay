import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { LoginComponent } from './components/store/login/login.component';
import { ProductCatalogComponent } from './components/store/product-catalog/product-catalog.component';
import { SignupComponent } from './components/store/signup/signup.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:':id',component: StoreComponent},
  {path : ':id/login', component : LoginComponent},
  {path : ':id/signup', component : SignupComponent},
  {path : ':id/products', component : ProductCatalogComponent}
  //{path:':id/login',component: LoginComponent},
  //{path:':id/product-catalog',component: ProductCatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
