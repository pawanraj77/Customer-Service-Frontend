import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SolutionService } from '../../services/solution.service';
import { Solution } from '../../model/solution';



@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  date: string | undefined;
  solutions:Solution[] = [];
  message:string="";
  errorMessage:string="";
  constructor(private solutionService: SolutionService) {}

  onDateChange() {
  //  console.log(this.date); 
  if (this.date !== undefined && this.date != null){
  this.solutionService.searchSolutionByDate(this.date).subscribe(
    {
      next:(data)=>{
        console.log(data);
        this.solutions = data;
        this.message="Search successful";
        this.errorMessage="";
    
      },
      error:(err)=>{
        console.log(err);
       this.errorMessage=err.error;
       this.message="";

      }
    }
  );
  }
}
}
