import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { TestService } from 'src/app/core/test.service';
export type StringOrNumber = string | number;
@Component({
  selector: 'fp-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss'],
  providers: [ { provide: TestService, useFactory: () => new TestService('backend')} ]
})
export class MyTestComponent implements OnInit, OnDestroy {


  @Output() increment = new EventEmitter();
  @Input() inputData: number ;
  iterableData: StringOrNumber[] = ['a', 'b', 1];
  testObj = { test1: 'a', test2: 'b'};
  private interval;

  constructor(private testService: TestService) { }

  ngOnInit() {
    console.log('init');
    this.interval = setInterval(() => {
      this.inputData++;
      console.log('incr');
      this.increment.emit(this.inputData);
    }, 5000);

  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
