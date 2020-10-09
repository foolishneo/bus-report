import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { BusData } from '@tnsw/core';

@Component({
  selector: 'tnsw-bus-data-table',
  templateUrl: './bus-data-table.component.html',
  styleUrls: ['./bus-data-table.component.scss']
})
export class BusDataTableComponent implements OnInit {

  @Input() data: BusData[];
  
  dataSource: MatTableDataSource<BusData> = new MatTableDataSource([]);
  displayedColumns: string[] = ['busId', 'routeVariant', 'deviationFromTimetable'];  
  
  constructor() { }

  ngOnInit(): void {    
    this.dataSource.data = this.data;       
  }
    
}
