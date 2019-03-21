import { NgModule } from '@angular/core';

import {
  MatGridListModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule
  ],
  exports: [
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule
  ]
})
export class MaterialModule {}
