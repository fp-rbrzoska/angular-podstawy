import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable()
export class TestService {

  private mySubj = new Subject();
  myObs$ = this.mySubj.asObservable();


  constructor(param?: string) {
  }

  getObservable(): Observable<number> {
    // return new Observable(obs => {
    //   obs.next(1);
    //   obs.next(2);
    //   obs.complete();
    // });
    return of(1, 2, 3, 4);
  }
}
