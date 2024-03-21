import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Issue } from '../../model/issue';
import { IssueService } from '../../services/issue.service';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-raise-issue',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './raise-issue.component.html',
  styleUrl: './raise-issue.component.css'
})
export class RaiseIssueComponent {
  message:string = "";
  errorMessage:string = "";
  issue :Issue = new Issue();
  issues:Issue[] = [];
  employee:Employee = new Employee();

  constructor(private employeeService:EmployeeService) {}

  raiseIssue(description?:string) {
    console.log(localStorage);
    this.employeeService.raiseIssueByEmployee(JSON.parse(localStorage.getItem("user")||'{}').cdsId, description)
    .subscribe({
      next: (data) => {
        console.log(data);
        this.employee = data;
        console.log("Issue raised by employee successfully");
        this.message = "Your issue has been raised.";
        this.errorMessage = "";
      },
      error: (err) => {
        this.errorMessage = err.error;
      }
    })

  }

}
