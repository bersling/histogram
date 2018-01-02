import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BlockService} from '../block.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockComponent {

  @Input() block: Datapoint;
  @Input() selected: boolean;

  constructor(
    private blockService: BlockService
  ) { }

  selectBlock() {
    this.blockService.setNextSelectedBlock(this.block);
  }

}
