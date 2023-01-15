import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: string;
  calculoTerminado: boolean;

  constructor() {
    this.resultado = '';
    this.calculoTerminado = false;
  }

  ngOnInit(): void {
  }

  onClick($event){
    //console.log($event.target.innerText);
    if(this.calculoTerminado){
      this.resultado = $event.target.innerText;
      this.calculoTerminado = false;
    }else{
      this.resultado += $event.target.innerText;
      console.log(this.resultado);
    }
  }

  onResultado(){
    this.resultado = eval(this.resultado);
    this.calculoTerminado = true;
  }

  onClickZerar(){
    this.resultado = '';
  }

}
