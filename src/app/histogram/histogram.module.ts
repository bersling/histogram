import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BlockComponent} from './block/block.component';
import {BlockService} from './block.service';
import {DisplayedImageComponent} from './displayed-image/displayed-image.component';
import {HistogramComponent} from './histogram/histogram.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HistogramComponent,
    DisplayedImageComponent
  ],
  declarations: [
    BlockComponent,
    DisplayedImageComponent,
    HistogramComponent
  ],
  providers: [
    BlockService
  ]
})
export class HistogramModule { }
