import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Demo';
  loginForm: FormGroup;
  nameLabel = 'NBK111 Id';
  fcName = 'name';
  tooltipd = 'enter name';


  constructor(private fbLoginForm: FormBuilder){}
  ngOnInit(): void {
    this.loginForm = this.fbLoginForm.group({
      name:['',Validators.required],
      password:['', Validators.required]
    })

  }
}
