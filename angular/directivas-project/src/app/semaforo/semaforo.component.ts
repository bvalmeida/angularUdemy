import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  arrayClasses: string[];

  cadeiasClasses: string;

  corSelecionado: string;

  constructor(){
    this.cadeiasClasses = 'semaforo roxo';

    this.arrayClasses = ['semaforo', 'roxo', 'redondo'];

    this.corSelecionado = 'v';
  }

  ngOnInit(): void{
    setInterval(() =>{
      if(this.corSelecionado === 'r'){
        this.corSelecionado = 'a';
      }else if(this.corSelecionado === 'a'){
        this.corSelecionado = 'v';
      }else if(this.corSelecionado === 'v'){
        this.corSelecionado = 'r'
      }
    }, 1000);
  }





}
