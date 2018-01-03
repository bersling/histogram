import { Component, OnInit } from '@angular/core';
import {CsvDataStore} from './csv-data.store';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.scss']
})
export class CsvUploadComponent implements OnInit {

  fileChange(event) {
    const fileList: FileList = event.target.files;
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      console.log('file', i, file);

      const reader = new FileReader();
      reader.onload = () => {
        this.store.csvFile = {
          file: file,
          dataUrl: reader.result
        };
        console.log('store', this.store.csvFile);
      };
      reader.readAsDataURL(file);
    }
  }

  constructor(
    private store: CsvDataStore
  ) { }

  ngOnInit() {
  }

}
