function mostrarPessoa(pessoa) {
    console.log(pessoa);
}
mostrarPessoa({
    nome: 'João',
    apelido: 'Pedro',
    idade: 32
});
function mostrarCarro(carro) {
    console.log(`Marca: ${carro.marca}, Modelo: ${carro.modelo}`);
    if (carro.cor) {
        console.log(`Cor: ${carro.cor}`);
    }
    else {
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
let ponto1 = { x: 121, y: 84 };
const minhaBusca = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
console.log(minhaBusca('hola', 'ola'));
