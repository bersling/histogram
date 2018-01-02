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

  get isEmpty(): boolean {
    return Object.keys(this.fileStore.getValue()).length === 0;
  }

}
