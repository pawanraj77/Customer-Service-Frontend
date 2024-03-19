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
    return this.httpClient.post('http://localhost:8080/create/operator',newOperator);
  }
  dispalyOperators():Observable<any>{
    return this.httpClient.get('http://localhost:8080/operator/all');
  }
  updateOperator(updateOperator?:Operator):Observable<any>{
    return this.httpClient.post('http://localhost:8080/update/operator',updateOperator);
  }
  getOperatorById(id?:string|null):Observable<any>{
    return this.httpClient.get('http://localhost:8080/getOperator/'+id);
  }
  deleteOperatorById(id?:number):Observable<any>{
    return this.httpClient.delete('http://localhost:8080/deleteOperator/'+id);
  }
  getAllIssues():Observable<any>{
    return this.httpClient.get('http://localhost:8080/issues/all')
  }
  assignIssueToOperator(id1?:string|null,id2?:number):Observable<any>{
    return this.httpClient.put('http://localhost:8080/assign/issue/'+id1+'/'+id2,{});
  }
}
