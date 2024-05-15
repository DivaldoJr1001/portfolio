import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage$: BehaviorSubject<number> = new BehaviorSubject<number>(Languages.PT);

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
  PT = 0,
  EN = 1
}
