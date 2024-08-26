import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs';
import { DestroyEventNoticeComponent } from './destroy-event-notice.component';

@Component({
  template: ''
})
export class CurrentLanguageChecker extends DestroyEventNoticeComponent implements OnInit {
  protected translate = inject(TranslateService);
  protected cd = inject(ChangeDetectorRef);

  currentLanguage: string = '';
  languages: string[] = [];

  ngOnInit(): void {
    this.languages = this.translate.getLangs();
    this.currentLanguage = this.translate.currentLang;

    this.translate.onLangChange.pipe(takeUntil(this._onDestroy)).subscribe({
      next: langObj => {
        if (this.currentLanguage !== langObj.lang) {
          this.currentLanguage = langObj.lang;
          this.cd.detectChanges();
        }
      }
    });
  }
}
