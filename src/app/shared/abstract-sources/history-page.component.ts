import { Component } from '@angular/core';
import { CurrentLanguageChecker } from '../extensions/current-language-checker.component';

@Component({
  template: ''
})
export abstract class HistoryPage extends CurrentLanguageChecker {
  openLink(link: string): void {
    if (link) {
      window.open(link, "_blank");
    }
  }
}
