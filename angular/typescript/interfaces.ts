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