import { Component } from '@angular/core';
import { CTarefa } from './models/tarefa.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-app';

  arrayTarefas: CTarefa[];

  constructor(){
    this.arrayTarefas = [];
  }

  onTarefaCriada($event: any){
    this.arrayTarefas.push($event);
    console.log(this.arrayTarefas);
  }

}
