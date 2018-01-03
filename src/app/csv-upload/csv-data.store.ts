import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

interface ParsedFile {
  data: string[];
  errors: any[];
  meta?: any;
}

@Injectable()
export class CsvDataStore {

  csvFile: BehaviorSubject<ParsedFile> = new BehaviorSubject({
    data: [],
    errors: []
  });

  constructor() { }

}
