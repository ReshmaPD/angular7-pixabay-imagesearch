import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';


import { ImageService } from './shared/image.service';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '././material.module';
// import {MatCardModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
// import { MasonryModule } from 'angular2-masonry';


@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    // MasonryModule,
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})

// @NgModule({
//   imports: [MatCardModule, MatButtonModule, MatCheckboxModule],
//   exports: [MatCardModule, MatButtonModule, MatCheckboxModule],
// })



export class AppModule { }
