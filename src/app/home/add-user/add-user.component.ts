import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee.model';
import { ServicesService } from '../../Services/services.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public service: ServicesService) { }

  
  ngOnInit() {
   
  }
  
  createAndUpdate(currentUser: Employee) {
      console.log(currentUser);
      if(currentUser.id != null){
        console.log("update");
        this.updateUser(currentUser)
      }else {
        console.log("create");
        this.createUser(currentUser)
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
