import { Injectable } from '@angular/core';

export interface FileStore {
  [fileName: string]: {
    file: File;
    dataUrl?: string;
  };
}

@Injectable()
export class FileStoreService {

  fileStore: FileStore = {};

  constructor() { }

}
