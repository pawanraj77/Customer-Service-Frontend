import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Solution } from '../../model/solution';
import { SolutionService } from '../../services/solution.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-solution',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './solution.component.html',
  // styleUrl: './solution.component.css'
})
export class SolutionComponent {
  solutions:Solution[] = [];


  constructor(private solutionService:SolutionService,private router:Router){
   this.solutionService.getAllSolutions().subscribe(
     {
      next:(data)=>{
        console.log(data);
       this.solutions = data;
      
      },
      error:(err)=>{console.log(err);},
      complete:()=>{console.log("Server completed sending the data")
    }
     }
   )
    }
  
}
