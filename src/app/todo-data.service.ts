import { Injectable } from '@angular/core';
import {UserMod, SettleUp} from './usermod';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  users: Array<UserMod>;
  settleup: Array<SettleUp>;
 
  constructor() { }


  addUser(user: UserMod): TodoDataService {
    this.users.push(user);
    return this;
  }

  setUser(users){
    this.users = users;
  }

  setexpense(exp){
    this.settleup = exp;
  }

  getAllTodos(): UserMod[] {
    return this.users;
  }

  getAllExp(): SettleUp[]{
    return this.settleup;
  }

 
}
