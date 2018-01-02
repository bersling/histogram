import {Component, OnInit} from '@angular/core';
import {BlockService} from '../block.service';
import {FileStoreService} from '../file-upload.service';

@Component({
  selector: 'app-displayed-image',
  templateUrl: './displayed-image.component.html',
  styleUrls: ['./displayed-image.component.scss']
})
export class DisplayedImageComponent implements OnInit {

  currentBlock: Datapoint;

  get imageUrl() {
    const fileStoreElement = this.fileStoreService.fileStore.getValue()[this.currentBlock.img];
    return fileStoreElement ? fileStoreElement.dataUrl : '/assets/faq.png';
  }

  constructor(
    private blockService: BlockService,
    private fileStoreService: FileStoreService
  ) { }

  ngOnInit() {
    this.blockService.selectedBlock.subscribe(block => {
      this.currentBlock = block;
    });
  }

}
