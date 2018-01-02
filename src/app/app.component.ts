import {Component} from '@angular/core';
import {FileStore, FileStoreService} from './file-upload.service';


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

  counter = 0;
  get displayHistogram () {
    console.log(this.counter++, 'display histogram');
    return this._displayHistogram;
  }
  set displayHistogram(val) {
    this._displayHistogram = val;
  }

  fileStoreArray: string[];

  constructor(
    public fileStoreService: FileStoreService
  ) {
    this.fileStoreService.fileStore.subscribe(newFileStore => {
      this.fileStoreArray = Object.keys(newFileStore);
    });
  }

}
