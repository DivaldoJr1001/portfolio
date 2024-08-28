import { HttpBackend, provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { LanguageService } from 'src/services/language.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageSelectorModule } from './shared/components/language-selector/language-selector.module';
import { LoadingSpinnerModule } from './shared/components/loading-spinner/loading-spinner.module';
import { NavButtonModule } from './shared/components/nav-button/nav-button.module';

export function HttpLoaderFactory(_httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(_httpBackend, [
    '/assets/i18n/',
    '/assets/i18n/pages/main-page/',
    '/assets/i18n/pages/career-history/',
    '/assets/i18n/pages/academic-history/',
    '/assets/i18n/pages/complementary-education/',
  ]);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavButtonModule,
    LanguageSelectorModule,
    LoadingSpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend]
      },
      defaultLanguage: 'pt-BR'
    })
  ],
  providers: [LanguageService, provideAnimationsAsync(), provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
