import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  addEmployee(newEmployee:Employee):Observable<any>{
    return this.httpClient.post('http://localhost:8090/register', newEmployee);
  }
  getAllEmployees():Observable<any> {
    return this.httpClient.get('http://localhost:8090/employees');
  }
  loginEmployee(login:Login):Observable<any> {
    return this.httpClient.post('http://localhost:8090/login', login);
  }
  deleteEmployeeById(id?:number):Observable<any> {
    return this.httpClient.delete('http://localhost:8090/employee/'+ id);
  }
  updateEmployee(employee:Employee): Observable<any> {
    return this.httpClient.put('http://localhost:8090/employee', employee)
  }
  getEmployeeById(id?:string | null): Observable<any> {
    return this.httpClient.get('http://localhost:8090/employee/'+ id);
  }

  changePassword(login:Login): Observable<any> {
    return this.httpClient.put('http://localhost:8090/changePassword', login);
  }
}
