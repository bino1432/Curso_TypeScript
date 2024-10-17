// Tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvaliable: boolean
}

function showProductDatails(product: Product){
    console.log(`o nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if (product.isAvaliable){
        console.log("O produto está disponivel")
    }
}

const shirt:Product = {
    name: "Camisa",
    price: 19.99,
    isAvaliable: true
}

showProductDatails(shirt)
showProductDatails({name:"Tenis", price: 20.00, isAvaliable: false})

// 2 - propriedade opcional em interface
interface User {
    email: string
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O usuario tem como emial ${user.email}`)
    if(user.role){
        console.log(`A fução do usuário é ${user.role}`)
    }
}

const u1:User = {email: "Bernardo@gmail.com", role: "Admin"}
const u2:User = {email: "Joao@gmail.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - ReadOnly

interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)
// fusca.wheels = 5

// 4 - Index Signature

interface CoordObject {
    [index: string]: number
}

let coords:CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)
// coords.z = "teste"