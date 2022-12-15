import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SomarComponent } from './components/somar/somar.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    SomarComponent,
    CronometroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
