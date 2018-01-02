import { Component, OnInit } from '@angular/core';
import {FileStoreService} from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  fileChange(event) {
    const fileList: FileList = event.target.files;
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();
      reader.onload = () => {
        this.fileStoreService.fileStore[file.name] = {
          file: file,
          dataUrl: reader.result
        };
      };
      reader.readAsDataURL(file);
    }
  }

  constructor(
    private fileStoreService: FileStoreService
  ) { }

  ngOnInit() {
  }

}
