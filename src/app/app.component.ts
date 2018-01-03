import {Component} from '@angular/core';
import {ImageStore} from './image-upload/image.store';
import {CsvDataStore} from './csv-upload/csv-data.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: Datapoint[];

  numberBins: number = 2;
  start: number = 0;
  end: number = 2;
  xLabel: string = 'nm';

  fileStoreArray: string[];

  constructor(
    public imageStore: ImageStore,
    private csvStore: CsvDataStore
  ) {
    this.csvStore.csvFile.subscribe((newValue) => {
      this.data = newValue.data.map((elem, idx) => {
        return {
          size: parseInt(elem[0], 10),
          img: elem[1],
          id: idx
        };
      });
    });
    this.imageStore.imageStore.subscribe(newFileStore => {
      this.fileStoreArray = Object.keys(newFileStore);
    });
  }

}
