import {Component, OnInit} from '@angular/core';
import {BlockService} from '../block.service';
import {ImageStore} from '../../image-upload/image.store';

@Component({
  selector: 'app-displayed-image',
  templateUrl: './displayed-image.component.html',
  styleUrls: ['./displayed-image.component.scss']
})
export class DisplayedImageComponent implements OnInit {

  currentBlock: Datapoint;

  get imageUrl() {
    const fileStoreElement = this.imageStore.imageStore.getValue()[this.currentBlock.img];
    return fileStoreElement ? fileStoreElement.dataUrl : '/assets/faq.png';
  }

  constructor(
    private blockService: BlockService,
    private imageStore: ImageStore
  ) { }

  ngOnInit() {
    this.blockService.selectedBlock.subscribe(block => {
      this.currentBlock = block;
    });
  }

}
