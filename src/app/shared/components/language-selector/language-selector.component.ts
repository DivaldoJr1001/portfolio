import { Component } from '@angular/core';
import { CurrentLanguageChecker } from '../../extensions/current-language-checker.component';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent extends CurrentLanguageChecker {
  changeLanguage(lang: string): void {
    if (lang !== this.translate.currentLang) {
      this.translate.use(lang);
      this.currentLanguage = lang;
    }
  }
}
