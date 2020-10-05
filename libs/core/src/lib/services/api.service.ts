import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiConfig = this.environment.apiConfig;

  constructor(
    private readonly http: HttpClient, 
    @Inject('ENVIRONMENT') private environment: Environment
  ) { }

  getBusData(): Observable<any> {
    return this.http.get(this.apiConfig.baseUrl + 'bus-services-data.json');
  }
}
