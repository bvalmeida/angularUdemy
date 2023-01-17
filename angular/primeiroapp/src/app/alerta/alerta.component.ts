import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  @Input('texto') mensagem: string;
  @Input() subTitulo: string;

  @Output() alertaApertado: EventEmitter<string>;

  constructor() {
    this.mensagem = 'Mensagem de alerta está com defeito';
    this.subTitulo = 'Valor do subTítulo';
    this.alertaApertado = new EventEmitter();
    //console.log('Vindo do Construtor: ' + this.mensagem);
  }

  ngOnInit(): void {
    //console.log('Vindo do OnInit: ' + this.mensagem);
  }

  onClick(){
    this.alertaApertado.emit('O alerta foi apertado!!');
  }

}
