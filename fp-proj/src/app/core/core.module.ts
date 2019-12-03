import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { UserGuard } from './user.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserGuard,
    { provide: UserService, useClass: UserService }
  ]
})
export class CoreModule { }
