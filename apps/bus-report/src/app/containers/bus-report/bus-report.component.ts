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
    const storageNotes = this.localStorageService.load(this.org);
    if (storageNotes !== undefined) {
      this.notes = storageNotes.notes;
    } else {
      this.notes = '';
    }    
  }

  saveNotes(org: string) {    
    this.localStorageService.update(org, this.notes);
  }

}
