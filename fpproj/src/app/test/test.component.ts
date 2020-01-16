import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-test',
  templateUrl: './test.component.html',
  styles: [`h1 { color: red }`]
})
export class TestComponent implements OnInit {

  testVar = 1;
  constructor() { }

  ngOnInit() {
  }

  handleClick(value: string) {
    console.log(value)
    this.testVar ++;
  }

  transform(val: string): string {
    return val.toUpperCase();
  }

}
