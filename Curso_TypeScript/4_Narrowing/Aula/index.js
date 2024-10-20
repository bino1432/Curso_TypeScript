// 1 - type Guard
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossivel fazer a operação");
    }
}
sum("5", "4");
sum(5, 4.5);
sum("5", 4);
// 2 - checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            var sum_1 = arr.reduce(function (i, total) { return i + total; });
            console.log(sum_1);
        }
        else if (operation === "multiply") {
            var multiply = arr.reduce(function (i, total) { return i * total; });
            console.log(multiply);
        }
    }
    else {
        console.log("Insira uma operação");
    }
}
console.log([1, 2, 3]);
console.log([1, 2, 3], "sum");
console.log([1, 2, 3], "multiply");
// 3 - Instance Of
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var jhon_jonh = new User("Jhon");
var paul = new SuperUser("Paul");
console.log("jhon");
console.log("Paul");
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log("Olá " + user.name + " desejamos ver os dados do sistema");
    }
    else if (user instanceof User) {
        console.log("Olá " + user.name);
    }
}
userGreeting(jhon_jonh);
userGreeting(paul);
// 4 - Operador In
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var turca = new Dog("Turca");
var bob = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log("O cachorro é da raça: " + dog.breed);
    }
    else {
        console.log("O cachorro é um SRD");
    }
}
showDogDetails(turca);
showDogDetails(bob);
