interface Pessoa{
    nome: string;
    apelido: string;
    idade: number;
}

function mostrarPessoa(pessoa: Pessoa){
    console.log(pessoa);
}

mostrarPessoa({
    nome: 'João',
    apelido: 'Pedro',
    idade: 32
});

// No cmd - tsc - node build/interfaces.js

// Com propriedades opcionais

interface Carro{
    marca: string;
    modelo: string;
    cor?: string; // Uso do ?:
}

function mostrarCarro(carro: Carro){

    console.log(`Marca: ${carro.marca}, Modelo: ${carro.modelo}`);
    if(carro.cor){
        console.log(`Cor: ${carro.cor}`);
    }else {
        console.log(`Este Carro da Marca: ${carro.marca}, não possui cor declarada`);
    }

}

mostrarCarro({
    marca: 'Fiat',
    modelo: 'Pálio'
});

// É aceito como também

mostrarCarro({
    marca: 'Hyundai',
    modelo: 'HB20',
    cor: 'Azul',
});

// Propriedas de somente leitura

interface Pontos{
    readonly x: number;
    readonly y: number;
}

let ponto1: Pontos = { x: 121, y: 84 };
// p1.x = 45; -> não é permitido nenhuma modificação, somente leitura

// Definindo uma function dentro de uma interface

interface BuscarData{
    (valor: string, buscar: string): boolean;
}

const minhaBusca: BuscarData = (v: string, b:string): boolean => {
    const result = v.search(b);
    return result > -1;
}

console.log(minhaBusca('hola', 'ola'));

interface Humano{
    nome: string;
    idade: number;
}

class Adulto implements Humano{
    nome: string;
    idade: number;
    cor: boolean;

    constructor(aNome: string, aIdade: number, aCor: boolean){
        this.nome = aNome;
        this.idade = aIdade;
        this.cor = aCor;
    }
}

class Crianca implements Humano{
    nome: string;
    idade: number;
}