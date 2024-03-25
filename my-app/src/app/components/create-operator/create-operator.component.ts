import { Component } from '@angular/core';
import { Operator } from '../../model/operator';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OperatorService } from '../../services/operator.service';

@Component({
  selector: 'app-create-operator',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './create-operator.component.html',
  styleUrl: './create-operator.component.css'
})
export class CreateOperatorComponent {
  newOperator:Operator=new Operator();
  constructor(private operatorService:OperatorService){}
  sucessMsg:string="";
  failMsg:string="";
  addOperator()
  {
    console.log(this.newOperator);
    this.operatorService.addOperator(this.newOperator).subscribe(
      {
        next:(data)=>{
          console.log(data);
          alert("Success fully added operator")
          this.sucessMsg="Successfully added the operator...";
          this.failMsg="";
        },
        error:(err)=>{
          console.log(err);
          this.failMsg=err.error;
          this.sucessMsg="";
        }
      }
    ) 
  }
}
