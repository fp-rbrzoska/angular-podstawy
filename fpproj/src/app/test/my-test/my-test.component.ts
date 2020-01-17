import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'fp-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit, OnDestroy {


  @Output() increment = new EventEmitter();
  @Input() inputData: number ;
  private interval;
  constructor() { }

  ngOnInit() {
    console.log('init')
    this.interval = setInterval(() => {
      this.inputData++;
      console.log('incr')
      this.increment.emit(this.inputData);
    }, 2000);

  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
