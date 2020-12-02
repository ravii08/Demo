import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UserComponent } from './user/user.component';
import { UserDataComponent } from './user-data/user-data.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddUserComponent,
                 UserComponent,
                 UserDataComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
