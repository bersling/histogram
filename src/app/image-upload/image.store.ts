import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export interface IImageStore {
  [fileName: string]: {
    file: File;
    dataUrl?: string;
  };
}

@Injectable()
export class ImageStore {

  imageStore: BehaviorSubject<IImageStore> = new BehaviorSubject<IImageStore>({});
  constructor() { }

  get isEmpty(): boolean {
    return Object.keys(this.imageStore.getValue()).length === 0;
  }

}
