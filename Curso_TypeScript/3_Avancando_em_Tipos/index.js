// 1 - Arrays
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
var strings = ["Bernardo", "Zapelini"];
console.log(strings[0]);
// 2 - Outra sintaxe Array
var numeros = [100, 200];
numeros.push(300);
console.log(numeros[2]);
//3 - Any
var qualquerCoisa = [1, "Bernardo", true];
console.log(qualquerCoisa);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// 5 - retorno de funcao
function greeting(nome) {
    return "olá: " + nome;
}
console.log(greeting("Bernardo"));
// 6 - funcao anonima
setTimeout(function () {
    var sallary = 2000;
    // console.log(sallary)
}, 2000);
// 7 - tipos de objetos
function passCordinates(coord) {
    console.log("O X é: " + coord.x);
    console.log("O Y é: " + coord.y);
}
var objCoord = {
    x: 124,
    y: 43.2
};
passCordinates(objCoord);
var pessoaObj = { nome: "Bernardo", sobrenome: "Zapelini" };
// 8 - props opcinais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("A: " + b);
    if (c) {
        console.log("A: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 9 - validando argumento opcional
function advancedGreeting(firstname, lastName) {
    if (lastName !== undefined) {
        return console.log("Olá, " + firstname, lastName + " tudo bem?");
    }
    return console.log("Olá, " + firstname + " tudo bem?");
}
console.log(advancedGreeting("bernardo", "zapelini"));
console.log(advancedGreeting("bernardo"));
// 10 - union type
function showBalance(balance) {
    console.log("O saldo da conta é R$" + balance);
}
showBalance(100);
showBalance("500");
var arr2 = [1, "teste", true];
// 11 - avancanod em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado";
    }
    return "A função do usuario é: " + role;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log("O ID é: " + id);
}
showId(1);
showId("200");
showId(123);
function showCoords(obj) {
    console.log("X: " + obj.x + " Y: " + obj.y + " Z: " + obj.z);
}
var coordObj = {
    x: 10,
    y: 23,
    z: 42
};
showCoords(coordObj);
var somePerson = { name: "Bernardo", age: 17 };
console.log(somePerson);
// No alias não pode duplicado
// type personType = {
//     age: number
// }
// 15 - Literal Type
var test;
test = "testando";
// test = "nao funciona"
console.log(test);
function showDirection(direction) {
    console.log("A direção é: " + direction);
}
showDirection("left");
// showDirection("top")
// 16 non null assertion operators
var p = document.getElementById("some-pi");
console.log(p.innerText);
// 17 - BigInt
var n;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// 18 - Symbol
var symbolA = Symbol("a");
var symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
