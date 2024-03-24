import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private httpClient:HttpClient) { }
  getAllIssues() :Observable<any>{
    return this.httpClient.get('http://localhost:8090/issues');
  }
}
