import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements  OnInit {

  @Input()
  texto: string;

  constructor(){
    this.texto = '';
    console.log('****** Estou dentro do constructor');
    console.log(`TEXTO: ${this.texto}`);
  }

  ngOnChanges(changes: SimpleChange){
    console.log('*****Estou no ngOnChanges');
    console.log(`TEXTO: ${this.texto}`);
    console.log(changes);
  }

  ngOnInit():void{
    console.log('*****Estou dentro do NGONINIT');
    console.log(`TEXTO: ${this.texto}`);
  }

  ngAfterViewInit(){
    console.log('****Estou dentro de ngAfterViewInit');
    console.log(`TEXTO: ${this.texto}`);
  }

  ngOnDestroy(){
    
  }

}
