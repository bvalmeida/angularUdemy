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