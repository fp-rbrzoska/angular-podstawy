import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTestComponent } from './my-test/my-test.component';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    MyTestComponent,
    TestComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    MyTestComponent,
    TestComponent]
})
export class TestModule { }
