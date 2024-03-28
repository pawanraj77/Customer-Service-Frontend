import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Operator } from '../../model/operator';
import { Login } from '../../model/login';
import { OperatorService } from '../../services/operator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-operator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-operator.component.html',
  styleUrl: './login-operator.component.css'
})
export class LoginOperatorComponent {
  message: string="";
  errorMessage:string=""
  operator:Operator=new Operator();
  login:Login=new Login();
  constructor(private operatorService:OperatorService,private router:Router) {}
  loginOperator()
  {
      console.log(this.login);
      this.operatorService.loginOperator(this.login).subscribe({
        next:(data)=>{
          console.log(data);
          localStorage.setItem('user',JSON.stringify(data));
          // alert("employee logged in successFully");
          this.router.navigateByUrl('home')
          this.message = "Logged In Successfully";
          this.errorMessage="";
        },error:(err)=>{
          console.log(err.error);
          this.errorMessage=err.error;
          this.message = "";
        }
      })
  }
}
