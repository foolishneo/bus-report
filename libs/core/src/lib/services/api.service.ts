import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BusServiceData, Environment } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiConfig = this.environment.apiConfig;

  constructor(
    private readonly http: HttpClient, 
    @Inject('ENVIRONMENT') private environment: Environment
  ) { }

  getBusData$(): Observable<BusServiceData> {
    return this.http.get<BusServiceData>(this.apiConfig.baseUrl + this.apiConfig.busServicesData);
  }
}
