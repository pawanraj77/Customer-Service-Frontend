import { Component } from '@angular/core';
import { Department } from '../../model/department';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SortDepartmentPipe } from '../../pipes/sort-department.pipe';

@Component({
  selector: 'app-sort-department',
  standalone: true,
  imports: [FormsModule,CommonModule,SortDepartmentPipe],
  templateUrl: './sort-department.component.html',
  styleUrl: './sort-department.component.css'
})
export class SortDepartmentComponent {
  query : string="";
  department:Department[] = [];

  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllDepartment();
  }

  getAllDepartment() {
    this.http.get<Department[]>('http://localhost:8090/departments')
      .subscribe(data => {
        this.department = data;
      });
  }

}
