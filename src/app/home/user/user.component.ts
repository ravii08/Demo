import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../shared/services/services.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any;

  constructor(private userService: ServicesService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    let id = this.router.snapshot.params['id'];
    this.userService.getUserData(id).subscribe(data => {
      this.user = data;
    })
  }

}
