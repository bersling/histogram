import {Component, Input, OnInit} from '@angular/core';
import {BlockService} from '../block.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  @Input() block: Datapoint;

  selected: boolean;

  constructor(
    private blockService: BlockService
  ) { }

  ngOnInit() {
    this.blockService.selectedBlock.subscribe(block => {
      this.selected = this.block && this.block.id === block.id;
    });
  }

  selectBlock() {
    this.blockService.setNextSelectedBlock(this.block);
  }

}
