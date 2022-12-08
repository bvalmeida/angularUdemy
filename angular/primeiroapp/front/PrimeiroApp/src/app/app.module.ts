import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaudacoesComponent } from './saudacoes/saudacoes.component';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './filho/filho.component';
import { Filho1Component } from './filho1/filho1.component';

@NgModule({
  declarations: [
    AppComponent,
    SaudacoesComponent,
    PaiComponent,
    FilhoComponent,
    SaudacoesComponent,
    Filho1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
