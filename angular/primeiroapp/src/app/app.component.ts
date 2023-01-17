import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulos: string[];

  campoTexto: string;

  pessoa: any;

  constructor(){
    this.titulos = ['Jurassic Park', 'Star Wars', 'Jumanji'];
    
    this.campoTexto = 'Valor Inicial';

    this.pessoa = {};
  }

  title = 'PrimeiroApp';

  onAlertaApertado($event){
    console.log($event);
  }

  onClick(){
    this.campoTexto = 'Valor desde botão';
  }
}
