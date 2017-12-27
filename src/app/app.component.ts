import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data = [
    {size: 0.1, img: 'bla.png'},
    {size: 0.4, img: 'bla.png'},
    {size: 1.3, img: 'bla.png'}
  ];

  numberBins: number;
  start: number;
  end: number;
  bins;

  setBins() {
    this.bins = [];
    const binLength = (this.end - this.start) / this.numberBins;
    for (let nthBin = 0; nthBin < this.numberBins; nthBin++) {
      const bin = this.data
        .filter(dataPoint => dataPoint.size >= nthBin * binLength && dataPoint.size < (nthBin + 1) * binLength);
      this.bins.push(bin);
    }
  }

}
