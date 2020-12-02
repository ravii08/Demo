import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path:'', loadChildren:() => import('./home/home.module').then(m => m.HomeModule)},
  {path:'counter', loadChildren:() => import('./counter/counter.module').then(m => m.CounterModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  FormsModule,
ReactiveFormsModule]
})
export class AppRoutingModule { }
