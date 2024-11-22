import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param: string): string {
    if (!value || value <= 0) return 'Invalid number';

    if (param === 'Prime') {
      if (value < 2) return 'It is not Prime';
      for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) return 'It is not Prime';
      }
      return 'It is Prime number';
    }

    if (param === 'Perfect') {
      let sum = 1;
      for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) {
          sum += i;
          if (i !== value / i) {
            sum += value / i;
          }
        }
      }
      return sum === value && value !== 1 ? 'It is a Perfect number' : 'It is not Perfect';
    }

    if (param === 'Even') {
      return value % 2 === 0 ? 'It is Even' : 'It is not Even';
    }

    if (param === 'Odd') {
      return value % 2 !== 0 ? 'It is Odd' : 'It is not Odd';
    }

    return 'Invalid parameter';
  }

  
}
