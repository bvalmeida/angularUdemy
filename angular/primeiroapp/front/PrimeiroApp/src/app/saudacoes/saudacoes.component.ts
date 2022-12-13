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

  mensagem: string;

  constructor() { 
    this.mensagem = 'Uma saudação a todos!';

    setTimeout(() => {
      this.mensagem = 'Outra saudação para ninguem!';
    }, 5000);
  }

  ngOnInit(): void {
  }

  bemvindo: string = 'Olá Mundo!';

  mostrarSaudacao(): string{
    return 'Saudações do Método';
  }
}
