import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'components';

  mainTexto: string;

  constructor(){
    this.mainTexto = 'Este é meu texto do pai';
  }

  ngOnInit():void{
    let count = 0;
    setInterval(() => {
     this.mainTexto = `Texto ${count++}`;
    }, 2000);
  }
}
