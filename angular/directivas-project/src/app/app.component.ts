import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  propriedadesParagrafos: any;

  constructor(){
    this.propriedadesParagrafos = {
      color: 'red',
      fontSize: '24px'
    }
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

}
