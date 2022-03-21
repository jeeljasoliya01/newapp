import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gigabyteToMegabyte'
})
export class GigabyteToMegabytePipe implements PipeTransform {

  transform(value: number): number {
    const megabyte = 1024;
    if(!isNaN(value)){
      return value * megabyte;
    }
    return 0;
  }

}
