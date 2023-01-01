import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor() { }

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

}
