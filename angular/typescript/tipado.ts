// Boolean
let eValido: boolean = true;
eValido = false;

// Number
let idade: number = 12;

// String
let nome: string = "Breno";
let apelido: string = "Vieira";

let nomeCompleto: string = `${nome} ${apelido}`;

// Array
let numeros: number[] = [12, 3, 4, 5, 6, 7];
let numeros2: Array<number> = [3, 4, 5, 6, 7];

// Dupla
let sitio: [string, number] = ['Casa', 1243];

// Enum de forma automática
enum Estado {
    Offline,
    Indefinido,
    Online
}

// Ou desta outra forma
enum Estado2 {
    Offline = 1,
    Indefinido = 0,
    Online = -1
}

let stat: Estado = Estado.Online;
let stat2: Estado2 = Estado2.Online;

console.log(stat2);
console.log(stat);

// Variáveis do tipo desconhecido

let semTipo: unknown = 'Oi';
semTipo = 32;
semTipo = true;

// Atribuições

let novaCadeia: string = 'Isto é uma cadeia';

// novaCadeia = semTipo; Não pode atribuir uma variável do tipo desconhecido a uma já tipada

// Com o tipo any é possível realizar essa atribuição

let tipoIndefinido: any = 'Isto é uma mensagem';
novaCadeia = tipoIndefinido;

// Tipo void

function logger(): void{
    console.log('Logger');
}