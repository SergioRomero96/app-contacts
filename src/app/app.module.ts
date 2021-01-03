import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
