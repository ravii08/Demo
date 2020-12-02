import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../shared/services/model/employee.model';
import { ServicesService } from '../../shared/services/services.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  
  constructor(public service: ServicesService) { }

  
  ngOnInit() {
   
  }
  
  createAndUpdate(user: Employee) {
      console.log(user);
      if(user.id != null){
        this.updateUser(user)
      }else {
        this.createUser(user)
      }
  }

  createUser(user: Employee) {
    this.service.createUser(user).subscribe();
  }

  updateUser(user: Employee) {
    this.service.updateUser(user).subscribe((
      data:Employee)=> {
        this.service.getAllData();
      });
    }
}
