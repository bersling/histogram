import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent implements OnChanges {

  @Input() numberBins: number;
  @Input() start: number;
  @Input() end: number;
  @Input() data;

  bins;
  binLength: number;

  constructor() { }

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

}
