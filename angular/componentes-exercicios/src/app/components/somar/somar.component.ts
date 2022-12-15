import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-somar',
  templateUrl: './somar.component.html',
  styleUrls: ['./somar.component.css']
})
export class SomarComponent implements OnInit {

  num1: number;
  num2: number;

  @ViewChild('number1')
  number1: ElementRef | undefined;

  @ViewChild('number2')
  number2: ElementRef | undefined;
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
    
    // console.log(this.number1?.nativeElement?.value, this.number2?.nativeElement?.value);
    // this.resultado = this.number1?.nativeElement?.value as number + this.number2?.nativeElement?.value as number; 
    // let primeiro = this.number1?.nativeElement?.value as number;
    // let segundo = this.number2?.nativeElement?.value as number;
    // let test = primeiro + segundo;
    // console.log(test);
  }

}
