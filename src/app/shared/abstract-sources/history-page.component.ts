import { Component, inject } from '@angular/core';
import { CurrentLanguageChecker } from '../extensions/current-language-checker.component';
import { MatDialog } from '@angular/material/dialog';
import { ImageViewerDialogComponent } from '../components/image-viewer-dialog/image-viewer-dialog.component';

@Component({
  template: ''
})
export abstract class HistoryPage extends CurrentLanguageChecker {

  protected matDialog!: MatDialog;

  openImage(url: string): void {
    if (this.matDialog) {
      this.matDialog.open(ImageViewerDialogComponent, {
        autoFocus: false,
        data: url
      });
    }
  }

  openLink(link: string): void {
    if (link) {
      window.open(link, "_blank");
    }
  }
}
