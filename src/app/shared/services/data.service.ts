import { Injectable, Inject } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Job } from '../models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://apitaskscheduler.nertilpoci.com/api/';
  constructor(private httpClient: HttpClient) {
    this.apiUrl = this.apiUrl;
  }
  public getJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(`${this.apiUrl}jobs`);
    }

}
