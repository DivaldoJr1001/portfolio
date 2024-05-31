import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-viewer-dialog',
  templateUrl: './image-viewer-dialog.component.html',
  styleUrls: ['./image-viewer-dialog.component.scss']
})
export class ImageViewerDialogComponent implements OnInit {

  @ViewChild('image', { static: true }) image!: ElementRef;

  loading = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) protected imageURL: string,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    setTimeout((_: any) => {
      if (this.image.nativeElement.complete) {
        this.loaded();
      } else {
        this.image.nativeElement.addEventListener('load', this.loaded);
      }
    }, 500);

  }

  loaded() {
    this.loading = false;
    this.cd.detectChanges();
  }
}
