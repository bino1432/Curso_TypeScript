// 1 - type Guard

function sum(a: string | number, b: string | number) {

    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    } if(typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log("Impossivel fazer a operação")
    }

}

sum("5", "4")
sum(5, 4.5)
sum("5", 4)

// 2 - checando se valor existe

function operations(arr: number[], operation?: string | undefined) {

    if (operation){

        if (operation === "sum"){
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if (operation === "multiply"){
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }

    } else {
        console.log("Insira uma operação")
    }

}

console.log([1, 2, 3])
console.log([1, 2, 3], "sum")
console.log([1, 2, 3], "multiply")

// 3 - Instance Of

class User {
    name;
    
    constructor (name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const jhon_jonh = new User("Jhon")
const paul = new SuperUser("Paul")

console.log("jhon")
console.log("Paul")

function userGreeting(user: object) {
    if (user instanceof SuperUser){
        console.log("Olá " + user.name + " desejamos ver os dados do sistema")
    } else if (user instanceof User){
        console.log("Olá " + user.name)
    }
}

userGreeting(jhon_jonh)
userGreeting(paul)

// 4 - Operador In

class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
        this.name = name 
        if (breed) {
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pastor Alemão")

function showDogDetails(dog: Dog) {

    if("breed" in dog){
        console.log("O cachorro é da raça: " + dog.breed)
    } else {
        console.log("O cachorro é um SRD")
    }

}

showDogDetails(turca)
showDogDetails(bob)