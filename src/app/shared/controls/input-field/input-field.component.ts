import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input() isMandatory = true;

  @Input() toolTip?: string;

  @Input() placeholderValue: string;

  @Input() labelValue: string

  @Input() type? = 'text';

  @Input() Name: string;

  @Input() error: string;
  
  @Input() focusFlag? = false;
  
  @Input() parentForm: string
  constructor() { }

  ngOnInit(): void {
  }

}
