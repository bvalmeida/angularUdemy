import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  cadeiasClasses: string;

  constructor(){
    this.cadeiasClasses = 'roxo';
  }

  ngOnInit(): void{

  }





}
