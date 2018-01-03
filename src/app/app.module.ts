import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HistogramComponent} from './histogram/histogram.component';
import {BlockComponent} from './block/block.component';
import {BlockService} from './block.service';
import {DisplayedImageComponent} from './displayed-image/displayed-image.component';
import {FileUploadComponent} from './image-upload/image-upload.component';
import {FileStoreService} from './file-upload.service';
import {CsvUploadComponent} from './csv-upload/csv-upload.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { MapToIterablePipe } from './map-to-iterable.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HistogramComponent,
    BlockComponent,
    DisplayedImageComponent,
    FileUploadComponent,
    CsvUploadComponent,
    MapToIterablePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    BlockService,
    FileStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
