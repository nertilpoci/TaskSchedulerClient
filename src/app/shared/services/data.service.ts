import { Injectable, Inject } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { Job } from '../models';

@Injectable({
    providedIn: 'root'
})
export class Data {
  private apiUrl = 'https://localhost:5001/api/';
  constructor(private httpClient: HttpClient) {
    this.apiUrl = this.apiUrl;
  }
  public getJobs(): Observable<Job> {
    return this.httpClient.get<Job>(`${this.apiUrl}jobs`);
    }

}
