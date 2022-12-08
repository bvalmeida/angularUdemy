import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saudacoes',
  // template: `<h1>Olá Mundo</h1>
  // <h2>Sub título</h2>`,
  templateUrl: './saudacoes.component.html',
  styleUrls: ['./saudacoes.component.css']
  // styles: [`.olaMundo{
  //   background-color: green;
  // }`]
})
export class SaudacoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bemvindo: string = 'Olá Mundo!';
}
