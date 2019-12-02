import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vat'
})
export class VatPipe implements PipeTransform {

  transform(value: number, postfix = 'VAT'): string {
    return (value * 1.23).toString() + ' ' + postfix;
  }

}
