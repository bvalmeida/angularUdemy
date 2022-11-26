function somar(a,b){
    return a + b;
}

const adicao: (a: number, b: number) => number = function(a: number, b: number): number{
    return a + b;
}

const somar2 = function (a: number, b: number): number{
    return a + b;
}

const adicao2: (a: number, b: number) => number = function(a, b){
    return a + b;
}

// Parâmetros opcionais e valores por definição

function nomeTotal(nome: string, sobreNome?: string): string{
    if(sobreNome){
        return nome + " " + sobreNome;
    } else {
        return nome;
    }
}

console.log(nomeTotal('Pedro'));
console.log(nomeTotal('Mario', 'Romero'));

// Parámetros REST

function nomeTotal2(nome: string, ...outrosNomes: string[]): string{
    return nome + " " + outrosNomes.join(' ');
}

console.log(nomeTotal2('Ana', 'Joaquina', 'Barbosa', 'Santos'));