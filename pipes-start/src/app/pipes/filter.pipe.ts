import { isNgTemplate } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { Server } from '../interfaces/server.interface';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {

    if(value.length === 0 || filterString.trim() === ''){
      return value;
    }
    

    const resultArray: any[] = value.filter((item) => { 
      item[propName] === filterString });

    return resultArray;

  }
}
