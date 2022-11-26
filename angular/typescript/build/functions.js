function somar(a, b) {
    return a + b;
}
const adicao = function (a, b) {
    return a + b;
};
const somar2 = function (a, b) {
    return a + b;
};
const adicao2 = function (a, b) {
    return a + b;
};
// Parâmetros opcionais e valores por definição
function nomeTotal(nome, sobreNome) {
    if (sobreNome) {
        return nome + " " + sobreNome;
    }
    else {
        return nome;
    }
}
console.log(nomeTotal('Pedro'));
console.log(nomeTotal('Mario', 'Romero'));
