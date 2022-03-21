import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squreroot'
})
export class SqurerootPipe implements PipeTransform {

  transform(value: number): number {
    return value * value;
  }

}
