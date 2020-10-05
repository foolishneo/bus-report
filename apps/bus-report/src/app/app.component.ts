import { Component } from '@angular/core';
import { ApiService } from '@tnsw/core';

@Component({
  selector: 'tnsw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private apiService: ApiService
  ) { 
    this.apiService.getBusData().subscribe(data => console.log(data));
  }
}
