import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {EmployerComponent} from './employer/employer.component';
// import {DrawingControlComponent} from './drawing-control/drawing-control.component';
import {CustomStepperComponent} from './custom-stepper/custom-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployerComponent,
    // DrawingControlComponent,
    CustomStepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
