import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input() inicio: number;
  contador: number;

  @Output() terminarCronometro: EventEmitter<string>;

  constructor() {
    this.contador = 10;
    this.inicio = 10;
    this.terminarCronometro = new EventEmitter();
  }

  ngOnInit() {
    this.contador = this.inicio ? this.inicio : 10;
  }

  onClick() {
    let intervalo = setInterval(() => {
      this.contador--;
      if (this.contador == 0) {
        clearInterval(intervalo);
        this.contador = this.inicio;
        this.terminarCronometro.emit('Finalizado o cronômetro com o número' + this.inicio);
      }
    }, 1000);
  }

}
