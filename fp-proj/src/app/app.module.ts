import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDataComponent } from './contact-data/contact-data.component';
import { VatPipe } from './vat.pipe';
import { ProductsComponent } from './products/products.component';
import { ProductsAddComponent } from './products/products-add/products-add.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsItemComponent } from './products/products-item/products-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyHomeComponent,
    ContactComponent,
    ContactDataComponent,
    VatPipe,
    ProductsComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    ProductsFormComponent,
    ProductsListComponent,
    ProductsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
