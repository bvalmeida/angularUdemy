import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  @Input('texto') mensagem: string;
  @Input() subTitulo: string;

  constructor() {
    this.mensagem = 'Mensagem de alerta está com defeito';
    this.subTitulo = 'Valor do subTítulo';
    //console.log('Vindo do Construtor: ' + this.mensagem);
  }

  ngOnInit(): void {
    //console.log('Vindo do OnInit: ' + this.mensagem);
  }

}
