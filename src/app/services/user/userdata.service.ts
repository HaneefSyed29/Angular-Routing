import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return [
      {name:'Haneef', age:21, email: 'shaneef@test.com'},
      {name:'Haneef', age:21, email: 'shaneef@test.com'},
      {name:'Haneef', age:21, email: 'shaneef@test.com'}
    ]
  }
}
