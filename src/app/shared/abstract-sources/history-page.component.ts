import { Component } from '@angular/core';
import { CurrentLanguageChecker } from '../extensions/current-language-checker.component';

@Component({
  template: ''
})
export abstract class HistoryPageComponent extends CurrentLanguageChecker {
  openLink(link: string): void {
    if (link) {
      window.open(link, "_blank");
    }
  }

  onKeydown(event: KeyboardEvent, url: string): void {
    if ((event.key === 'Enter' || event.key === ' ') && url) {
      this.openLink(url);
    }
  }
}
