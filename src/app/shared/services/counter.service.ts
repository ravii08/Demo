import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter = 0;
  constructor() { }
  add() {
    this.counter += 1;
  }
  sub() {
    this.counter -= 1;
  }
}
