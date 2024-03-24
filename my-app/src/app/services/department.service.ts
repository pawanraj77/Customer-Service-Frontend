import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient:HttpClient) { }

  //Get all the department
  getAllDepartment():Observable<any>{
    return this.httpClient.get('http://localhost:8090/departments');
  }

  //delete the department
  deleteAccountById(depId?:number):Observable<any>{
    return this.httpClient.delete('http://localhost:8090/department/'+depId);
  }

  //add the Department
  addNewDepartment(newDepartment:Department):Observable<any>{
    return this.httpClient.post('http://localhost:8090/add/department',newDepartment);
  }

  //update the department
  updateDepartment(newDepartment:Department):Observable<any>{
    return this.httpClient.put('http://localhost:8090/department',newDepartment);
  }

  //get department by id 
  getDepartmentById(depId?:string | null) : Observable<any>{
    return this.httpClient.get('http://localhost:8090/department/'+depId);
  }
}

