import { Component } from '@angular/core';
import { Department } from '../../model/department';
import { DepartmentService } from '../../services/department.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-department',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-department.component.html',
  styleUrl: './display-department.component.css'
})

export class DisplayDepartmentComponent {
  deapartment:Department[]=[];
  constructor(private departmentService:DepartmentService,private router:Router){
    this.departmentService.getAllDepartment().subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.deapartment = data;
        },
                
        error:(err)=>{console.log(err);},
          
        complete:()=>{console.log("server completed sending data");}
          
      }
      
    )

  }

  deleteDepartmentById(depId ?: number){
    console.log("delete : "+depId);
    if(confirm("Do you want to delete department id : "+depId))
      this.departmentService.deleteAccountById(depId).subscribe(
        {
          next:(response)=>{
            console.log(response);
            this.deapartment = this.deapartment.filter((a)=>a.deptId !=depId)
          },
          error:(err)=>{
            console.log(err);
          }
        }
      )
  }
  updateDepartment(department:Department){
    console.log(department);
    this.router.navigateByUrl("update-department/"+department.deptId);
  }
}