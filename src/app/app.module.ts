import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HistogramComponent } from './histogram/histogram.component';
import { BlockComponent } from './block/block.component';
import {BlockService} from './block.service';
import { DisplayedImageComponent } from './displayed-image/displayed-image.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {FileStoreService} from './file-upload.service';


@NgModule({
  declarations: [
    AppComponent,
    HistogramComponent,
    BlockComponent,
    DisplayedImageComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    BlockService,
    FileStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
