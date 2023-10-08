import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converttoCelcius'
})
export class ConverttoCelciusPipe implements PipeTransform {

  transform(value: number): number {
    value = value-273.15;
    return value;
  }

}
