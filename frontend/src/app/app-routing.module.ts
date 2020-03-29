import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStoreComponent } from './Modules/store-owner/add-store/add-store.component';
import { AddProductComponent } from './Modules/store-owner/add-product/add-product.component';
import { ViewStoreComponent } from './Modules/customer/view-store/view-store.component';
import { ViewProductComponent } from './Modules/customer/view-store/view-product/view-product.component';
import { ShoppingCartItemComponent } from './Modules/customer/shopping-cart-item/shopping-cart-item.component';
import { ShoppingItemListComponent } from './Modules/customer/shopping-item-list/shopping-item-list.component';
import { CartComponent } from './Modules/customer/cart/cart.component';
// import { CustomerLoginComponent } from './Modules/customer/Components/customer-login/customer-login.component';
// import { CustomerSignupComponent } from './Modules/customer/Components/customer-signup/customer-signup.component';
// import { StoreOwnerLoginComponent } from './Modules/store-owner/Component/store-owner-login/store-owner-login.component';
// import { StoreOwnerSignupComponent } from './Modules/store-owner/Component/store-owner-signup/store-owner-signup.component';

const routes: Routes = [


  { path: 'store-owner/add-store', component: AddStoreComponent },
  { path: 'store-owner/add-product/:id', component: AddProductComponent },
  { path: 'customer/view-stores', component: ViewStoreComponent},
  { path: 'customer/store/view-products/:id', component: ViewProductComponent},
  { path: 'customer/shopping-item', component: ShoppingCartItemComponent},
  { path: 'customer/shopping-item-list', component: ShoppingItemListComponent},
  {path: 'customer/cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
