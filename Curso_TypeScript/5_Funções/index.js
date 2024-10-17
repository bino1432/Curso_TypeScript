// 1 - Void
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function withoutReturn() {
    console.log("Essa função não tem retorno");
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return ("Olá: " + name);
}
function preGreeting(f, userName) {
    console.log("Preparando a Funçao");
    var greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Bernardo");
preGreeting(greeting, "Zapelini");
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
// console.log(firstElement(["teste"])
function mergeObj(Obj1, Obj2) {
    return __assign(__assign({}, Obj1), Obj2);
}
var newObject = mergeObj({ name: "Bernardo" }, { age: 30, job: "Programmer" });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(4, 1));
console.log(biggestNumber("4", "1"));
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3,], [4, 5]));
console.log(mergeArrays([1, 2, 3,], ["teste", "testando"]));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return "Olá " + greet + name + ", tudo bem?";
    }
    else {
        return "Olá" + name + ", tudo bem?";
    }
}
console.log(modernGreeting("Bernardo"));
console.log(modernGreeting("Bernardo", "D."));
// 7 parametro default
function somaDefault(n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 12));
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um numero");
    }
}
doSomething(1);
doSomething([1, 2, 3]);
// 9 - never
function showErrorMessege(msg) {
    throw new Error(msg);
}
// showErrorMessege("Algum erro!")
// 10 - Rest Operator
function sumAll() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (number, sum) { return sum + number; });
}
console.log(sumAll(1, 23, 4, 5));
// 11 - destructuring como parametro
function showProductDetails(_a) {
    var name = _a.name, price = _a.price;
    return "O nome do produto é: " + name + " e ele custa R$" + price;
}
var shirt = { name: "Camisa", price: 49.90 };
console.log(showProductDetails(shirt));
