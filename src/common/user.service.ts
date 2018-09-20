import { Injectable } from '@angular/core';

@Injectable()

export class UserService {

  _loggedIn: boolean = true;
  _username: String = '';

  constructor() { }

  get loggedIn() {
	return this._loggedIn;
  }

  set loggedIn(val: boolean) {
    this._loggedIn = val;
  }
  
  get username() {
	return this._username;
  }

  set username(val: String) {
    this._username = val;
  }
}
