import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactDataComponent } from './contact-data/contact-data.component';
import { HomeComponent } from './home/home.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactComponent,
    ContactDataComponent,
    HomeComponent,
    MyHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MainModule { }
