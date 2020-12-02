import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter = 0;
  constructor() { }
  Add() {
    this.counter += 1;
  }
  Sub() {
    this.counter -= 1;
  }
}
