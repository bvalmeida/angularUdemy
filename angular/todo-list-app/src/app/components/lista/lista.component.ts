import { Component, Input } from '@angular/core';
import { CTarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  @Input()
  tarefas: CTarefa[];

  constructor(){
    this.tarefas = [];
  }

  ngOnInit():void{}

  mostrarTarefas(){
    let resultado = '<ul>';

    for(let tarefa of this.tarefas){
      resultado += `<li>${tarefa.titulo} --- ${tarefa.descricao}</li>`;
    }

    resultado += '</ul>';
    return resultado;
  }

}
