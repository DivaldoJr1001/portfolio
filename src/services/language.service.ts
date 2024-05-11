import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage$: BehaviorSubject<number> = new BehaviorSubject<number>(Languages.BR);

  constructor() {
  }

  getLanguageObservable(): BehaviorSubject<number> {
    return this.currentLanguage$;
  }

  updateLanguage(newValue: number): void {
    this.currentLanguage$.next(newValue);
  }
}

export enum Languages {
  BR = 0,
  US = 1
}
