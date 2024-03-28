import { Component } from '@angular/core';
import { Issue } from '../../model/issue';
import { OperatorService } from '../../services/operator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-get-issues',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './get-issues.component.html',
  styleUrl: './get-issues.component.css'
})
export class GetIssuesComponent {
  issues:Issue[]=[];
  message?:string="";
  errorMessage?:string="";
  constructor(private operatorService:OperatorService,private router:Router)
  {
    this.operatorService.getAllIssues().subscribe({
      next:(data)=>{
        console.log(data);
        this.issues=data;
        this.message="sucess in fetching the Issues data";
      },error:(err)=>{
          this.errorMessage=err.error;
      }
    })
  }
  assignIssue(issueId?:number)
  {
    console.log(issueId);
    this.operatorService.assignIssueToOperator(JSON.parse(localStorage.getItem("op1")||'').operatorId,issueId).subscribe({
      next:(data)=>{
        console.log(data);
        console.log("Asiign issue success...")
        this.message="Assigned Isssue";
        this.errorMessage="";
      },error:(err)=>{
        this.errorMessage=err.error;
      }
    })
  }
  assignedIssue()
  {
    confirm("Are you sure you want to assign issue");
    localStorage.clear();
    this.router.navigateByUrl('display');
  }
}
