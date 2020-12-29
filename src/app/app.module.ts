import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { CounterComponent } from './counter/counter.component';
import { HeaderInterceptor } from './interceptors/HeaderInterceptor';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { InputFieldComponent } from './shared/controls/input-field/input-field.component';
import { DatePickerComponent } from './shared/controls/date-picker/date-picker.component';
import { TextInputComponent } from './shared/controls/text-input/text-input.component';
import { RadioButtonComponent } from './shared/controls/radio-button/radio-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ReactiveFormsComponent,
    InputFieldComponent,
    DatePickerComponent,
    TextInputComponent,
    RadioButtonComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialComponentsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
