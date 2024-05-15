import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LanguageService, Languages } from 'src/services/language.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  language = '';

  currentLanguage!: LanguageObject;

  languageObjects: LanguageObject[] = [
    {
      text: {
        'PT': 'Português',
        'EN': 'Portuguese'
      },
      code: 'PT',
      index: Languages.PT
    },
    {
      text: {
        'PT': 'Inglês',
        'EN': 'English'
      },
      code: 'EN',
      index: Languages.EN
    }
  ];

  constructor(
    private lang: LanguageService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.currentLanguage = this.languageObjects[Languages.PT];
    this.cd.detectChanges();
  }

  changeLanguage(langObj: LanguageObject): void {
    if (this.currentLanguage.code !== langObj.code) {
      this.currentLanguage = langObj;
      this.lang.updateLanguage(langObj.index);
      this.cd.detectChanges();
    }
  }
}

export interface LanguageObject {
  text: { [key: string]: string },
  code: string,
  index: number
}
