import { Component, OnInit } from '@angular/core';
import { TestService } from '../core/test.service';
import { tap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'fp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private testService: TestService) {
    testService.getObservable()
    .pipe(
      filter(x => x % 2 === 0),
      map(x => x * 2)
    )
    .subscribe(x => console.log(x));
   }

  ngOnInit() {
  }

}
