import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Input() isMandatory = true;

  @Input() toolTip?: string;

  @Input() placeholderValue: string;

  @Input() labelValue: string

  @Input() type? = 'text';

  @Input() Name: string;

  @Input() error: string;
  
  @Input() focusFlag? = false;
  
  @Input() parentForm: string;

  
  constructor() { }

  ngOnInit(): void {
  }

}
