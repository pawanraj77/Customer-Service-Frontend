import { Component } from '@angular/core';
import { SolutionService } from '../../services/solution.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-update-solution',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './update-solution.component.html',
  styleUrl: './update-solution.component.css'
})
export class UpdateSolutionComponent {

  issueId?:number;
  description?:string;
  date?:Date;
  message:string=""
  errorMessage:string="";
  
  constructor(private solutionService:SolutionService,private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
        this.issueId = +params['issueId'] || 0;
        this.description = params['description'] || '';
    });
}

  updateEntry(): void {
    if (!this.issueId || !this.description || !this.date) {
      console.error('Invalid parameters for updateEntry');
      return;
    }
    this.solutionService.updateEntry(this.issueId, this.description, this.date)
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.message="Solution Updated.";
            this.errorMessage="";
          },
          error: (err) => {
            console.log(err);
            this.errorMessage=err.error;
            this.message="";
          }
        }
      );
  }
}
