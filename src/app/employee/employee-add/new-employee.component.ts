import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { EmployeesService } from "../employees.service";

@Component({
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})

export class NewEmployeeComponent {
  enteredTNumber = "";
  enteredFirstName = "";
  enteredLasstName = "";
  enteredJob = "";
  enteredEmploymentStatus = "Active";
  enteredEmployementDate = "";
  enteredSalary = 0;
  enteredDOB = "";
  enteredSSN = "";

  constructor(public employeesService: EmployeesService) {}

  changeDatePicker(): any {

  }

  onAddEmployee(form: NgForm) {
    if (form.invalid) {
      return;
    }


    this.employeesService.addEmployee(
      form.value.tNumber,
      form.value.firstName,
      form.value.lastName,
      form.value.job,
      this.enteredEmploymentStatus,
      form.value.employmentDates,
      form.value.salary,
      form.value.DOB,
      form.value.SSN);
      form.resetForm();
  }
}
