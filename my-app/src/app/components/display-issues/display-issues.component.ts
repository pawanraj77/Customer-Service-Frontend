import { Component } from '@angular/core';
import { Issue } from '../../model/issue';
import { IssueService } from '../../services/issue.service';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-display-issues',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-issues.component.html',
  styleUrl: './display-issues.component.css'
})
export class DisplayIssuesComponent {
  issues:Issue[]=[];
  message?:string="";
  errorMessage?:string="";
  constructor(private issueService:IssueService, private employeeService:EmployeeService) {
    this.issueService.getAllIssues().subscribe({
        next:(data)=>{
          console.log(data);
          this.issues=data;
          this.message="success in fetching the Issues data";
        },error:(err)=>{
            this.errorMessage=err.error;
        }
    })
  }
  // employeeId: number = JSON.parse(localStorage.getItem("user") || '').cdsId;

  // raiseIssue(issueId?:number) {
    // console.log(localStorage);
    // console.log(JSON.parse(localStorage.getItem("user") || '').cdsId);
    // console.log(issueId);
    // this.employeeService.raiseIssueByEmployee(JSON.parse(localStorage.getItem("user") || '').cdsId, issueId)
    // .subscribe({
    //   next:(data)=>{
    //     console.log(data);
    //     console.log("Issue raised for employee with cdsId: ", this.employeeId);
    //     this.message="Employee raised issue successfully";
    //     this.errorMessage="";
    //   },error:(err)=>{
    //     this.errorMessage=err.error;
    //   }
    // });
  // }


}
