import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';




const MaterialComponent = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatTableModule
  
]




@NgModule({
  
  imports: [MaterialComponent],
  exports: [MaterialComponent],

})
export class MaterialComponentsModule { }
