import { Component, OnInit } from '@angular/core';
import {FileStoreService} from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  fileChange(event) {
    const fileList: FileList = event.target.files;
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();
      reader.onload = () => {
        const newFileStore = this.fileStoreService.fileStore.getValue();
        newFileStore[file.name] = {
          file: file,
          dataUrl: reader.result
        };
        this.fileStoreService.fileStore.next(newFileStore) ;
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
