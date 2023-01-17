import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentes-exercicios';

  numeros: number[];

  constructor() {
    this.numeros = [1, 43, 8, 27];
  }

  onTerminaCronometro($event: any){
    console.log($event);
  }
}
