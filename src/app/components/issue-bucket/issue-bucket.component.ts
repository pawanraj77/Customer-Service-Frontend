import { Component } from '@angular/core';
import { IssueBucket } from '../../model/issue-bucket';
import { OperatorService } from '../../services/operator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-issue-bucket',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './issue-bucket.component.html',
  styleUrl: './issue-bucket.component.css'
})
export class IssueBucketComponent {
    issues:IssueBucket[]=[];
    message?:string="";
    errorMessage?:string="";
    constructor(private operatorService:OperatorService)
    {
        this.operatorService.getIssuesAssignToOperator(JSON.parse(localStorage.getItem('user')||'').operatorId).subscribe({
          next:(data)=>{
            console.log(data);
            this.issues=data;
            this.message="Sucess in fetching the data";
            this.errorMessage="";
          },error:(err)=>{
            console.log(err);
            this.errorMessage=err;
            this.message="";
          }
        })
    }
    solvedIssue(issueId?:number)
    {
        console.log(issueId);
        alert("Are you sure to close the isssue")
        this.operatorService.solvedIssue(JSON.parse(localStorage.getItem("user")||'').operatorId,issueId).subscribe({
          next:(data)=>{
            console.log(data);
            console.log("closed Issue");
            this.issues=this.issues.filter((a)=>a.id!=issueId)
            this.message="Solved Issue";
            this.errorMessage="";
          },error:(err)=>{
            this.errorMessage=err.error;
            this.message="";
          }
        })
    }
}
