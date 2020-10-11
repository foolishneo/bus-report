import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { Component, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

// import { BusService, CoreModule, mockData } from '@tnsw/core';
// import { MaterialUiModule } from '@tnsw/material-ui';

// import { BusReportComponent } from './bus-report.component';

// describe('BusReportComponent', () => {
//   let testHostComponent: TestHostComponent;  
//   let fixture: ComponentFixture<TestHostComponent>;
//   const mockStorage = {
//     get: () => [],
//     set: () => null,
//     has: () => true,
//     remove: () => null,
//     clear: () => null,
//     withDefaultTranscoder: () => null
//   } as StorageService;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({     
//       imports: [ BrowserAnimationsModule, CoreModule, MaterialUiModule ],      
//       declarations: [ BusReportComponent, TestHostComponent ],      
//       providers: [        
//         { provide: LOCAL_STORAGE, useValue: mockStorage }
//       ],
//       schemas: [ NO_ERRORS_SCHEMA ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TestHostComponent);
//     testHostComponent = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(testHostComponent).toBeTruthy();
//   });

//   // it('should save notes', () => {
//   //   testHostComponent.saveNotes()
//   // });
  
//   @Component({
//     selector: `tnsw-host-component`,
//     template: `<tnsw-bus-report [org]="org" [data]="testData"></tnsw-bus-report>`
//   })
//   class TestHostComponent {
//     private testData: BusService = mockData.data[0];
//     private org = 'test';

//     @ViewChild(BusReportComponent)
//     public busReportComponent: BusReportComponent;
//   }
// });
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule, LocalStorageService, mockData } from '@tnsw/core';
import { MaterialUiModule } from '@tnsw/material-ui';

import { BusReportComponent } from './bus-report.component';

describe('BusReportComponent', () => {
  let component: BusReportComponent;
  let fixture: ComponentFixture<BusReportComponent>;
  let localStorageService: LocalStorageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule, CoreModule, MaterialUiModule ],
      declarations: [ BusReportComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusReportComponent);    
    component = fixture.componentInstance;
    component.org = 'Mock Buses';
    component.data = mockData.data[0];
    localStorageService = TestBed.inject(LocalStorageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.notes).toBe('');
  });

  it('should save notes', () => {
    component.notes = 'test value';
    component.saveNotes('testOrg');        
    expect(localStorageService.load('testOrg')).toEqual({"id": "testOrg", "notes": "test value"});
  });
});


