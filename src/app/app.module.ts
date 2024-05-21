import {HttpClientModule, HttpBackend} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { LanguageService } from 'src/services/language.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CareerHistoryComponent } from './pages/career-history/career-history.component';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { AcademicHistoryComponent } from './pages/academic-history/academic-history.component';

export function HttpLoaderFactory(_httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(_httpBackend, [
    '/assets/i18n/',
    '/assets/i18n/pages/main-page/',
    '/assets/i18n/pages/career-history/',
    '/assets/i18n/pages/academic-history/'
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CareerHistoryComponent,
    AcademicHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedComponentsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend]
      },
      defaultLanguage: 'pt-BR'
    })
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
