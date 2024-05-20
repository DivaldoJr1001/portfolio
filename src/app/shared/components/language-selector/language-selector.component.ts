import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from 'src/services/language.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  constructor(
    protected translate: TranslateService,
    protected cd: ChangeDetectorRef
  ) {}

  currentLanguage!: LanguageObject;

  languageObjects: LanguageObject[] = [
    {
      code: 'pt-BR',
      index: Languages.PT
    },
    {
      code: 'en-US',
      index: Languages.EN
    }
  ];

  ngOnInit(): void {
    this.currentLanguage = this.languageObjects[Languages.PT];
    this.cd.detectChanges();
  }

  changeLanguage(langObj: LanguageObject): void {
    if (langObj.code !== this.translate.currentLang) {
      this.translate.use(langObj.code);
      this.currentLanguage = langObj;
    }
  }
}

export interface LanguageObject {
  code: string,
  index: number
}
