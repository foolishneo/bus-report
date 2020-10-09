import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '@tnsw/core';
import { MaterialUiModule } from '@tnsw/material-ui';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BusReportComponent } from './containers/bus-report/bus-report.component';
import { BusDataTableComponent } from './components/bus-data-table/bus-data-table.component';

@NgModule({
  declarations: [AppComponent, BusReportComponent, BusDataTableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,    
    CoreModule,
    MaterialUiModule
  ],
  providers: [
    {provide: 'ENVIRONMENT', useValue: environment }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
