import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from '@tnsw/core';
import { MaterialUiModule } from '@tnsw/material-ui';

import { BusDataTableComponent } from './bus-data-table.component';

describe('BusDataTableComponent', () => {
  let component: BusDataTableComponent;
  let fixture: ComponentFixture<BusDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CoreModule, MaterialUiModule ],
      declarations: [ BusDataTableComponent ]      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
