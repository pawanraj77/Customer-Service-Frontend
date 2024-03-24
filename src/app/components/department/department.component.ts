import { Component } from '@angular/core';
import { Department } from '../../model/department';
import { OperatorService } from '../../services/operator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DepartmentOp } from '../../model/department-op';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  departments:DepartmentOp[]=[];
  message?:string="";
  errorMessage?:string="";
  constructor(private operatorService:OperatorService,private router:Router)
  {
    this.operatorService.getDepartments().subscribe({
      next:(data)=>{
        console.log(data);
        this.departments=data;
        this.message="SucessFull in fetching the data";
        this.errorMessage="";
      },error:(err)=>{
        this.errorMessage=err.error;
        this.message="";
      }
    })
  }
  assignToDepartment(deptId?:number)
  {
    this.operatorService.assignOperatorToDepatment(JSON.parse(localStorage.getItem("op")||'').operatorId,deptId).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.message="SucessFull in assinging department to operator";
          this.errorMessage="";
        },error:(err)=>{
        this.errorMessage=err.error;
        this.message="";
        }
      }
    )
  }
  displayOperaotrs(id?:number)
  {
    console.log(id);
    this.router.navigateByUrl('operators/'+id);
  }

}
