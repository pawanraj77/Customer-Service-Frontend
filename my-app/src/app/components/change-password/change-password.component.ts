import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Login } from '../../model/login';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})

export class ChangePasswordComponent {

  message:string = "";
  errorMessage:string = "";
  login:Login = new Login();
  employee:Employee = new Employee();
  
  constructor(private employeeService: EmployeeService, private router:Router) {}

  changePassword() {
    console.log(this.login);
    const userString = localStorage.getItem('user');
    if(userString) {
      const user = JSON.parse(userString);
      if(user && user.email === this.login.email) {
        this.employeeService.changePassword(this.login)
        .subscribe(
          {
            next: (data) => {
              console.log(data);
              this.message = "Password changed successfully";
              this.errorMessage = "";
              setTimeout(()=>{this.router.navigate(['employee'])} ,2000);
            },
    
            error:(err) => {
              console.log(err);
              this.errorMessage = err.error;
              this.message = "";
            }
          }
        );
      } else {
        this.errorMessage = "Invalid Email, Please login again!";
      }

    } else {
      this.errorMessage = "User data not found, Please login first!";
    }

  }

}
