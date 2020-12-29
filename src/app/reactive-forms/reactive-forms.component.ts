import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../shared/services/form.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
 

  nameLabel = 'NBK111 Id';
  Name = 'name';
  nameError = 'Name is required';
  

  CommentLabel = 'Comments';
  Comment = 'comment';
  CommentError ="Comments are required"

  DateLabel = "Select DOB";
  Date = 'date';

  radioLabel = "Gender";
  Gender = 'gender';
  options = ['yes', 'No']


  constructor(private fbLoginForm: FormBuilder){}
  ngOnInit(): void {
    this.loginForm = this.fbLoginForm.group({
      name:['',Validators.required],
      comment:['', Validators.required],
      date: ['',Validators.required],
      gender: ['',Validators.required]
    })
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.loginForm.value);
      this.loginForm.reset()
    }
  }

  onReset() {
    this.loginForm.reset()
  }



}
