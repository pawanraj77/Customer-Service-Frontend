import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SolutionService } from '../../services/solution.service';
import { Solution } from '../../model/solution';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-post-solution',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './post-solution.component.html',
  styleUrl: './post-solution.component.css'
})
export class PostSolutionComponent {
  
  issueId?:number;
  description?:string;
  date?:Date;
  message:string="";
  errorMessage:string="";
  constructor(private solutionService:SolutionService,private route: ActivatedRoute,private router:Router) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.issueId = +params['issueId'] || 0;
    });
  }
  submitForm(){
    this.solutionService.addEntry(this.issueId || 0, this.description || "", this.date || new Date()).subscribe({
      next: (data) => {
        console.log(data);
        this.message="Solution Added Successfully.";
        this.errorMessage="";
        setTimeout(()=>{this.router.navigate(['issueBucket'])} ,2000);
      },
      error: (err) => {
        console.log(err);
        this.errorMessage=err.error;
          this.message="";
      }
    });

  }
}
