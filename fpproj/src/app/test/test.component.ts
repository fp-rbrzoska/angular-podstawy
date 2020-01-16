import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-test',
  template: `<h1>Test component</h1>`,
  styles: [`h1 { color: red }`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
