import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageService } from 'src/services/language.service';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedComponentsModule
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
