import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path: ''
  },
  {
    component:AboutComponent,
    path: 'about'
  },
  {
    component:ContactComponent,
    path: 'contact'
  },
  {
    component:EmployeeComponent,
    path: 'employee'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
