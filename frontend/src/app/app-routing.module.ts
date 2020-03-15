import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStoreComponent } from './Modules/store-owner/add-store/add-store.component';
import { AddProductComponent } from './Modules/store-owner/add-product/add-product.component';
// import { CustomerLoginComponent } from './Modules/customer/Components/customer-login/customer-login.component';
// import { CustomerSignupComponent } from './Modules/customer/Components/customer-signup/customer-signup.component';
// import { StoreOwnerLoginComponent } from './Modules/store-owner/Component/store-owner-login/store-owner-login.component';
// import { StoreOwnerSignupComponent } from './Modules/store-owner/Component/store-owner-signup/store-owner-signup.component';

const routes: Routes = [


  { path: 'store-owner/add-store', component: AddStoreComponent },
  { path: 'store-owner/add-product/:id', component: AddProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
