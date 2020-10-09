import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'arrivalStatus'})
export class ArrivalStatusPipe implements PipeTransform {
  transform(value: number): string {
    return value == null ? "Unknow" : value < 0 ? 'Late' : value > 0 ? "Early" : "On time";
  }
}
