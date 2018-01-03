import {Component} from '@angular/core';
import {ImageStore} from './image-upload/image.store';
import {CsvDataStore} from './csv-upload/csv-data.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data;

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
    public imageStore: ImageStore,
    private csvStore: CsvDataStore
  ) {
    this.csvStore.csvFile.subscribe((newValue) => {
      this.data = newValue.data;
    });
    this.imageStore.imageStore.subscribe(newFileStore => {
      this.fileStoreArray = Object.keys(newFileStore);
    });
  }

}
