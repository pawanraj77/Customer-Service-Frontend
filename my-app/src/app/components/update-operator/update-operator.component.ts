import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Operator } from '../../model/operator';
import { ActivatedRoute, Router } from '@angular/router';
import { OperatorService } from '../../services/operator.service';

@Component({
  selector: 'app-update-operator',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-operator.component.html',
  styleUrl: './update-operator.component.css'
})
export class UpdateOperatorComponent {
  id: string| null="";
  updateOperator?:Operator=new Operator();
  message:string="";
  errorMessage:string="";

  constructor(private activatedRoute:ActivatedRoute,private operatorService:OperatorService,private router:Router) {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }
ngOnInit():void
  {
    this.operatorService.getOperatorById(this.id).subscribe({
      next:(data)=>{
        console.log(data);
        this.updateOperator=data;
      },
      error:(err)=>{
        console.log(err);
        this.errorMessage = err.error;
        this.updateOperator=undefined;
      }
    })
  }
    UpdateOperator(){
      console.log(this.updateOperator);
      this.operatorService.updateOperator(this.updateOperator).subscribe({
        next:(data)=> {
          console.log(data);
          this.message="Account updated";
      },
      error:(err)=>{
        console.log(err);
        if(err.name=="HttpErrprResponse")
          this.errorMessage="Network error,please try again later" ;
        else
          this.message=err.error
      }
    }
      )
      this.router.navigateByUrl('display');
    }
  

}
