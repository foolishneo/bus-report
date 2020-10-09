import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDataTableComponent } from './bus-data-table.component';

describe('BusDataTableComponent', () => {
  let component: BusDataTableComponent;
  let fixture: ComponentFixture<BusDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
