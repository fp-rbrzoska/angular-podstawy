import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {

  private user: User = {
    age: 19,
    name: 'Alojzy Ciurlok'
  };

  constructor() {
    console.log('init userservice');
  }

  getUser() {
    return this.user;
  }
}
