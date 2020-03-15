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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddStoreComponent,
    AddProductComponent,
    ViewStoreComponent
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
