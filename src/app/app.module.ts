import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FileUploadComponent} from './image-upload/image-upload.component';
import {CsvUploadComponent} from './csv-upload/csv-upload.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {HistogramModule} from './histogram/histogram.module';
import {ImageStore} from './image-upload/image.store';
import {CsvDataStore} from './csv-upload/csv-data.store';


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
    ImageStore,
    CsvDataStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
