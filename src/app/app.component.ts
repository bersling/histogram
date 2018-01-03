import {Component} from '@angular/core';
import {ImageStore} from './image-upload/image.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data = [
    {id: 0, size: 0.1, img: 'party.png'},
    {id: 1, size: 0.4, img: 'cells.png'},
    {id: 2, size: 1.3, img: '016-neuron.png'}
  ];

  numberBins: number = 2;
  start: number = 2;
  end: number = 0;

  _displayHistogram: boolean;

  get displayHistogram () {
    return this._displayHistogram;
  }
  set displayHistogram(val) {
    this._displayHistogram = val;
  }

  fileStoreArray: string[];

  constructor(
    public imageStore: ImageStore
  ) {
    this.imageStore.imageStore.subscribe(newFileStore => {
      this.fileStoreArray = Object.keys(newFileStore);
    });
  }

}
