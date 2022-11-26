import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaudacoesComponent } from './saudacoes/saudacoes.component';
<<<<<<< HEAD
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './filho/filho.component';
=======
>>>>>>> 2ac1cfe6e2d48fbbc3e59e8af6552e1deb6aae34

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SaudacoesComponent,
    PaiComponent,
    FilhoComponent
=======
    SaudacoesComponent
>>>>>>> 2ac1cfe6e2d48fbbc3e59e8af6552e1deb6aae34
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
