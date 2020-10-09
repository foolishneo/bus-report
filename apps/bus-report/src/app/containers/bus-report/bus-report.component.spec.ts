import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusService, mockData } from '@tnsw/core';

import { BusReportComponent } from './bus-report.component';

describe('BusReportComponent', () => {
  let testHostComponent: TestHostComponent;  
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({     
      declarations: [ BusReportComponent, TestHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  @Component({
    selector: `tnsw-host-component`,
    template: `<tnsw-bus-report [data]="testData"></tnsw-bus-report>`
  })
  class TestHostComponent {
    private testData: BusService = mockData.data[0];
  }
});
