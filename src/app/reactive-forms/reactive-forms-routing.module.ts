import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from './can-activate.guard';
import { ReactiveFormsComponent } from './reactive-forms.component';


const routes: Routes = [
  {path:'',component:ReactiveFormsComponent,canActivate: [CanActivateGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsRoutingModule { }
