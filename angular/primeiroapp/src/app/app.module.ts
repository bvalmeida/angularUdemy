import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaudacoesComponent } from './saudacoes/saudacoes.component';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './filho/filho.component';
import { Filho1Component } from './filho1/filho1.component';
import { EventosComponent } from './eventos/eventos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { AlertaComponent } from './alerta/alerta.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SaudacoesComponent,
    PaiComponent,
    FilhoComponent,
    SaudacoesComponent,
    Filho1Component,
    EventosComponent,
    CalculadoraComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
