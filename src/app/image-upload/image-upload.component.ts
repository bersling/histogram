import { Component, OnInit } from '@angular/core';
import {ImageStore} from './image.store';

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
        const newFileStore = this.imageStore.imageStore.getValue();
        newFileStore[file.name] = {
          file: file,
          dataUrl: reader.result
        };
        this.imageStore.imageStore.next(newFileStore) ;
      };
      reader.readAsDataURL(file);
    }
  }

  constructor(
    private imageStore: ImageStore
  ) { }

  ngOnInit() {
  }

}
