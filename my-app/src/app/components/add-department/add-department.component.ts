import { Component } from '@angular/core';
import { Department } from '../../model/department';
import { DepartmentService } from '../../services/department.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {


  newDepartment:Department= new Department();
  message:string="";
  errorMessage:string="";

constructor(private departmentService:DepartmentService){}

  addDepartment(){
    console.log(this.newDepartment);
    this.departmentService.addNewDepartment(this.newDepartment)
    .subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.message="Department Added.";
          this.errorMessage="";
        },
        error:(err)=>{
          
          console.log(err);

          if(err.status == "0")
          this.errorMessage="Network error, please try again later";
          else
          this.errorMessage = err.error.message;

          if(err.status == "400")
          this.errorMessage = err.error;

          this.message="";
        }
      }
    );
  }

}
