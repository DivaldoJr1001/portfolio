import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerDialogComponent } from './image-viewer-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [
    ImageViewerDialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    LoadingSpinnerModule
  ]
})
export class ImageViewerDialogModule { }
