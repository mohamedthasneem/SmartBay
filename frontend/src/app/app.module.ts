import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddStoreComponent } from './Modules/store-owner/add-store/add-store.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddProductComponent } from './Modules/store-owner/add-product/add-product.component';
import { ViewStoreComponent } from './Modules/customer/view-store/view-store.component';
import { ViewProductComponent } from './Modules/customer/view-store/view-product/view-product.component';
import { CartComponent } from './Modules/customer/cart/cart.component';
import { ShoppingCartItemComponent } from './Modules/customer/shopping-cart-item/shopping-cart-item.component';
import { ShoppingItemListComponent } from './Modules/customer/shopping-item-list/shopping-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddStoreComponent,
    AddProductComponent,
    ViewStoreComponent,
    ViewProductComponent,
    CartComponent,
    ShoppingCartItemComponent,
    ShoppingItemListComponent
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
