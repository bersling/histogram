import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data = [
    {id: 0, size: 0.1, img: 'bla.png'},
    {id: 1, size: 0.4, img: 'bla.png'},
    {id: 2, size: 1.3, img: 'bla.png'}
  ];

  numberBins: number = 2;
  start: number = 2;
  end: number = 0;


}
