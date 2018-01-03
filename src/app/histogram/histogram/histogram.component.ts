import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {BlockService} from '../block.service';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent implements OnChanges, OnInit {

  @Input() numberBins: number;
  @Input() start: number;
  @Input() end: number;
  @Input() xLabel: string;
  @Input() data;

  bins: Datapoint[][];
  binLength: number;
  selected: number;

  constructor(
    private blockService: BlockService
  ) { }

  ngOnInit() {
    this.blockService.selectedBlock.subscribe(block => {
      this.selected = block.id;
    });
  }

  ngOnChanges () {
    this.setBins();
  }

  setBins() {
    if (this.numberBins > 0) {
      this.bins = [];
      this.binLength = Math.abs(this.end - this.start) / this.numberBins;
      for (let nthBin = 0; nthBin < this.numberBins; nthBin++) {
        const bin = this.data
          .filter(dataPoint => dataPoint.size >= nthBin * this.binLength && dataPoint.size < (nthBin + 1) * this.binLength);
        this.bins.push(bin);
      }
    } else {
      // invalid, do something
    }
  }

  get maxBin(): number {
    console.log('running map reduce...');
    return this.bins.map(bin => bin.length).reduce((a, b) => a > b ? a : b);
  }

  get arrayOfLengthMaxBin(): any[] {
    return Array(this.maxBin);
  }

}
