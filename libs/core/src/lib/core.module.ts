import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrivalStatusPipe } from './pipes/arrival-status/arrival-status.pipe';
import { LocalStorageService } from './services';

@NgModule({
  imports: [CommonModule],
  declarations: [ArrivalStatusPipe],
  providers: [LocalStorageService],
  exports: [ArrivalStatusPipe]
})
export class CoreModule {}
