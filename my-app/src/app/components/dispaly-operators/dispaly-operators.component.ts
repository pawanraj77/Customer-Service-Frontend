import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Operator } from '../../model/operator';
import { OperatorService } from '../../services/operator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispaly-operators',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dispaly-operators.component.html',
  styleUrl: './dispaly-operators.component.css'
})
export class DispalyOperatorsComponent {
  operators:Operator[]=[];
  message?:string="";
  errorMessage?:string="";
  constructor(private operatorService:OperatorService,private router:Router)
  {
    this.operatorService.dispalyOperators().subscribe({
      next:(data)=>{
        console.log(data);
        this.operators=data;
      },error:(err)=>{
        console.log(err);
      }
    })
  }
  updateOperator(operator:Operator){
    console.log(operator);
    this.router.navigateByUrl('updateOperator/'+operator.operatorId);
  }
  deleteOperator(id?:number)
  {
    console.log("delete id:"+id);
    if(confirm("Are you sure you want to delete this Operator" +id))
      this.operatorService.deleteOperatorById(id).subscribe({
        next:(resp)=>{
          console.log(resp);
          this.operators=this.operators.filter((a)=>a.operatorId!=id);
          this.message="suceessfully deleted the operator "+id;
          this.errorMessage="";
        },
        error:(err)=>{
          this.errorMessage=err.error;
          this.message="";
        }
      })
    
  }
  addIssueToOperator(operator:Operator)
  {
    localStorage.setItem("op1", JSON.stringify(operator));
    this.router.navigateByUrl('getIssues');
    console.log(localStorage);
  }
}