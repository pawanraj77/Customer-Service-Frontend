import { Component, inject } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees:Employee[] =[];
  message: string = "";
  errorMessage: string = "";
  
  constructor(private employeeService:EmployeeService, private router:Router) {
    this.employeeService.getAllEmployees().subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.employees = data;
        },
        error:(err) =>{
          console.log(err);
          this.errorMessage = err.error;
          this.message="";
        },
        complete:()=>{
          console.log("Server completed sending data.");
        }
      }
    );
  }

  deleteEmployeeById(id?:number){
    console.log("delete id:" + id);

    if(confirm("Do you want to delete employee with cdsId: " + id))
      this.employeeService.deleteEmployeeById(id).subscribe(
        {
          next: (resp) => {
            console.log(resp);
            this.employees = this.employees.filter((c) => c.cdsId != id);
            this.message = "Deleted Employee with id: "+ id;
            this.errorMessage= "";
          },
          error:(err) =>{
            console.log(err);
            this.errorMessage = err.error;
            this.message="";
          },
          complete:()=>{
            console.log("Server completed sending data.");
          }
        }
      )    
  }

  updateEmployee(employee:Employee) {
    console.log(employee);
    this.router.navigateByUrl('update-employee/' + employee.cdsId);
    // inject(Router).navigateByUrl('update-employee/' + employee.cdsId);
  }

}
