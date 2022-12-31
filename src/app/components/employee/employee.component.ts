import { AfterViewInit, Component , OnInit, ViewChild } from '@angular/core';
declare const $: any;

// reference service which fetches data from api
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit{ // implements  OnInit - for calling getEmployee to fetch all data whenever EmployeeComponent is created by user
  //need to import OnInit method from @angular/core in 1st line above

  // add dependency on service in constructor. This component MUST have our service available.
  constructor(private service:EmployeeService){ } // constructor takes service as a dependency

  ngAfterViewInit(): void {
    $('#example').DataTable( {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      lengthMenu : [5, 10, 25]
  } );
  }

  employees: any
  _id: string | undefined
  name: string | undefined
  department: string | undefined
  status: string | undefined
  email: string | undefined

  //fetch all employees from service 
  //subscribe - observable to acyncronysh call and waiting for responce
  getEmployees(): void{
    this.service.getEmployee().subscribe(responce =>{
      this.employees = responce // employee variable here now has json data of employees from api > database
      // console.log(this.employees) // check if its working 
    })
  }

 // add new employee, properties auto-bound to the matching form inputs
 addEmployee(): void {
    // 1. create & populate new employee object
    let employee = {
      name: this.name,
      department: this.department,
      status: this.status,
      email: this.email
    }

    this.service.addEmployee(employee).subscribe(responce =>{
      //update list
      this.getEmployees()

      // clear the form 
      this.clearForm()
    })
  }

  deleteEmployee(_id: string): void {
    if (confirm('Are you sure???')) {
      this.service.deleteEmployee(_id).subscribe(response => {
        this.getEmployees()
        this.clearForm()
      })
    }     
  }

  clearForm(): void {
    this._id = undefined
    this.name = undefined
    this.department = undefined
    this.status = undefined
    this.email = undefined
  }

  selectEmployee(_id: string, name: string, department: string, status: string, email: string): void {
    this._id = _id
    this.name = name
    this.department = department
    this.status = status
    this.email = email
  }

  updateEmployee(): void {
    let employee = {
      _id: this._id,
      name: this.name,
      department: this.department,
      status: this.status,
      email: this.email
    }

    this.service.updateEmployee(employee).subscribe(response => {
      this.getEmployees()
      this.clearForm()
    })
  }

  //fetch data whenever this component is instanciated 
  ngOnInit(){
    this.getEmployees()
  }
}

