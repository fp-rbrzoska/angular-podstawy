import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTestComponent } from './my-test/my-test.component';
import { TestComponent } from './test.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MyTestComponent,
    TestComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MyTestComponent,
    TestComponent]
})
export class TestModule { }
