// 1 - Void

function withoutReturn(): void {
    console.log("Essa função não tem retorno")
}

withoutReturn();

// 2 - callback como argumento

function greeting(name: string): string {
    return("Olá: " + name)
}

function preGreeting(f: (name: string) => string, userName: string){

    console.log("Preparando a Funçao")
    
    const greet = f(userName)
    console.log(greet)
} 

preGreeting(greeting, "Bernardo")
preGreeting(greeting, "Zapelini")

// 3 - generic function

function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))
// console.log(firstElement(["teste"])

function mergeObj<T, U>(Obj1: T, Obj2: U){
    return {
        ...Obj1,
        ...Obj2
    }
}

const newObject = mergeObj({name: "Bernardo"}, {age: 30, job: "Programmer"})

console.log(newObject)

// 4 - constraints

function biggestNumber<T extends number | string>(a: T, b: T): T{
    let biggest: T

    if(+a > +b){
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(4, 1))
console.log(biggestNumber("4", "1"))

// 5 - especificar tipo de argumento

function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2, 3,], [4, 5]))
console.log(mergeArrays<number | string>([1, 2, 3,], ["teste", "testando"]))

// 6 - parametros opcionais

function modernGreeting(name: string, greet?: string) {
    
    if(greet) { 
        return "Olá " + greet + name + ", tudo bem?"
    } else {
        return "Olá" + name + ", tudo bem?"
    }

}

console.log(modernGreeting("Bernardo"))
console.log(modernGreeting("Bernardo", "D."))

// 7 parametro default

function somaDefault(n: number, m = 10){
    return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(10, 12))

// 8 - unknown

function doSomething(x: unknown) {
    
    if(Array.isArray(x)) {
        console.log(x[0])
    } else if(typeof x === "number") {
        console.log("X é um numero")
    }

}

doSomething(1)
doSomething([1, 2, 3])

// 9 - never

function showErrorMessege(msg: string): never{
    throw new Error(msg)
}

// showErrorMessege("Algum erro!")

// 10 - Rest Operator

function sumAll(...n: number[]){
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 23, 4, 5))

// 11 - destructuring como parametro

function showProductDetails({name, price}: {name: string, price: number}): string{
    return "O nome do produto é: " + name + " e ele custa R$" + price
}

const shirt = {name: "Camisa", price: 49.90}

console.log(showProductDetails(shirt))