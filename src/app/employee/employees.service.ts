import { Injectable } from '@angular/core';
import { debounce, Subject } from 'rxjs';

import { Employee } from './employee.model';

@Injectable({providedIn: 'root'})
export class EmployeesService {
  private employees: Employee[] = [];
  private employeesUpdated = new Subject<Employee[]>();

  getEmployees() {
    return [...this.employees];
  }

  getEmployeeUpdateListener() {
    return this.employeesUpdated.asObservable();
  }

  addEmployee(firstName:string,
    lastName:string,
    tNumber:string,
    job:string,
    employmentStatus:string,
    employmentDates:string,
    salary:bigint,
    DOB:string,
    SSN:string,) {
    const employee: Employee = {firstName: firstName, lastName: lastName, tNumber: tNumber, job: job,
                            employmentStatus: employmentStatus, employmentDates: employmentDates, salary: salary,
                            DOB: DOB, SSN: SSN };
    this.employees.push(employee);
    this.employeesUpdated.next([...this.employees]);
  }
}


