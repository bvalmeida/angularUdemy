import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  propriedadesParagrafos: any;

  mostrar: boolean;

  constructor(){
    this.propriedadesParagrafos = {
      color: 'red',
      fontSize: '24px'
    }

    this.mostrar = false;
  }

  ngOnInit(): void {

  }

  onClickMostrar(){
    this.mostrar = !this.mostrar;
  }

  mudarCor(pColor: string){
    switch(pColor){
      case 'a':
        this.propriedadesParagrafos.color = 'yellow';
        break;
      case 'r':
        this.propriedadesParagrafos.color = 'red';
        break;
      case 'v':
        this.propriedadesParagrafos.color = 'green';
        break;
    }
  }

  onChangeRange($event:any){
    this.propriedadesParagrafos.fontSize = `${$event.target.value}px`;
  }

}
