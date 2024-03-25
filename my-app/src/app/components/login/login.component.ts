import { Component } from '@angular/core';
import { Operator } from '../../model/operator';
import { Login } from '../../model/login';
import { OperatorService } from '../../services/operator.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
          alert("employee logged in successFully");
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
