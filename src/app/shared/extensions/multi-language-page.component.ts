import { AfterViewInit, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { BehaviorSubject, Subject, debounceTime, takeUntil } from 'rxjs';
import { LanguageService, Languages } from 'src/services/language.service';

@Component({
  template: ''
})
export class MultiLanguagePageComponent implements AfterViewInit {
  protected cd = inject(ChangeDetectorRef);
  protected lang = inject(LanguageService);

  stringsBR: Record<string, string> = {};

  stringsUS: Record<string, string> = {};

  currentStrings: Record<string, string> = {};
  currentLanguageIndex = 0;

  loaded$ = new BehaviorSubject<boolean>(false);

  _onDestroy = new Subject<void>();

  constructor() {
  }

  ngAfterViewInit(): void {
    this.currentStrings =this.stringsBR;
    this.currentLanguageIndex = Languages.PT;
    this.lang.getLanguageObservable().pipe(takeUntil(this._onDestroy)).subscribe({
      next: langIndex => {
        switch (langIndex) {
          case Languages.PT:
            this.currentStrings = this.stringsBR;
            this.currentLanguageIndex = Languages.PT;
            break;
          case Languages.EN:
            this.currentStrings = this.stringsUS;
            this.currentLanguageIndex = Languages.EN;
            break;
        }

        this.cd.detectChanges();
      }
    });
    this.loaded$.next(true);
    this.cd.detectChanges();
  }
}
