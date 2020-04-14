import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './components/store/store.component';
import { LoginComponent } from './components/store/login/login.component';
import { SignupComponent } from './components/store/signup/signup.component';
import { ProductCatalogComponent } from './components/store/product-catalog/product-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoreComponent,
    LoginComponent,
    SignupComponent,
    ProductCatalogComponent,
   
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
