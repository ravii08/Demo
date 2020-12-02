import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { ServicesService } from '../../Services/services.service';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  users: Employee[]
  constructor(private userService: ServicesService) { }

  ngOnInit(): void {
    this.getAllData();
}
getAllData(){
    this.userService.getAllData().subscribe(
      (data: Employee[]) => {
      this.users = data
    });
  }

  deleteUser(id: number) {
   
    this.userService.deleteEmployee(id).subscribe(
      (data:Employee) => {
        this.getAllData();
      }
    );

  }

  edit(user) {
    this.userService.currentUser = Object.assign({}, user);
  }
}
