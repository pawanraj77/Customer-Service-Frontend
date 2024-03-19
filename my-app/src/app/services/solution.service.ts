import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solution } from '../model/solution';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  private apiUrl = 'http://localhost:8090'
  constructor(private httpClient:HttpClient) { }
  getAllSolutions() :Observable<any>{
    return this.httpClient.get('http://localhost:8090/solutions');
  }
  searchSolutionByDate(date: string):Observable<any> {
    return this.httpClient.get('http://localhost:8090/search/'+date);
  }
  addEntry(issueId: number, description: string, date: Date): Observable<any> {
   // 'http://localhost:8090/add/1?description=Restart%20your%20Computer%21&date=2024-03-19'
    const url = `http://localhost:8090/add/${issueId}?description=${encodeURIComponent(description)}&date=${date}`;
    return this.httpClient.post(url, null); // Adjust the method if needed based on your backend
  }
  updateEntry(issueId: number, description: string, date: Date): Observable<any> {
    const url = `http://localhost:8090/update/${issueId}?description=${encodeURIComponent(description)}&date=${date}`;
    return this.httpClient.put(url, null); // Adjust the method if needed based on your backend
  }
 
}
