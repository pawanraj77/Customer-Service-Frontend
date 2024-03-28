import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operator } from '../model/operator';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(private httpClient:HttpClient) { }
  addOperator(newOperator:Operator):Observable<any>{
    return this.httpClient.post('http://localhost:8090/create/operator', newOperator);
  }
  dispalyOperators():Observable<any>{
    return this.httpClient.get('http://localhost:8090/operator/all');
  }
  updateOperator(updateOperator?:Operator):Observable<any>{
    return this.httpClient.post('http://localhost:8090/update/operator',updateOperator);
  }
  getOperatorById(id?:string|null):Observable<any>{
    return this.httpClient.get('http://localhost:8090/getOperator/'+id);
  }
  deleteOperatorById(id?:number):Observable<any>{
    return this.httpClient.delete('http://localhost:8090/operator/'+id);
  }
  getAllIssues():Observable<any>{
    return this.httpClient.get('http://localhost:8090/issues')
  }
  assignIssueToOperator(id1?:string|null,id2?:number):Observable<any>{
    return this.httpClient.put('http://localhost:8090/assign/issue/'+id1+'/'+id2,{});
  }
  loginOperator(loginOperator:Operator):Observable<any>{
    return this.httpClient.post('http://localhost:8090/operator/Login',loginOperator);
  }
  getIssuesAssignToOperator(id?:number):Observable<any>{
    return this.httpClient.get('http://localhost:8090/issueBucket/'+id);
  }
  solvedIssue(id1?:number,id2?:number):Observable<any>{
    return this.httpClient.put('http://localhost:8090/issueSolved/inCart/'+id1+'/'+id2,{});
  }
  getRemainingIssues(id?:number):Observable<any>{
    return this.httpClient.get('http://localhost:8090/remainingIssue/'+id);
  }
  getDepartments():Observable<any>{
    return this.httpClient.get('http://localhost:8090/departments');
  }
  assignOperatorToDepatment(id1?:number,id2?:number):Observable<any>{
    return this.httpClient.put('http://localhost:8090/addOperatorToDept/'+id1+'/'+id2,{});
  }
  getOperatorByDepartment(id?:string|null):Observable<any>
  {
    return this.httpClient.get('http://localhost:8090/getOperatorsById/'+id);
  }
}
