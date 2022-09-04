// Boolean
let eValido = true;
eValido = false;
// Number
let idade = 12;
// String
let nome = "Breno";
let apelido = "Vieira";
let nomeCompleto = `${nome} ${apelido}`;
// Array
let numeros = [12, 3, 4, 5, 6, 7];
let numeros2 = [3, 4, 5, 6, 7];
// Dupla
let sitio = ['Casa', 1243];
// Enum de forma automática
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = 0] = "Offline";
    Estado[Estado["Indefinido"] = 1] = "Indefinido";
    Estado[Estado["Online"] = 2] = "Online";
})(Estado || (Estado = {}));
// Ou desta outra forma
var Estado2;
(function (Estado2) {
    Estado2[Estado2["Offline"] = 1] = "Offline";
    Estado2[Estado2["Indefinido"] = 0] = "Indefinido";
    Estado2[Estado2["Online"] = -1] = "Online";
})(Estado2 || (Estado2 = {}));
let stat = Estado.Online;
let stat2 = Estado2.Online;
console.log(stat2);
console.log(stat);
