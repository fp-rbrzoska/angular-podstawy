import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from './test.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: TestService, useFactory: () => new TestService('browser')} ]
})
export class CoreModule { }
