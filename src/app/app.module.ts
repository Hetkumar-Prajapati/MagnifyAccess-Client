import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

//our service which talks to server api
import { EmployeeService } from './services/employee.service';

//HttpClientModule modules required to make http request to the server api
import { HttpClientModule } from '@angular/common/http'

// import forms module class
import { FormsModule } from '@angular/forms';

import {DataTablesModule} from 'angular-datatables';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   // improt httpModule which is needed to call api
    FormsModule,
    DataTablesModule
  ],
  providers: [EmployeeService], // since it provides data it is declared in providers
  // the service is injected and provided as a dependency to a component 
  bootstrap: [AppComponent]
})
export class AppModule { }
