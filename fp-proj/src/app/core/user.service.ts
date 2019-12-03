import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

  private isLoggedInSubj = new BehaviorSubject(false);

  private user: User = {
    age: 19,
    name: 'Alojzy Ciurlok'
  };

  isLoggedIn$ = this.isLoggedInSubj.asObservable();

  constructor() {
    console.log('init userservice');
  }

  getUser() {
    return this.user;
  }

  logIn() {
    this.isLoggedInSubj.next(true);
  }

  logOut() {
    this.isLoggedInSubj.next(false);
  }
}
