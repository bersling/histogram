import { Component, OnInit } from '@angular/core';
import {CsvDataStore} from './csv-data.store';
import {PapaParseService} from 'ngx-papaparse';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.scss']
})
export class CsvUploadComponent implements OnInit {

  parsedData;

  fileChange(event) {
    const fileList: FileList = event.target.files;
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];

      this.papa.parse(file, {
        complete: (results, resultingFile) => {
          this.store.csvFile = results;
          this.parsedData = results;
        }
      });

    }
  }

  constructor(
    private store: CsvDataStore,
    private papa: PapaParseService
  ) { }

  ngOnInit() {
  }

}
