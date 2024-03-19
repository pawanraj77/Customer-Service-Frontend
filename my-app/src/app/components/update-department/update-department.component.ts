import { Component, OnInit } from '@angular/core';
import { Department } from '../../model/department';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-department',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-department.component.html',
  styleUrl: './update-department.component.css'
})
export class UpdateAccountComponent implements OnInit{
  id ?: string | null ="";

  department:Department = new Department();
  message:string="";
  errorMessage:string="";

  constructor(private activateedRoute:ActivatedRoute,private departmentService: DepartmentService ){
    this.id = this.activateedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.departmentService.getDepartmentById(this.id).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.department=data;
        },
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }
  updateDepartment(){
    console.log(this.department);
    this.departmentService.updateDepartment(this.department).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.message="Department Updated";
        },
        error:(err)=>{
          console.log(err); 
        }
      }
    )
  }
}

