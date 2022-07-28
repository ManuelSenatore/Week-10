import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipa'
})
export class PipaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    // return value.split("").slice(0, value.length - 30).join("");
    return value.substring(0, 14) + "..."

    }

  }


