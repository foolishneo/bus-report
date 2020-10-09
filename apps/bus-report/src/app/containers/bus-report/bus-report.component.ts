import { Component, Input, OnInit } from '@angular/core';

import { BusService, LocalStorageService } from '@tnsw/core';

@Component({
  selector: 'tnsw-bus-report',
  templateUrl: './bus-report.component.html',
  styleUrls: ['./bus-report.component.scss']
})
export class BusReportComponent implements OnInit {
  
  @Input() data: BusService;
  @Input() org: string;
  notes: string;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void { 
    this.notes = this.localStorageService.load(this.org).notes;    
  }

  saveNotes(org: string) {    
    this.localStorageService.update(org, this.notes);
  }

}
