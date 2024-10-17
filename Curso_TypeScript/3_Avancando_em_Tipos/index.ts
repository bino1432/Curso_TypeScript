// 1 - Arrays
let numbers:number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

let strings:String[] = ["Bernardo", "Zapelini"]

console.log(strings[0])

// 2 - Outra sintaxe Array

let numeros: Array<number> = [100, 200]

numeros.push(300)

console.log(numeros[2])

//3 - Any

const qualquerCoisa:any = [1, "Bernardo", true]

console.log(qualquerCoisa)

// 4 - parametros tipados

function soma(a: number, b: number){
    console.log(a + b)
}

soma(4, 5)

// 5 - retorno de funcao
function greeting(nome: string): string{
    return "olá: " + nome
}

console.log(greeting("Bernardo"))

// 6 - funcao anonima
setTimeout(function() {

    const sallary = 2000

    // console.log(sallary)

}, 2000)

// 7 - tipos de objetos

function passCordinates(coord: {x: number, y: number}){
    console.log("O X é: " + coord.x)
    console.log("O Y é: " + coord.y)
}

const objCoord = {
    x: 124,
    y: 43.2
}

passCordinates(objCoord)

const pessoaObj: {nome: string, sobrenome: string} = {nome: "Bernardo", sobrenome: "Zapelini"}

// 8 - props opcinais

function showNumbers(a: number, b: number, c?: number){
    console.log("A: " + a)
    console.log("A: " + b)
    if(c){
        console.log("A: " + c)
    }
}

showNumbers(1, 2, 3)
showNumbers(4, 5)

// 9 - validando argumento opcional

function advancedGreeting(firstname: string, lastName?: string){
    if(lastName !== undefined){
        return console.log("Olá, " + firstname, lastName + " tudo bem?")
    }

    return console.log("Olá, " + firstname + " tudo bem?")

}

console.log(advancedGreeting("bernardo", "zapelini"))
console.log(advancedGreeting("bernardo"))

// 10 - union type

function showBalance(balance: string | number){
    console.log("O saldo da conta é R$" + balance)
}

showBalance(100)
showBalance("500")

const arr2: Array<number | string | boolean> = [1, "teste", true]

// 11 - avancanod em union types

function showUserRole(role: boolean | string){
    if (typeof role === "boolean"){
        return "Usuario não aprovado"
    }

    return "A função do usuario é: " + role
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// 12 - type alias

type ID = string | number

function showId(id: ID){
    console.log("O ID é: " + id)
}

showId(1)
showId("200")
showId(123)

// 13 - interface

interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point){
    console.log("X: " + obj.x + " Y: " + obj.y + " Z: " + obj.z)
}

const coordObj: Point = {
    x: 10,
    y: 23,
    z: 42
}

showCoords(coordObj)

// 14 - Interface x Type Alias

interface Person {
    name: string;
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Bernardo", age: 17}

console.log(somePerson)

type personType = {
    name: string
}

// No alias não pode duplicado
// type personType = {
//     age: number
// }

// 15 - Literal Type

let test: "testando"

test = "testando"
// test = "nao funciona"

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
    console.log("A direção é: " + direction)
}

showDirection("left")
// showDirection("top")

// 16 non null assertion operators

const p = document.getElementById("some-pi")

console.log(p!.innerText)

// 17 - BigInt

let n: bigint

// n = 1

n = 1000n

console.log(n)
console.log(typeof n)
console.log(n + 100n)

// 18 - Symbol

let symbolA: symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)