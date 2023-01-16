import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-somar',
  templateUrl: './somar.component.html',
  styleUrls: ['./somar.component.css']
})
export class SomarComponent implements OnInit {

  @Input() num1: number;
  @Input() num2: number;

  resultado: number;

  constructor(){
    this.num1 = 15;
    this.num2 = 20;
    this.resultado = 0;
  }

  ngOnInit(){

  }

  calcular(){
    this.resultado = this.num1 + this.num2;
  }

}
