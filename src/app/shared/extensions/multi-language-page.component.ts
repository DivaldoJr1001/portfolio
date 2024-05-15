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

  loaded$ = new BehaviorSubject<boolean>(false);

  _onDestroy = new Subject<void>();

  constructor() {
  }

  ngAfterViewInit(): void {
    this.currentStrings = this.stringsBR;
    this.lang.getLanguageObservable().pipe(takeUntil(this._onDestroy)).subscribe({
      next: langIndex => {

        switch (langIndex) {
          case Languages.PT:
            this.currentStrings = this.stringsBR;
            break;
          case Languages.EN:
            this.currentStrings = this.stringsUS;
            break;
        }

        this.cd.detectChanges();
      }
    });
    this.loaded$.next(true);
    this.cd.detectChanges();
  }
}
