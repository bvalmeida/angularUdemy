import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  mensagem:string;

  constructor() { 
    this.mensagem = 'Mensagem Inicial';
  }

  ngOnInit(): void {
  }

  onClick($event){
    alert('Botão apertado!!!');
    console.log('Botão apertado!');
    console.log($event)
  }

  onChange($event){
    console.log($event.target.value);
  }

  onMouseEnter(){
    console.log('o mouse entrou');
    this.mensagem = 'Segunda mensagem, o mouse entrou no quadrado';
  }

  onMouseOut(){
    console.log('O mouse saiu do quadrado');
    this.mensagem = 'Terceira mensagem, o mouse saiu do quadrado';
  }
}
