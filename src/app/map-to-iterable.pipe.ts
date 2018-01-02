import { Pipe, PipeTransform } from '@angular/core';

interface KeyValuePair<T> {
  key: string;
  val: T;
}

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform {

  transform<T>(dict: {[property: string]: T}): KeyValuePair<T>[] {
    const a: KeyValuePair<T>[] = [];
    for (const key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push({key: key, val: dict[key]});
      }
    }
    return a;
  }

}
