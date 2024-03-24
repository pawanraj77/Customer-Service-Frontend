import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Department } from '../../model/department';
import { SearchDepartmentPipe } from '../../pipes/search-department.pipe';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-department',
  standalone: true,
  imports: [FormsModule,CommonModule,SearchDepartmentPipe],
  templateUrl: './search-department.component.html',
  styleUrl: './search-department.component.css'
})
export class SearchDepartmentComponent implements OnInit{
  
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
