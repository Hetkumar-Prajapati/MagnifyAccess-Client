import { Injectable } from '@angular/core';

// import HttpClient  to make HTTP calls to server API
import { HttpClient, HttpHeaders } from '@angular/common/http' // import HttpHeaders class

//refere to environment to read the server API URL
import { environment } from 'src/app/environment/environment';

// HttpHeaders needed for POST AND PUT
let headers = new HttpHeaders()
headers.append('Content-Type', 'application/json')

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   //set srver URL as class level var re-used in all http requests
   serverUrl: string = environment.serverUrl

   constructor(private http: HttpClient) { }
  
  // get employees - this call our api 
  getEmployee(){
    return this.http.get(`${this.serverUrl}/api/employees`)   // call the server and runs get method in declared in employee controller
    // this is where the 2 projects part to each other 
  }

  addEmployee(employee: any){
    return this.http.post(`${this.serverUrl}/api/employees`, employee, {headers: headers})
  }

  // delete
  deleteEmployee(_id: string) {
    return this.http.delete(`${this.serverUrl}/api/employees/${_id}`)
  }

   // edit
   updateEmployee(employee: any) {
    return this.http.put(`${this.serverUrl}/api/employees/${employee._id}`, employee)
  }

}
