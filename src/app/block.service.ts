import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class BlockService {

  selectedBlock: Subject<Datapoint> = new Subject();

  setNextSelectedBlock(block: Datapoint) {
    this.selectedBlock.next(block);
  }

  constructor() { }


}
