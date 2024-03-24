import { Component } from '@angular/core';
import { Issue } from '../../model/issue';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-view-issues',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-issues.component.html',
  styleUrl: './view-issues.component.css'
})
export class ViewIssuesComponent {
  issues:Issue[] = [];
  message?:string = "";
  errorMessage?:string = "";
  employee:Employee = new Employee();

  constructor(private employeeService:EmployeeService) {
    this.employeeService.viewIssuesByEmployee(JSON.parse(localStorage.getItem("user")||'').cdsId)
    .subscribe({
      next:(data) => {
        console.log(data);
        this.issues=data;
        this.message  = "Successfully retrieved issues.";
        this.errorMessage = "";
      },
      error:(err) => {
        this.errorMessage = err.error;
      }
    })
  }

}
