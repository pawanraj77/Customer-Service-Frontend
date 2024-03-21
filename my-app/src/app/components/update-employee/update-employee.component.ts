import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  id: string | null = "";
  employee:Employee = new Employee();
  message:string = "";
  errorMessage:string = "";

  constructor(private activatedRoute:ActivatedRoute, private employeeService:EmployeeService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('cdsId');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.employeeService.getEmployeeById(this.id).subscribe(
      {
        next:(data) => {
          console.log(data);
          this.employee = data;
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err.message;
        }
      }
    )
  }

  updateEmployee() {
    console.log(this.employee);
    this.employeeService.updateEmployee(this.employee).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.message = "Employee Account Updated";
        },
        error: (err) => {
          console.log(err);
          if(err.name == "HttpErrorResponse")
            this.errorMessage = "Network error, Please try again later";
          else
            this.errorMessage = err.error;
        }
      }
    )
  }


  

}
