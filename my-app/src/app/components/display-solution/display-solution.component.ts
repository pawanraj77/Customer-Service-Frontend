import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {Router, RouterLinkActive } from '@angular/router';
import { Solution } from '../../model/solution';
import { SolutionService } from '../../services/solution.service';
import { Issue } from '../../model/issue';
import { IssueService } from '../../services/issue.service';




@Component({
  selector: 'app-display-solution',
  standalone: true,
  imports: [CommonModule, RouterLinkActive],
  templateUrl: './display-solution.component.html',
  styleUrl: './display-solution.component.css'
})
export class DisplaySolutionComponent {
  issues:Issue[] = [];
  constructor(private issueService:IssueService,private router:Router){
    this.issueService.getAllIssues().subscribe(
      {
       next:(data)=>{
         console.log(data);
        this.issues = data;
       
       },
       error:(err)=>{console.log(err);},
       complete:()=>{console.log("Server completed sending data")
     }
      }
    )
     }
     redirectToPostSolution(issueId: number | undefined) {
      this.router.navigate(['/post-solution',issueId]);
  }
  redirectToUpdateSolution(issueId: number | undefined, description: string  | undefined){
     this.router.navigate(['/update-solution',{ issueId, description}]);
  }
}
