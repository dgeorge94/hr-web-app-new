import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounce, Subject } from 'rxjs';

import { Employee } from './employee.model';

@Injectable({providedIn: 'root'})
export class EmployeesService {
  private employees: Employee[] = [];
  private employeesUpdated = new Subject<Employee[]>();

  constructor(private http: HttpClient) {}

  getEmployees() {
    this.http.get<{message: string, employees: Employee[]}> ('http://localhost:3000/api/employee')
      .subscribe((employeeData) => {
        this.employees = employeeData.employees;
        this.employeesUpdated.next([...this.employees]);
      });
  }

  getEmployeeUpdateListener() {
    return this.employeesUpdated.asObservable();
  }

  date_to_String(date_Object: Date): string {
    let date_String: string =

    (date_Object.getMonth() + 1) +
    "/" +
    +date_Object.getDate() +
    "/" +
    date_Object.getFullYear();
  return date_String;
  }

  new_date: Date = new Date();
  date_string = this.date_to_String(this.new_date);

  addEmployee(
    tNumber:string,
    firstName:string,
    lastName:string,
    job:string,
    employmentStatus:string,
    employmentDates:Date,
    salary:bigint,
    DOB:Date,
    SSN:string,) {
    const employee: Employee = { id: null, tNumber: tNumber, firstName: firstName, lastName: lastName, job: job,
                            employmentStatus: employmentStatus, employmentDates: this.date_to_String(employmentDates) + " - ", salary: salary,
                            DOB: this.date_to_String(DOB), SSN: SSN };
    this.http.post<{message: string}>('http://localhost:3000/api/employee', employee)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.employees.push(employee);
        this.employeesUpdated.next([...this.employees]);
      })
    }
}


