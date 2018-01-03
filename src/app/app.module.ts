import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FileUploadComponent} from './image-upload/image-upload.component';
import {FileStoreService} from './file-upload.service';
import {CsvUploadComponent} from './csv-upload/csv-upload.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {HistogramModule} from './histogram/histogram.module';


@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    CsvUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HistogramModule
  ],
  providers: [
    FileStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
