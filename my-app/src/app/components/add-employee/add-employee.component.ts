import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
message: any;
errorMessage: any;
newEmployee:Employee = new Employee();
success: any;

constructor(private employeeService:EmployeeService, public router:Router) {}

  passwordMatch() : boolean {
    return this.newEmployee.password === this.newEmployee.confirmPassword;
  }

  addEmployee(){
    console.log(this.newEmployee);
    this.employeeService.addEmployee(this.newEmployee)
    .subscribe(
      {
        next:(data) => {
          console.log(data);
          this.message = "Employee Added Successfully";
          setTimeout(()=>{this.router.navigate(['login'])} ,1000);
          this.errorMessage="";
        },
        error:(err) =>{
          console.log(err);
          this.errorMessage = err.error;
          this.message="";
        }
      }
    );
  }
}
