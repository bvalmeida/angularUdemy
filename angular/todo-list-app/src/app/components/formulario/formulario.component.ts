import { Component, EventEmitter, Output } from '@angular/core';
import { CTarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output()
  tarefaCriada: EventEmitter<CTarefa>;

  novaTarefa: CTarefa;

  constructor(){
    this.novaTarefa = new CTarefa();
    this.tarefaCriada = new EventEmitter();
  }

  ngOnInit(): void {

  }

  onClick(){
    this.tarefaCriada.emit(this.novaTarefa);
    this.novaTarefa = new CTarefa();
  }

}
