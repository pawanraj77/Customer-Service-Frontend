import { Component } from '@angular/core';
import { Login } from '../../model/login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee';
import { OperatorService } from '../../services/operator.service';
 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  message: string = "";
  errorMessage: string = "";
  employee:Employee = new Employee();
  login:Login = new Login();

  constructor(private employeeService:EmployeeService, public router:Router, private operatorService:OperatorService) {}

  userLogin() {
    console.log(this.login);
    this.employeeService.loginEmployee(this.login)
    .subscribe(
      {
        next: (data) => {
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data));
          // alert("Employee Logged In Successfully");
          this.router.navigateByUrl("home");
          this.message = "Employee login successful";
          this.errorMessage = "";
        },
        error:(err) => {
          console.log(err);
          this.errorMessage = err.error;
          this.message = "";
        }
      }
    ); 
  }


  userRegister() {
    this.router.navigateByUrl("add-employee");
    console.log("Register the user!!!");
  }

  userLogout() {
    console.log("current user logged out");
    localStorage.clear();
  }






}