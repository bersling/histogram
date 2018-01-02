import {Component, OnInit} from '@angular/core';
import {BlockService} from '../block.service';

@Component({
  selector: 'app-displayed-image',
  templateUrl: './displayed-image.component.html',
  styleUrls: ['./displayed-image.component.scss']
})
export class DisplayedImageComponent implements OnInit {

  currentBlock: Datapoint;

  get imageUrl() {
    return `assets/${this.currentBlock.img}`;
  }

  constructor(
    private blockService: BlockService
  ) { }

  ngOnInit() {
    this.blockService.selectedBlock.subscribe(block => {
      this.currentBlock = block;
    });
  }


}
