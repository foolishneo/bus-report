import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService, BusServiceData } from '@tnsw/core';

@Component({
  selector: 'tnsw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    
  busData$: Observable<BusServiceData>;

  constructor(private apiService: ApiService) { 
    this.busData$ = this.apiService.getBusData$();    
  }
}
