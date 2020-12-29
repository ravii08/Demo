import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {


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
