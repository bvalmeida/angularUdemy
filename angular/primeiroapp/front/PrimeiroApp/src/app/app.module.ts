import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaudacoesComponent } from './saudacoes/saudacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    SaudacoesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
