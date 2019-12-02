import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() inputData;
  @Output() homeOutput = new EventEmitter();
  counter = 0;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.counter++;
      this.homeOutput.emit(this.counter);
    }, 2000);
  }

}
