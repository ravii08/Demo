import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { GuardGuard } from '../guard.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  // {path:'', redirectTo:'',pathMatch:'full'},
  {path:'user-data',component:UserDataComponent},
  {path:'user/:id',component:UserComponent},
  {path: 'adduser', component: AddUserComponent},
  {path:'form',loadChildren:() => import('../reactive-forms/reactive-forms.module').then(m => m.ReactiveFormsModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
