import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './Module/customer/customer.module';
import { StoreOwnerModule } from './Module/store-owner/store-owner.module';
import { AdminModule } from './Module/admin/admin.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    StoreOwnerModule,
    AdminModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
