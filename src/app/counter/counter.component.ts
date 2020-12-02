import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count : any;
  constructor( public service: CounterService) { }

  ngOnInit(): void {
  }

  Increment() {
    this.count = this.service.add();
  }
  Decrement() {
    this.count = this.service.sub();
  }

}
