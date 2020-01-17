import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  private authSubj = new BehaviorSubject(false);
  isLoggedIn$ = this.authSubj.asObservable();
  get isLoggedIn() {
    return this.authSubj.getValue();
  }

  constructor() { }

  logIn() {
    this.authSubj.next(true);
  }

  logOut() {
    this.authSubj.next(false);
  }
}
