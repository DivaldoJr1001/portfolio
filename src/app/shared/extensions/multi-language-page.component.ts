import { AfterViewInit, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Subject, debounceTime, takeUntil } from 'rxjs';
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

  _onDestroy = new Subject<void>();

  constructor() {
  }

  ngAfterViewInit(): void {
    this.currentStrings = this.stringsBR;
    this.lang.getLanguageObservable().pipe(takeUntil(this._onDestroy)).subscribe({
      next: langIndex => {

        switch (langIndex) {
          case Languages.BR:
            this.currentStrings = this.stringsBR;
            break;
          case Languages.US:
            this.currentStrings = this.stringsUS;
            break;
        }

        this.cd.detectChanges();
      }
    });
  }
}
