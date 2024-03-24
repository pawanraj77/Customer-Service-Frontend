import { Component } from '@angular/core';
import { Operator } from '../../model/operator';
import { OperatorService } from '../../services/operator.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-departmet-oparators',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './display-departmet-oparators.component.html',
  styleUrl: './display-departmet-oparators.component.css'
})
export class DisplayDepartmetOparatorsComponent {
  operators1:Operator[]=[];
  id: string| null="";
  message?:string="";
  errorMessage?:string="";
  constructor(private operatorService:OperatorService,private activatedRoute:ActivatedRoute)
  {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.operatorService.getOperatorByDepartment(this.id).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.operators1 = data;
          this.message="sucess in fetching the data";
          this.errorMessage="";
        },error:(err)=>{
          console.log(err);
          this.errorMessage=err.error;
          this.message="";
        }
      }
    )
  }

}
