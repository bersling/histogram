import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export interface FileStore {
  [fileName: string]: {
    file: File;
    dataUrl?: string;
  };
}

@Injectable()
export class FileStoreService {

  fileStore: BehaviorSubject<FileStore> = new BehaviorSubject<FileStore>({});

  constructor() { }

  // TODO: function is called too often, optimize...
  counter = 0;
  get isEmpty(): boolean {
    console.log(this.counter++, 'isEmpty');
    return Object.keys(this.fileStore.getValue()).length === 0;
  }

}
