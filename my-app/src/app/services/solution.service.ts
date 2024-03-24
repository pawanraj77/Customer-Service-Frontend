import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
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
  
  addEntry(issueId: number, description: string, date: any): Observable<any> {
    const url = `http://localhost:8090/add/${issueId}`;
  
    // Convert the date parameter to a Date object
    const parsedDate = new Date(date);
  
    // Check if the parsedDate is a valid Date object
    if (isNaN(parsedDate.getTime())) {
      console.error('Invalid date format');
      return throwError('Invalid date format');
    }
  
    const body = {
      description: description,
      date: parsedDate.toISOString()
    };
  
    return this.httpClient.post(url, body);
  }
  
  
  
  
  updateEntry(issueId: number, description: string, date: any): Observable<any> {
    const url = `http://localhost:8090/update/${issueId}`;
  
    // Convert the date parameter to a Date object
    const parsedDate = new Date(date);
  
    // Check if the parsedDate is a valid Date object
    if (isNaN(parsedDate.getTime())) {
      console.error('Invalid date format');
      return throwError('Invalid date format');
    }
  
    const body = {
      description: description,
      date: parsedDate.toISOString()
    };
  
    return this.httpClient.put(url, body);
  }
  
  
  
  
  
 
}
